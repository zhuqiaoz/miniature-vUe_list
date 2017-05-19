<template>
    <div class="input clearfix">
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
                msg:'沁曦结果分析'
            }
        },
        mounted () {
            // 基于准备好的dom，初始化echarts实例
            var myChart = ECharts.init(document.getElementById('box'));
            // 绘制图表
            myChart.setOption({
                title: { text: this.msg },
                legend:{
                        data: ["TSH","FT3","FT4","TT3","TT4","T3","T4"],
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross'
                    },  
                    // formatter: "{b} <br/>{a}: {c} ({d}%)"
                },
                axisPointer: {
                    link: {xAxisIndex: 'all'},
                    label: {
                        backgroundColor: '#777'
                    }
                },
                grid: {
					left: '3%',
					right: '4%',
					bottom: '3%',
					containLabel: true
				},
                xAxis: {
                     type: 'category',
					 boundaryGap: false,
                     data: ["2016-12-05","2017-01-09","2017-01-24","2017-04-15","2017-04"],
                },
                yAxis: {type: 'value'},
                series: [
                    {
						name:'TSH',
						type:'line',
						stack: 'TSH参考值低于6',
                        itemStyle: {
                            normal: {
                                color: 'red',
                                color0: '#FA0000',
                                borderColor: null,
                                borderColor0: null
                            }
                        },
						data:[9.76, 14.48, 4.839, 1.58, 6.82],
					},
                    {
						name:'FT3',
						type:'line',
						stack: 'FT3参考值低于6.5',
						data:[6.05, 5.68, 0, 0, 5.8]
					},
                    {
						name:'FT4',
						type:'line',
						stack: 'FT4参考值低于22',
						data:[13.05, 10.45, 0, 0, 14.3]
					},
					{
						name:'TT3',
						type:'line',
						stack: 'TT3的参考值小于6',
						data:[0, 0, 0, 0, 2]
					},
					{
						name:'TT4',
						type:'line',
						stack: 'TT3的参考值小于160/10',
						data:[0, 0, 0, 0, 14]
					},
                    {
						name:'T3',
						type:'line',
						stack: 'T3参考至不超过2.1',
						data:[0, 3.12, 2.08, 2.48, 0]
					},
                    {
						name:'T4',
						type:'line',
						stack: 'T4参考至不超过127/10',
						data:[0, 12.6, 10.7, 15.0, 0]
					},
                    ]
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
    width: 1000px;
    height: 400px;
}
</style>