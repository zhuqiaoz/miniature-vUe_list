<template>
    <div class="headerwrap">
        <header class="header">
            <div class="wrap">
                <div class="qx-header">
                    <i class="el-icon-star-on"></i>
                    <span>沁曦化验报告总计</span>
                </div>
            </div>
        </header>
    </div>
</template>
<style scoped>
#headerwrap{
    height: 65px;
}
.header{
    height: 65px;
    line-height: 65px;
    color: #fff;
    width: 100%;
    position: relative;
    top: 0;
    left: 0;
    z-index: 100;
    background: rebeccapurple;
}
.header .wrap{
    height: 100%;
    box-sizing: border-box;
}
</style>
<script>
import Left_qx from './left.vue'

export default{
    data () {
        return {
            
        }
    },
    components: {
        Left_qx
    }
}

</script>