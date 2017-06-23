<template>
    <div class="qx-left clearfix" slot="left">
        <div class="wrap clearfix">
        <el-col :span="5">
            <el-menu mode="vertical" :default-active="defaultActive" class="el-menu-vertical-demo" :router=true>
                <el-menu-item :index="'/'+item.path"  v-for="(item,index) in item_list" :key="index" v-text="">
                    <i :class="item.class"></i>{{item.name}}
                </el-menu-item>
            </el-menu>
        </el-col>
            <el-col :span="19">
                <router-view ></router-view>
            </el-col>
            
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import { litem } from '../../mock/mock.js'
export default{
    data () {
        return {
            item_list:''
            // [
            //     { name : '结果输入' , path : 'input' , class : 'el-icon-edit' },
            //     { name : '化验项目' , path : 'pro'  , class : 'el-icon-date' },
            //     { name : '结果对比' , path : 'contrast' , class : 'el-icon-upload' },
            //     { name : '结果分析' , path : 'Analysis' , class : 'el-icon-setting' },
            //     { name : '历史项目' , path : 'history' , class : 'el-icon-warning' },
            //     { name : '相关知识' , path : 'knowledge' , class : 'el-icon-delete' },
            // ],
        }
    },
    computed: {
			defaultActive: function(){
				return this.$route.path.replace('/input', '');
			}
		},
    mounted () {
        axios.get('/api/Listitem').then(res=>{
            this.item_list = res.data.list
        });
    }
}

</script>
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