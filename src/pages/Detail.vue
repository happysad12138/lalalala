<template>
  <div class="Detail">
    <div class="nav"  style='background: rgba(255, 204, 204,0.3);'>
      <ul>
        <li @click="goback"></li>
      </ul>
    </div>
    <div class="content" v-if="!error" style='background: rgba(255, 204, 204,0.3);'>
      <div class="header">
        <h2>
          <img :src="baseUrl+detail.detail.icon" style="border-radius:50%;width:.5rem;height/;.5rem">
        </h2>
        <p style='font-size:.2rem'>{{detail.detail.auth}}</p>
      </div>

      <div class="cont">
        <h3>{{detail.h3}}</h3>
        
        <div class="text-box" v-html="detail.detail.content">
        </div>
      </div>
    </div>
    <div v-show="error">数据读取失败</div>
    
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data(){return {
    error:false,
    baseUrl:"http://47.100.206.214:3000"

    
  }},
  methods:{
    goback(){
      this.$router.go(-1)
    }
  },
  computed:mapGetters([
    'detail'
  ]),
   mounted(){
    //..
    let dataName = this.$route.query.dataName;
    let id = this.$route.params.id;

    this.$store.dispatch('UPDATE_DETAIL',{dataName,id})

  }
}
</script>

<style scoped>
html,
body {
  overflow-x: hidden;
  background: rgba(255, 204, 204,0.3);
}
.nav {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: #fff;
  border-bottom: 1px solid #e8eaec;
  z-index: 99;
}
.nav ul {
  width: 6.4rem;
  height: 0.45rem;
  padding-top:0;
  margin: 0 auto;
  position:relative;
  
}
.nav ul li {
  width: 0.29rem;
  height: 100%;
  background: url(../assets/img/bc.png) 0 0 no-repeat;
  background-size: 100%;
  
  position:absolute;
  left:5px;top:10px;
  z-index: 10000
  
}

.content {
  max-width: 6.4rem;
  margin: 0 auto;
  margin-top: 0.6rem;
  background: #f2f4f5;
  padding-bottom: 0.85rem;
}
.content .header {
  padding: 0.39rem 0.28rem 0.15rem 0.28rem;
  width:100%;
  overflow: hidden;
  height: auto;
  background: none;
}
.header h2 {
  float: left;
  margin-right: 0.18rem;
}
.header p {
  float: left;
  margin-top: 0.18rem;
  font-size: 0.3rem;
}

.content .cont {
  padding: 0 0.38rem;
  color: #494d4d;
}
.cont h3 {
  font-size: 0.3rem;
  line-height: 0.5rem;
  padding-bottom: 0.25rem;
}

.cont .text-box {
  font-size: 0.25rem;
}
.text-box p {
  line-height: 0.45rem;
  margin-bottom: 0.1rem;
}


</style>