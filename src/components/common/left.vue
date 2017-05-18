<template>
    <div class="qx-left clearfix" slot="left">
        <div class="wrap">
            <!--<ul>
                <li v-for="(value,index) in arrs" :key="index">
                    <router-link :to="'/'+value.type"><i class="el-icon-menu"></i>
                        {{value.name}}
                    </router-link>
                </li>
            </ul>-->
        <el-col :span="5">
            <el-menu mode="vertical" :default-active="defaultActive" class="el-menu-vertical-demo" :router=true>
                <el-menu-item index="/input"><i class="el-icon-edit"></i>结果输入</el-menu-item>
                <el-menu-item index="/pro"><i class="el-icon-date"></i>化验项目</el-menu-item>
                <el-menu-item index="/contrast"><i class="el-icon-upload"></i>结果对比</el-menu-item>
                <el-menu-item index="/Analysis"><i class="el-icon-setting"></i>结果分析</el-menu-item>
                <el-menu-item index="/history"><i class="el-icon-warning"></i>历史项目</el-menu-item>
                <el-menu-item index="/knowledge"><i class="el-icon-delete"></i>相关知识</el-menu-item>
            </el-menu>
        </el-col>
            <el-col :span="19">
                <router-view ></router-view>
            </el-col>
            
        </div>
    </div>
</template>
<style scoped>
.qx-left{
    margin-top: 20px;
}
.wrap{
    height: 100%;
}
.el-menu-item{
    text-align: center;
}

</style>
<script>
export default{
    computed: {
			defaultActive: function(){
				return this.$route.path.replace('/', '');
			}
		},
}

</script>