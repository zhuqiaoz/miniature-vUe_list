<template>
      <div>
            <head-top id="head_top">
                  <slot name="logo"></slot>
            </head-top>
            <main-left id="main-left">
                  <slot name="left"></slot>
            </main-left>

      </div>
      
</template>
<style scoped>

</style>
<script>
import headTop from '../common/head'
import mainLeft from '../common/left'
export default{
      components: {
            headTop,
            mainLeft,
      },
      // mounted () {
      //       this.$route.path.replace('/', '');
      // }
}
</script>