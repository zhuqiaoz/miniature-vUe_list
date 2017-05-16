<template>
    <div class="wrap clearfix">
        <div class="qx_left">
            <router-link to="/home">
                <img src="../../image/IMG20170516_113127.jpg" :alt="msg" :title="msg" @click="reload">
            </router-link>
        </div>
        <div class="qx_right">
            <h2>这是我可爱的小女儿：</h2>
            <strong>{{msg}}</strong>
            <div>
                <p>我家宝贝出生在：河南新乡第二人民医院,出生日期是：{{data}}。</p>
                <p>做这个小东西是为了,纪念一些过去发生的事情。</p>
                <div :style="marginTop">
                   年龄: {{serccerfx}}
                </div>
                <router-link to="/head">详细信息--></router-link>
            </div>
        </div>
    </div>
</template>
<script>
export default{
    data () {
        return {
            msg:'沁曦',
            data:'2016-11-19',
            // age:'',
            // SetDate:'',
            // SetMonth:'',
            // SetDay:'',
            // SetHours:'',
            // SetMinutes:'',    
            marginTop:{
                marginTop:'50px',
                fontSize:'40px',
                height:'75px',
                lineHeight:'75px'
            }
        }
    },
    methods: {
        reload:function(){
            window.location.reload();
        }

    },
    computed: {
        serccerfx:function(){
        var timeSpan = new Date().getTime() - new Date("2016/11/19 19:11:30").getTime();
        var myDate = new Date(timeSpan);
            myDate.getYear(); //获取当前年份(2位)
            myDate.getFullYear(); //获取完整的年份(4位,1970-????)
            myDate.getMonth(); //获取当前月份(0-11,0代表1月)
            myDate.getDate(); //获取当前日(1-31)
            myDate.getDay(); //获取当前星期X(0-6,0代表星期天)
            myDate.getTime(); //获取当前时间(从1970.1.1开始的毫秒数)
            myDate.getHours(); //获取当前小时数(0-23)
            myDate.getMinutes(); //获取当前分钟数(0-59)
            myDate.getSeconds();
            myDate.toLocaleDateString(); //获取当前日期
            var mytime = myDate.toLocaleTimeString(); //获取当前时间
            myDate.toLocaleString(); //获取日期与时间<br>

            return(myDate.getFullYear()!="1970"?myDate.getFullYear() + "年" + myDate.getMonth() + "月" + myDate.getDate() + "天" + myDate.getHours() + "时" + myDate.getMinutes() + "分"+myDate.getSeconds()+"秒":myDate.getMonth() + "月" + myDate.getDate() + "天" + myDate.getHours() + "时" + myDate.getMinutes() + "分"+myDate.getSeconds()+"秒"); 
        }
    },
    mounted () {

    }

}


</script>
<style scoped>
.wrap{
    padding-top: 60px;
}
.qx_left{
    float: left;
    padding: 0 10px;
}
.qx_right{
    float: left;
    width: 769px;
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
</style>