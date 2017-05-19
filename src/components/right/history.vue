<template>
    <div class="input clearfix">
        <bread-crumb>
            <slot name="bread"></slot>
        </bread-crumb>
        <div id="box" style="width:1000px;height:600px;">

        </div>
    </div>
</template>
<script>
    import breadCrumb from '../Breadcrumb/bread'
    import ECharts from 'echarts'
    export default{
        data () {
            return {
                msg:'我是历史项目'
            }
        },
        components: {
            breadCrumb
        },
        mounted () {
        }
    }
</script>