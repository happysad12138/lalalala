
<template>
<div class='home'>
    <!-- 顶部定位 -->
    <!-- <div class="top-fixed">
    <a href="#top" title="">
        <img class="am-gotop-icon-custom" src="../assets/img/goTop.png" />
    </a>
</div> -->
<!-- 轮播部分 -->
<Slide></Slide>
<Nav></Nav>
<List :list="banner" :dataName="'banner'"></List>
<Footer></Footer>
</div>

</template>
<script>
import { mapGetters } from 'vuex'

import Slide from '../components/Slider.vue'
import Nav from '../components/Nav.vue'
import List from '../components/List.vue'
import Footer from '../components/Footer.vue'
export default {
    data(){
        return {
             list: []
        }
    },
     computed:mapGetters([
    'banner'
  ]),
   components:{
       Slide,Footer,Nav,List
   } ,
    mounted() {
    this.$store.dispatch('UPDATE_HOME',{_page:1,_limit:5})
   
  }
// mounted() {
// //this.$root.$data.bLoading = true;
//  axios({url:'http://localhost:3000/api/banner',params:{_limit:5}}).then((res)=>{
//      this.list = res.data.data;
//  })

//   }
};
</script>

<style scoped>
html,body {height:100%;}
</style>