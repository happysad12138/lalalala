import Vue from 'vue'
import App from './App.vue'
import qs from 'qs'
import router from './plugins/router';
import axios from './plugins/axios';
import VueLoading from 'vue-loading-template'
Vue.use(VueLoading, /** options **/)
Vue.config.productionTip = false


//引入vuex状态管理

import store from  './plugins/store'


//同步本地数据->状态仓库state
//let user = localStorage.getItem('vue_user');
//服务器资源指向
//全局 baseUrl
let config = require('../config/config');
window.baseUrl = config.baseUrl.localhost;
window.qs =qs;


import './assets/css/amazeui.min.css'
import './assets/css/animate.min.css'
import './assets/css/wap.css'
import './assets/css/public.css'; 


new Vue({
  store,
  router,
  data:{
    //判断loading页面是否显示
    bLoading:true
  },
  render: h => h(App),
}).$mount('#app')
