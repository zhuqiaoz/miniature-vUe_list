<template>
    <div class="headerwrap" slot="logo" >
        <header class="header" >
            <div class="wrap">
                <div class="qx-header">
                    <i class="el-icon-star-on"></i>
                    <span>沁曦</span>
                </div>
            </div>
        </header>
    </div>
</template>
<script>
export default{
    data () {
        return {
            
        }
    },
    mounted () {
        document.title="沁曦结果筛查"
    }
}
</script>
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