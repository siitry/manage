<template>
    <div id="user">
        <el-breadcrumb separator="/layout">
            <el-breadcrumb-item :to="{ path: '/layout'}">首页</el-breadcrumb-item>
            <!-- <el-breadcrumb-item>用户中心</el-breadcrumb-item> -->
        </el-breadcrumb>
        <h2>用户中心</h2>
    </div>
</template>
<script>
export default {
    name: 'User'
}
</script>