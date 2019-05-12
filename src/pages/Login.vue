<template>
  <div class="registerBg"> 
  <!---container-->
  <div class="container">
  
  	<div class="photograph"> 
    	<span><img src="../assets/images/photograph.png" alt="个人头像" class="photographImg"></span>
    </div>
     
    <div class="input-group"> 
        <span class="span-a"><img alt="登录" src="../assets/images/account.png" ></span>
        <input type="text" class="inputuser ipt" placeholder="用户名/邮箱登录" v-model='username'>
    </div>
    <div class="input-group"> 
      	<span class="span-b"><img  alt="密码" src="../assets/images/password.png"></span>
        <input type="text" class="inputpass ipt" placeholder="密码输入" v-model='password'>
    </div>
      
    <button type="button" class=" btn-login" @click='login'>登录</button>
      
    <div class="onceWord">
      	<!-- <a href="#"><span class="once">立即注册</span></a> -->
      	<a href="#"><router-link to="/reg" class="once" tag='span'>立即注册</router-link></a>
        
        <a href="#"><span class="forget">忘记密码？</span></a>
    </div>
    
    <div class="register-a">
    	<span class="register-aa"></span>
        <span class="register-ab">使用第三方账号登录</span>
        <span class="register-ac"></span>
    </div>
    
    <div class="register-a">
    	<a href="#"><img src="../assets/images/weixin.png" alt="微信" class="register-ad"></a>
        <a href="#"><img src="../assets/images/weibo.png" alt="微博" class="register-ad"></a>
        <a href="#"><img src="../assets/images/QQ.png" alt="QQ"></a>
    </div>
    
      
  </div>
  <!--//container--> 
  
</div>
</template>
<script>
export default {
  // methods:mapActions(['UPDATE_USER'])
  data(){
    return {
      username:'',
      password:'',
      error:false
    }
  },
  methods:{
    login(){
      this.$store.dispatch(
        'UPDATE_USER',
        {
          username:this.username,
          password:this.password
        }
      ).then(
        data => {
          //同步一份到本地
          if(data.error==0){
            localStorage.setItem('vue_user',JSON.stringify(data));
            this.$router.push('/mypage')
          }else{
            this.error = true
          }
        
        }
      )
    }
  }
 
}
</script>

<style scoped>

@charset "utf-8";
/* CSS Document */



.registerBg{
  position:absolute;
 height:100%;
	width:100%;
 overflow: hidden; 

	background:url(../assets/images/register_bg.png) no-repeat center center fixed;
	background-size:100% 100%;
	-webkit-background-size:100% 100%;
	-moz-background-size:100% 100%;
	-o-background-size:100% 100%;
	}
	
/*登录界面*/
.photograph{
	margin:3em auto 2em auto;
	text-align:center;
	width:140px;
	height:144px;
	border:7px solid #FFFFFF;
	border-radius:50%;
	overflow:hidden;
	}
.photograph span{ display:inline-block; font-size:18px; font-weight:900; color:#FFFFFF; line-height:20px; }
.photographImg{ margin:2em 0;}

.input-group{position: relative;margin-bottom: 1em;width: 100%;height:34px}
.input-group span{background-color: #FFCCCC;padding: 6px 12px;
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
    color: #555;
    text-align: center;border: 1px solid #ccc;
    border-radius: 4px;width:.4rem;
    white-space: nowrap;
    vertical-align: middle;position: absolute;left:5%;}


.input-group .ipt{height: 34px;font-size: .18rem;
    background-image: none;
    background-color: #FFCCCC;
    border: 1px solid #ccc;
    border-radius: 4px;
    color: #fff;width:75%;position: absolute;left:20%}
    .btn-login{width:85%;margin:0 auto;background-color: #ffffff;margin-bottom: 1em;opacity: 0.5;display: block;height:.38rem;font-size:.2rem
    }

.onceWord{width:100%;}
.once{ display:inline-block; width:40%; float:left; font-size:14px; color:#FFFFFF;margin-left: 3%}
.forget{ display:inline-block; width:50%; float:right; text-align:right; font-size:14px; color:#FFFFFF;}

.register-a{ margin:7em auto 3em auto; width:100%; text-align:center;}
.register-aa{ display:inline-block; border-bottom:1px solid #FFFFFF; margin:4px 0px; width:25%;}
.register-ab{ display:inline-block; margin:0px auto; width:37%; text-align:center; font-size:13px; }
.register-ac{ display:inline-block; border-bottom:1px solid #FFFFFF; margin:4px 0px; width:25%;}
.register-ad{  margin-right:2em;}

/*---------登录界面---------*/

/*注册界面*/
.zhuce{ margin:15em auto 0 auto; text-align:center; overflow:hidden;}
</style>