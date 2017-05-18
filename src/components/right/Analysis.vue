<template>
    <div class="clearfix">
        <!--{{msg}}-->
        <bread-crumb>
            <slot name="bread"></slot>
        </bread-crumb>
        <div id="box"></div>
    </div>
</template>
<style>

</style>
<script>
    import ECharts from 'echarts'
    import breadCrumb from '../Breadcrumb/bread'
    export default{
        data () {
            return {
                msg:'我是结果分析'
            }
        },
        mounted () {
            // 基于准备好的dom，初始化echarts实例
            var myChart = ECharts.init(document.getElementById('box'));
            // 绘制图表
            myChart.setOption({
                title: { text: this.msg ,
                    subtext:'沁曦',
                    sublink:'http://www.baidu1.com',
                    padding:[5,5,5,5],
                    show:true,
                    link:'http://www.baidu.com',
                    target:'self',
                    color:'#b03a5b',
                    backgroundColor:'#666',
                    textAlign:'left',
                    textBaseline:'top',
                    left:'250',
                    borderColor:'#ccc',
                    borderWidth:'1',
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                    shadowBlur: 10
                },
                legend:{

                },
                tooltip: {show:true},
                xAxis: {
                     //data: ["TSH","FT3","FT4","TT3","TT4"]
                     data: ["2016-11","2016-12","2017-01","2017-02","2017-03","2017-04","2017-05","2017-06"]
                },
                // yAxis: { type:'log',
                //     data: ["2016-11","2016-12","2017-01","2017-02","2017-03","2017-04","2017-05","2017-06"]
                // },
                yAxis: {},
                series: [{
                    name: '增长',
                    type: 'scatter',
                    data: [5,10,2,4,5,]
                }]
            });
        },
        components: {
            breadCrumb
        }
    }
</script>
<style scoped>
.clearfix{
    float: left;
}
#box{
    width: 600px;
    height: 400px;
}
</style>