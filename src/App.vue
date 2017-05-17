<template>
  <transition name="qx-fade" mode="out-in">
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
