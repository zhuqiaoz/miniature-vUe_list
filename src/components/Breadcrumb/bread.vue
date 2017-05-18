<template>
    <div slot="bread">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item v-for="(item, index) in $route.meta" key="index">{{item}}</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>
<script>

</script>
<style>
    .el-breadcrumb{
        height: 50px;
        line-height: 50px;   
    }
</style>