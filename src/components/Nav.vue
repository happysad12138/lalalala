<template>
    <div class='navv'>
        <div class="nav-circle">
    <ul class="">
        <li><a href="" class="a1"></a><span>新鲜事</span></li>
        <li><a href="" class="a2"></a><span>趣闻</span></li>
        <li><a href="" class="a3"></a><span>阅读</span></li>
        <li><a href="" class="a4"></a><span>专题</span></li>
        <li><a href="" class="a5"></a><span>订阅</span></li>
        <li><a href="" class="a6"></a><span>专栏</span></li>
        <li><a href="" class="c"></a><span>讨论</span></li>
        <li><a href="javascript:;" class="c1"></a><span>更多</span></li>
    </ul>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.nav-circle{width: 100%;padding:0.25rem .05rem;height:2.24rem;padding-bottom: 0}
.nav-circle li{width:25%;float:left;margin-bottom: .15rem;}
.nav-circle li a{display: block;border-radius: 50%;margin: 0 auto;width: .55rem;height:.55rem;}
.nav-circle li span{display:block;width:100%;text-align: center;padding-top: .05rem;
    font-size: .14rem;}
    .nav-circle li a.a1{background:url(../assets/img/text.png) no-repeat;background-size: 100%} 
    .nav-circle li a.a2{display: block;background:url(../assets/img/menu.png) no-repeat;background-size: 100%} 
    .nav-circle li a.a3{display: block;background:url(../assets/img/news.png) no-repeat;background-size: 100%} 
    .nav-circle li a.a4{display: block;background:url(../assets/img/skin.png) no-repeat;background-size: 100%} 
    .nav-circle li a.a5{display: block;background:url(../assets/img/vote.png) no-repeat;background-size: 100%} 
    .nav-circle li a.a6{display: block;background:url(../assets/img/act.png) no-repeat;background-size: 100%} 
    .nav-circle li a.c{display: block;background:url(../assets/img/video.png) no-repeat;background-size: 100%} 
    .nav-circle li a.c1{display: block;background:url(../assets/img/link.png) no-repeat;background-size: 100%} 
</style>
