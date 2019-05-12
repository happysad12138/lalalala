<template>
    <div class="last">
        <div class="foot" style='background:#FFB6C1'>
            <router-link to="/home" active-class="active" tag='div'>首页</router-link>
            <router-link to="/title" active-class="active" tag='div'>专题列表</router-link>
            <router-link to="/mypage" active-class="active" tag='div'>我的</router-link>
            <!-- <div class="foot2">专题列表</div>
            <div class="foot3">我的</div> -->
        </div>


<!-- <router-link to="/home" active-class="active" tag='li'><a href="javascript:;">首页</a></router-link>
     <router-link to="/login" active-class="active" tag='li'><a href="javascript:;">登录</a></router-link>
      <router-link to="/reg" active-class="active" tag='li'><a href="javascript:;">注册</a></router-link> -->
    </div>
</template>

<style scoped>
    .foot{position: fixed;left: 0;bottom: 0;width: 100%;height:.4rem;display: flex;background: white}
    .foot div{flex:1;text-align: center;font: .28rem/.4rem "";cursor: pointer;color:white}
    
    .active{background:gray;color: #FFCCCC}

</style>


