<template>
    <div class="qx-left clearfix" slot="left">
        <div class="wrap">
            <ul>
                <li v-for="(value,index) in arrs" :key="index">
                    <router-link :to="'/'+value.type"><i class="el-icon-menu"></i>
                        {{value.name}}
                    </router-link>
                </li>
            </ul>

            <router-view ></router-view>
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
ul{
    width: 20%;
    height: 100%;
    float: left;
}
ul li{
    height: 55px;
    line-height: 55px;
    text-align: center;
    background: #f5f5f5;
    color: #663399;
    /*float: left;*/
    transition:  all .8s ease;
}
ul li:hover{
    background: blueviolet;
}
</style>
<script>
    export default{
        data () {
            return {
                arrs:[
                    {type:'input',name:'结果输入'},
                    {type:'pro',name:'化验项目'},
                    {type:'contrast',name:'结果对比'},
                    {type:'Analysis',name:'结果分析'},
                    {type:'history',name:'历史项目'},
                    {type:'knowledge',name:'相关知识'},
                ]
            }
        },
        methods: {
            
        }

    }

</script>