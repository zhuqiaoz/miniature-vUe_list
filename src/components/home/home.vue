<template>
    <div class="wrap clearfix">
        <div class="qx_left">
                <div class="block">
                    <el-carousel height="500px">
                        <el-carousel-item v-for="(item,index) in arrs" :key="index">
                            <router-link to="/index">
                                <img :src="item" :alt="msg" :title="msg" @click="reload">
                            </router-link>
                        </el-carousel-item>
                    </el-carousel>
                </div>
        </div>
        <div class="qx_right">
            <h2>这是我可爱的小女儿：</h2>
            <strong>{{msg}}</strong>
            <div>
                <p>我家宝贝出生在：河南新乡第二人民医院,出生日期是：{{data}}。</p>
                <p>做这个小东西是为了,纪念一些过去发生的事情。</p>
                <div :style="marginTop">
                   年龄: 
                   <span>
                        {{SetDate}}{{SetMonth}}{{SetDay}}{{SetHours}}{{SetMinutes}}{{Seconds}}
                   </span>
                   
                </div>
                <router-link to="/index">详细信息--></router-link>
            </div>
        </div>
    </div>
</template>
<script>
    import a from '../../image/20170517-1.jpg'
    import b from '../../image/20170517-2.jpg'
    import c from '../../image/20170517-3.jpg'
    import d from '../../image/20170517-4.jpg'
    import e from '../../image/20170517-5.jpg'
    import f from '../../image/20170517-6.jpg'
export default{
    data () {
        return {
            arrs:[
                a,b,c,d,e,f
            ],
            msg:'沁曦',
            data:'2016/11/19 19:11:30',
            SetDate:'',
            SetMonth:'',
            SetDay:'',
            SetHours:'',
            SetMinutes:'',   
            Seconds:'',
            marginTop:{
                marginTop:'50px',
                fontSize:'40px',
                height:'75px',
                lineHeight:'75px'
            },

        }
    },
    methods: {
        reload:function(){
            window.location.reload();
        },
        time_select:function(){      
            var timeSpan = new Date().getTime() - new Date(this.data).getTime();
            var myDate = new Date(timeSpan);
                myDate.toLocaleString(); //获取日期与时间<br>
                this.SetDate =(new Date().getFullYear())-2016 +'岁';
                this.SetMonth = myDate.getMonth() + "月";
                this.SetDay = myDate.getDate() + "天";
                this.SetHours = myDate.getHours() + "时";
                this.SetMinutes = myDate.getMinutes() + "分";
                this.Seconds = myDate.getSeconds()+'秒';
        }

    },
    computed: {
        
    },
    mounted () {
        setInterval(this.time_select,1000);
    }

}


</script>
<style scoped>
.wrap{
    padding-top: 60px;
}
.block{
    width: 500px;
}
.qx_left{
    float: left;
    padding: 0 10px;
}
.qx_right{
    float: left;
    width: 680px;
    text-align: center;
    position: relative;
    height: 400px;
}
.qx_right h2{
    font-size: 24px;
}
.qx_right strong{
    font-size: 36px;
    font-weight: 600;
    line-height: 60px;
}
.qx_right p{
    line-height: 30px;
}
.qx_right a{
    color: blueviolet;
    display: block;
    position: absolute;
    right: 110px;
    bottom: 10px;
}
 .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
</style>