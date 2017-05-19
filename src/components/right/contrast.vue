<template>
    <div class="input clearfix">
       <bread-crumb>
            <slot name="bread"></slot>
        </bread-crumb>
        <div id="box"></div>
    </div>
</template>
<style scoped>
#box{
  width: 1000px;
  height: 500px;
}
</style>
<script>
  import breadCrumb from '../Breadcrumb/bread'
  import ECharts from 'echarts'
  export default {
    data () {
      return {
        
      }
    },
    components: {
      breadCrumb
    },
    mounted () {
       var myChart = ECharts.init(document.getElementById('box'));
    myChart.setOption({
        title:{text:'环形图'},
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b}: {c} ({d}%)"
      },
      legend: {
          // orient: 'vertical',
          // x: 'center',
          data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
      },
      series: [
          {
              name:'访问来源',
              type:'pie',
              radius: ['50%', '70%'],
              avoidLabelOverlap: false,
              label: {
                  normal: {
                      show: false,
                      position: 'center'
                  },
                  emphasis: {
                      show: true,
                      textStyle: {
                          fontSize: '30',
                          fontWeight: 'bold'
                      }
                  }
              },
              labelLine: {
                  normal: {
                      show: false
                  }
              },
              data:[
                  {value:335, name:'直接访问'},
                  {value:310, name:'邮件营销'},
                  {value:234, name:'联盟广告'},
                  {value:135, name:'视频广告'},
                  {value:1548, name:'搜索引擎'}
              ]
          }
      ]
       })
    }
  }
</script>