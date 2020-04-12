<template>
    <el-container>
        <el-header></el-header>
        <el-sidebar></el-sidebar>
        <div>
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </div>
    </el-container>
</template>
<script>
import Header from './Header'
import Sidebar from './Sidebar'
export default {
    components:{
        "el-header": Header,
        "el-sidebar": Sidebar
    },
    data(){
        return {

        }
    },
    methods: {

        
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