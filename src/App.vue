<template>
  <div id="app">
    
    <transition
      enter-active-class="animated fadeIn"
    >
     <router-view></router-view>
    </transition>
    <loading v-show='bLoading'></loading>
     <Footer v-show='bfoot'></Footer>
  </div>
</template>

<script>
import Footer from './components/Footer.vue'
import loading from './components/loader/Loading.vue'
import axios from 'axios'
import { mapGetters } from 'vuex'
export default {
  name: 'app',

  watch:{
    $route:{
      handler:function(route){
        let path = route.path;
        this.checkPath(path);
      },
      immediate:true
    }
  },
  methods:{
    checkPath(path){
      if(/home|follow|column/.test(path)){
       
        this.$store.dispatch('UPDATE_FOOT',true)
      }
      if(/login|reg|detail/.test(path)){
     
        this.$store.dispatch('UPDATE_FOOT',false)
      }
      if(/mypage/.test(path)){
        
        this.$store.dispatch('UPDATE_FOOT',true)
      }
    }
  },
  components: {
    Footer,loading
  },
  computed:mapGetters([
    'bLoading','bfoot'
  ])
}
</script>

<style>


</style>
