<template>
<div class='CList'>
   <List></List>
   <Footer></Footer>
</div>
</template>
<script>
import List from '../components/List.vue'
import Footer from '../components/Footer.vue'
export default {
    props:['list'],
    components:{
        List,Footer
    }
}
</script>
<style scoped>

</style>