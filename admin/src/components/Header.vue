<template>
    <el-container class="el-container">
        <el-header class="el-header">
            <!-- <img class="kk" src="../../static/kk.png" alt=""> -->
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                <el-menu-item class="manage">后台管理系统</el-menu-item>
                <el-submenu class="my" index="1">
                    <template slot="title" class="work">用户:</template>
                    <el-menu-item index="2-1" class="github">
                        <a href="http://github.com/siitry" target="_blank">
                            <img src="../../static/github.png" alt=""> Github仓库
                        </a>
                    </el-menu-item>
                    <el-menu-item index="2-2" class="outlogin">
                        <a href="javascript:;" @click="loginout">
                            <img src="../../static/outlogin.png" alt="">退出登录
                        </a>
                    </el-menu-item>
                </el-submenu>
                <el-submenu class="submenu" index="2">
                    <template slot="title" class="work">我的工作台</template>
                    <el-menu-item index="2-1">选项1</el-menu-item>
                    <el-menu-item index="2-2">选项2</el-menu-item>
                    <el-menu-item index="2-3">选项3</el-menu-item>
                </el-submenu>
                <el-menu-item class="xiaoxi" index="3">消息中心</el-menu-item>
            </el-menu>
        </el-header>
    </el-container>
</template>
<script>
export default {
    name: 'App',
    data() {
        return {
            activeIndex: '1',
            activeIndex2: '1',
            dynamicTags: ['标签一', '标签二', '标签三'],
            inputVisible: false,
            inputValue: ''
        }
    },
    components:{
        // "Main": Main,
        // "el-header": Header
    },
    methods: {
        handleSelect(key,keyPath) {
            console.log(key, keyPath);
        },
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            // console.log(key, keyPath);
        },
        handleClose(tag) {
            this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
        },

        showInput() {
            this.inputVisible = true;
            this.$nextTick(_ => {
            this.$refs.saveTagInput.$refs.input.focus();
            });
        },

        handleInputConfirm() {
            let inputValue = this.inputValue;
            if (inputValue) {
            this.dynamicTags.push(inputValue);
            }
            this.inputVisible = false;
            this.inputValue = '';
        },
        loginout(){
            var url="loginout";
            this.axios.get(url).then(res=>{
                if(res.data.code==1){
                    this.$message({
                        message: '已退出登录',
                        type: 'success'
                    });
                    this.$store.state.isLogin=false;
                    this.$router.push("/");
                }
            })
        },
    }
}
</script>
<style scoped>
    .manage{
        color:#fff;
        font-size: 30px;
        padding-left:30px;
    }
    .github{
        padding-left:30px !important;
    }
    .github a{
        text-decoration:none;
        color:#000;
    }
    .github a img{
        width: 25px;
    }
    .github:hover{
        background:#ccc;
    }
    .outlogin{
        padding-left:30px !important;
    }
    .outlogin a{
        text-decoration:none;
        color:#000;
    }
    .outlogin:hover{
        background:#ccc;
    }
    .el-container{
        position: absolute; 
        width: 100%; 
        top: 0px ; 
        left: 0 ; 
        bottom: 0;
        }
    .el-header{
        background-color: rgb(84, 92, 100);
        color:#333;
        text-align:center;
        line-height:60px;
        padding: 0;
        z-index: 1000;
        border-bottom: none;
    }
    .el-header .el-menu-demo{
        background-color: rgba(255, 255,255, 0);
        border-bottom: none;
        background-image: url(../../static/kk.png);
        background-repeat: no-repeat;
        background-size:3%;
        background-position: 50%;
    }
    .my{
        float: right;
    }
    .el-menu-demo .submenu{
        float: right;
    }
    .xiaoxi{
        float: right;
    }
    .el-aside{
        background-color: #D3DCE6;
        color:#333;
        text-align:center;
        line-height: 200px;
        width: 230px !important;
        padding-top: 60px;
        background: #545c64;
    }
    .el-main{
        background-color:#E9EEF3;
        color:#333;
        text-align:center;
        line-height:160px;
        padding-top: 60px;
    }
</style>