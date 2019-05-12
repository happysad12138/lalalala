<template>
    <div>
      
       <vue-loading type="spiningDubbles" color="#d9544e" :size="{ width: '50px', height: '50px' }"></vue-loading>    
    </div>
</template>
<script>
  import { VueLoading } from 'vue-loading-template'
  export default {
    components: {
      VueLoading
    }
  }
  </script>
