import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import routes from './router/router.config'
import './style/reset.css'
import './style/qx.css'
import {icon} from 'element-ui'
import FastClick from 'fastclick'


if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}


Vue.config.productionTip = false

Vue.use(VueRouter,icon)


const router = new VueRouter({routes})
/* eslint-disable no-new */
new Vue({
  router,
}).$mount('#app');