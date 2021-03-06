import Vue from 'vue/dist/vue.js'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import ElementUI from 'element-ui'  
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(ElementUI);

import ApiCheck from './components/ApiCheck.vue'
import OrderInfo from './components/OrderInfo.vue'

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/api_check', component: ApiCheck },
    { path: '/order_info', component: OrderInfo }
  ]
})

new Vue(Vue.util.extend({ router }, App)).$mount('#app')