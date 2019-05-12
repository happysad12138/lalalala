<template>
  <swipe 
    class="my-swipe"
    :speed="100"
    :auto="1000"
  >
    <swipe-item class="slide1"></swipe-item>
    <swipe-item class="slide2"></swipe-item>
    <swipe-item class="slide3"></swipe-item>
  </swipe>
</template>
<script>

import { Swipe, SwipeItem } from 'vue-swipe';
import 'vue-swipe/dist/vue-swipe.css';

export default {
  components: {
    Swipe,SwipeItem
  }
};
</script>

<style>
.my-swipe {
  height: 200px;
  color: #fff;
  font-size: 30px;
  
  text-align: center;
}
 
.slide1 {
  background: url('../assets/img/fl01.png');
  background-size: cover;
  color: #fff;
  line-height: 200px;
}
 
.slide2 {
   background: url('../assets/img/fl02.png');
  background-size: cover;
  color: #000;
  line-height: 200px;
}
 
.slide3 {
   background: url('../assets/img/fl03.png');
  background-size: cover;
  color: #fff;
  line-height: 200px;
}


</style>
