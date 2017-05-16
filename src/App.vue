<template>
  <transition name="qx-fade" mode="out-in">
    <!--<img src="./assets/logo.png">-->
    <!--<router-link to="/hello">111</router-link>-->
    <router-view></router-view>
  </transition>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style scoped>
.qx-fade-enter-active , .qx-fade-leave-active{
  transition: opacity .3s;
}
.qx-fade-enter , .qx-fade-leave{
  opacity: 0;
}
</style>
