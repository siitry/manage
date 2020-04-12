<template>
  <div class="container">
    <div class="box">
        <h1>欢迎登陆kk后台管理系统</h1>
        <div class="input1">
            <input v-model="uname" autocomplete="off" type="text" placeholder="请输入账户">
        </div>
        <div class="input2">
            <input v-model="upwd" type="password" placeholder="请输入密码">
        </div>
        <div class="input3">
            <input @keyup.13="loginkeyup" v-model="captcha" autocomplete="off" type="text" id="pass" placeholder="输入验证码">
            <img :src="captchaURL" @click="randNum=Math.random()">
        </div>
        <div class="btn" v-show="!$store.getters.isLogin">
            <el-button :plain="true" @click="login">登&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;录</el-button>
        </div>
    </div>
    <!-- <router-view></router-view> -->
  </div>
</template>
<script>
export default {
    name: 'Login',
    data(){
        return {
            uname:"admin",
            upwd:"123456",
            captcha:"",
            randNum:Math.random(),
            isLogin:false,
        }
    },
    computed: {
        captchaURL(){
            return `http://www.kehyang.cn:8898/loginExp?`+this.randNum
        }
    },
    methods: {
        loginkeyup(){
            if(this.captcha.trim()!==""){
                //在vue的js程序中执行跳转
                this.$router.push(
                    `/Home`//跳到Product并带参数kw
                );
            }
        },
        login(){
            var reg = /^[a-zA-Z0-9]{3,12}$/;
            //2.获取用户名和密码
            var u = this.uname;
            var p = this.upwd;
            var captcha = this.captcha;
            if(!reg.test(u)){
                // alert("用户名格式不正确");
                this.$message.error('用户名格式不正确');
                return;
            }
            if(!reg.test(p)){
                // alert("密码格式不正确");
                this.$message.error('密码格式不正确');
                return;
            }
            if(captcha==""){
                this.$message({
                    message: '请填写验证码',
                    type: 'warning'
                });
                return;
            }
            var url = "login";
            var obj = {uname:u,upwd:p,captcha:captcha};
            this.axios.get(url,{params:obj})
            .then(res=>{
                if(res.data.code==-1){
                    this.$message.error('用户名或密码错误');
                }else if(res.data.code==410){
                    this.$message({
                        message: '验证码输入错误',
                        type: 'warning'
                    });
                    return;
                }else{
                    this.$message({
                        message: '登陆成功',
                        type: 'success'
                    });
                    this.$store.commit('_setUser',this.uname);
                    this.$router.push("/Main");
                }
            })
        },
    },
}
</script>
<style scoped>
    .container{
        height: 100%;
        background-image: url(../../static/1.jpg);
        position: relative;
    }
    .box{
        position:absolute;
        top:30%;
        left:40%;
    }
    .container input{
        display: inline-block;
        width: 250px;height: 35px;
        background-color: rgba(255, 255, 255, 0);
        outline: none;
        border:1px solid rgb(221, 212, 212);
        border-radius: 20px;
        padding-left: 50px;
        /* margin-bottom:20px; */
    }
    .input1{
        margin: 20px;
    }
    .input2{
        margin: 20px;
    }
    .input3{
        margin: 20px;
    }
    .input1 input{
        background-image: url(../../static/count.png);
        background-repeat: no-repeat;
        background-position:5%;
        background-size: 8%;
    }
    .input2 input{
        background-image: url(../../static/secret.png);
        background-repeat: no-repeat;
        background-position:5%;
        background-size: 8%;
    }
    .input3 input{
        width:145px;
        background-image: url(../../static/yanz.png);
        background-repeat: no-repeat;
        background-position:5%;
        background-size: 20%;
    }
    .input3 img{
        vertical-align:middle;
    }
    input::-webkit-input-placeholder {
	    color: #fff;
    }
    input,textarea::-webkit-input-placeholder {
	    color: #fff;
    }
    .btn button{
        width: 302px;height: 35px;
        border-radius: 20px;
        background-color: #0096E6;
        outline:none;
        border: 0;
        color:#fff;
        cursor:pointer;
    }
</style>