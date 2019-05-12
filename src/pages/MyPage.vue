<template>
<div class='mypage'>
    <!-- 我的个人中心 -->
     <div class="pet_mian" >
    <div class="pet_head">
      <header data-am-widget="header"
          class="am-header am-header-default pet_head_block">
        <div class="am-header-left am-header-nav ">
          <a href="javascript:;" class="pet_head_jt_ico" style='font-size:.16rem' @click="logout">退出</a>
        </div>
       
<div class="pet_news_list_tag_name">个人中心</div>
        <div class="am-header-right am-header-nav">
          <a href="javascript:;" class="iconfont pet_head_gd_ico">&#xe600;</a>
        </div>
      </header>
    </div>

    <div class="pet_content pet_content_list" >
      <div class="pet_grzx" style='background: rgba(255, 204, 204,0.3);'>

          <div class="pet_grzx_nr" >
              <div class="pet_grzx_ico">
                  <img :src="baseUrl + user.icon" alt="" style='width:200px;height:200px'>
              </div>

               <!-- 昵称 -->
              <div class="pet_grzx_name">{{user.nikename}}</div>
              <!-- 居住地 -->
              <div class="pet_grzx_map">美国</div>

              <!-- 个人信息简介 -->
              <div class="pet_grzx_num_font">
我坐在水屋下边的平台看着大海，吹着海风，真的是太喜欢了。夜晚有好多小白鲨鱼，好多种鱼。
              </div>
              <div class="pet_grzx_num">
                <span>653<i>喜欢</i></span>
                <span>234<i>关注</i></span>
                <span>34<i>文章</i></span>
              </div>

          </div>

<div class="pet_article_dowload">
      <div class="pet_article_dowload_title">关于Amaze UI</div>
      <div class="pet_article_dowload_content"  style='background: rgba(255, 204, 204,0.3);'><div class="pet_article_dowload_triangle"></div>
      <div class="pet_article_dowload_ico"><img src="../assets/img/footdon.png" alt=""></div>
      <div class="pet_article_dowload_content_font">
Amaze UI 以移动优先（Mobile first）为理念，从小屏逐步扩展到大屏，最终实现所有屏幕适配，适应移动互联潮流。
      </div>
      <div class="pet_article_dowload_all">
        <a href="###" class="pet_article_dowload_Az am-icon-apple"> App store</a>
        <a href="###" class="pet_article_dowload_Pg am-icon-android"> Android</a>
      </div>
      </div>
  </div>
        </div>

        <div class="pet_article_footer_info">Copyright(c)2015 PetShow All Rights Reserved</div>
      </div>
    </div>

    <!-- 隐藏弹出框 -->
    

</div>
</template>
<script>
import store from '../plugins/store'
import { mapGetters } from 'vuex'
export default {
  beforeRouteEnter(to,from,next){
   let result = localStorage.getItem('vue_user');
   console.log(result)
    if(result!=null){
     
      next()
    }else{
      next('/login')
    }
  },
  data(){
    return {
      baseUrl:'http://47.100.206.214:3000',
      user:{}
    }
  },
  mounted(){
     let resu =JSON.parse(localStorage.getItem('vue_user'));
     console.log(resu)
     this.user= resu.data
  },
  
  methods:{
    logout(){
      alert('确定退出当前账户吗');
      axios({url:'/api/logout',method:'PUT'}).then(
        res=>{
          if(res.data.error==0){
            this.$store.commit('UPDATE_USER',{error:1});
            localStorage.removeItem('vue_user');
            this.$router.push('/home')
          }
        }
      )
    }
  }
  
}
</script>
<style scoped>

</style>