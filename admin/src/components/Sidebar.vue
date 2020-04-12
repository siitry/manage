<template>
    <el-container>
        <el-container class="el-container">
            <el-aside class="el-aside">
                <el-row class="tac">
                    <el-col>
                        <el-menu unique-opened router :default-active="onRoutes" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
                            <el-menu-item index="main">
                                <i class="el-icon-location"></i>
                                <span>系统首页</span>
                            </el-menu-item>
                            <el-menu-item index="client">
                                <i class="el-icon-menu"></i>
                                <span slot="title">用户信息</span>
                            </el-menu-item>
                            <el-menu-item index="author">
                                <i class="el-icon-document"></i>
                                <span slot="title">我要学习</span>
                            </el-menu-item>
                            <el-menu-item index="4">
                                <i class="el-icon-setting"></i>
                                <span slot="title">空的一页</span>
                            </el-menu-item>
                        </el-menu>
                    </el-col>
                    </el-row>
            </el-aside>
        </el-container>
    </el-container>
</template>
<script>
export default {
    components:{
    },
    data(){
        return {
            activeIndex: '1',
            activeIndex2: '1',
            dynamicTags: ['标签一', '标签二', '标签三'],
            inputVisible: false,
            inputValue: ''
        }
    },
    computed: {
        onRoutes() {
            return this.$route.path.replace('/', '');
        }
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
        
    },
    
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
    /**标签 */
    .el-tag + .el-tag {
        margin-left: 10px;
    }
    .input-new-tag {
        width: 90px;
        margin-left: 10px;
        vertical-align: bottom;
    }
</style>