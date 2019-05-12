<template>
    <div class='listt'>
        <div class="main-content">
            <ul class="main-list">
                
                <li v-for="(items) of list" :key="items.id">
                    <router-link
          :to="{name:'detail',params:{id:items._id},query:{dataName:dataName}}"
        >
                    <div class="part-1">
                        <div class='part-1-l'>
                            <img :src="baseUrl + items.iconuser" alt="">
                            <span>{{items.userdes}}</span>
                        </div>
                        <div class='part-1-r'><span>新鲜事</span></div>
                    </div>
                    <div class="part-2">
                        <h3>{{items.h3}}</h3>
                        <p>每逢长假，总有那么一群人选择远离人山人海，静静地呆在家，坐在电脑电视前。长时间的工作学习让他们感觉很疲惫，对什么都提不起劲，打开电脑却不知道干什么好…</p>
                        <img src="../assets/img/q1.jpg" >
                    </div>
                    </router-link>
                </li>
               
                 
            </ul>
        </div>
    </div>
</template>
<script>
export default {
   
 props:['list','dataName'],
 data(){
     return {
         baseUrl:"http://47.100.206.214:3000"
     }
 }

}

</script>
<style scoped>
    .main-content ul{padding-bottom: .5rem;}
    .main-content li{padding-bottom: .2rem;margin-bottom: .07rem;padding-top: .2rem;border-bottom: .01rem solid #f1f1f1;margin-left: auto;
    margin-right: auto;width:100%;padding-left: .2rem;padding-right: .2rem;box-sizing: border-box;
overflow: hidden;}
    .part-1 img{width:.26rem;height:.26rem;border-radius: 50%}
    .part-1{width: 100%;overflow: hidden;}
    .part-2{width: 100%;overflow: hidden;float: left;position: relative;}
   .part-2 h3{width: 65%}
   .part-2 p{width: 50%;    color: #757575;overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    line-height: 1.3em;
    -webkit-line-clamp: 2;
    max-height: 2.6em;}
    .part-2 img{width:1rem;height: .76rem;position: absolute;top: 0;right: 0}
    .part-1 .part-1-l{float: left;}
    .part-1 .part-1-r{float: right;}
    
</style>
