import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);//安装|注册一些内部的组件到全局

import home from '../pages/Home.vue';
import list from '../pages/ContentList.vue';
import Detail from '../pages/Detail.vue';

import MyPage from '../pages/MyPage.vue';


import login from '../pages/Login.vue';
 import reg from '../pages/Reg.vue';
 import title from '../pages/Content.vue';
import error from '../components/Error.vue';




//匹配
let routes = [
  {path:'/home',component:home},
  {path:'/list',component:list},
  {path:'/mypage',component:MyPage},
  {path:'/title',component:title},

   {name:'detail',path:'/detail/:id',component:Detail},
   {path:'/reg',component:reg},
   {path:'/login',component:login},

  {path:'/',redirect:'/home'},//跳转 声明式
  {path:'*',component:error}
];

let router = new VueRouter({
  routes
});


export default router