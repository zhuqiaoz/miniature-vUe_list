import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import routes from './router/router.config'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import FastClick from 'fastclick'
import './style/reset.css'
import './style/qx.css'




if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}


Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(VueRouter)

const router = new VueRouter({routes})
/* eslint-disable no-new */
new Vue({
  router,
}).$mount('#app');
