<template>
    <div class="all">
        <el-card class="box-card">
        <div slot="header" class="clearfix">
            <span>联系我,我要学技术</span>
            <el-button style="float: right; padding: 3px 0" :plain="true" @click="open2">点我</el-button>
        </div>
        <div>
            <p>大名:柯灏洋</p>
            <p>主页:www.kehyang.cn</p>
            <p>博客:siitry.github.io</p>
            <p>微信:khymj520</p>
            <img src="../../static/vx.jpg" style="width:200px;">
        </div>
        </el-card>
    </div>
</template>
<script>
export default {
    methods: {
        open2() {
            this.$message({
                message: '联系我啊,微信khymj520',
                type: 'success'
            });
        }
    }
}
</script>
<style scoped>
    .all{
        position: relative;
        top:25%;
        left:15%;
    }
    .text {
        font-size: 14px;
    }

    .item {
        margin-bottom: 18px;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }
    .clearfix:after {
        clear: both
    }
    .box-card {
        width: 480px;
    }
</style>