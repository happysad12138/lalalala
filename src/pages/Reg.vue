<template>
  <div class="registerBg"> 
 
  <div class="container">
  
  	<div class="photograph"> 
    	<span><img src="../assets/images/photograph.png" class="photographImg"></span>
    </div>
      <div class="input-group" id="aaa"> 
            <input type="file" class="original-upload" accept="image/*" ref="d1"/>
            <a href="javascript:;" class="fake-uploadbtn">上传头像</a>
    </div> 
    <div class="input-group" id="bbb"> 
        <span class="span-a"><img alt="登录" src="../assets/images/account.png" ></span>
        <input type="text" class="inputuser ipt" placeholder="用户名/邮箱" v-model="username">
    </div>
    <div class="input-group"> 
      	<span class="span-b"><img  alt="密码" src="../assets/images/password.png"></span>
        <input type="text" class="inputpass ipt" placeholder="密码输入" v-model="password">
    </div>
     <div class="input-group"> 
        <input type="text" class="inputnike ipt" placeholder="昵称输入" v-model="nikename">
    </div>
   
      
    <button type="button" class=" btn-login" @click="reg">注册</button>
     
  </div>

  <router-link to="/login" class="last" tag='p'>已有账号？去登录>>></router-link>
 
  
</div>
</template>
<script>




export default {

   //数字123456会被立即转换成字符串 "123456"

// HTML 文件类型input，由用户选择//
//formData.append("userfile", fileInputElement.files[0]);
 
   data(){
    return {
      username:'',
      password:'',
      nikename:'',
      // file:'/assets/img/'+this.$refs.d1.files[0].name
     
     
    }
  },
  methods:{
    reg(){

      let formData = new FormData();

formData.append("username", this.username);
formData.append("password", this.password);
formData.append("nikename", this.nikename);
formData.append("files",'/assets/img/'+this.$refs.d1.files[0].name);
let request = new XMLHttpRequest();
request.open("POST", "http://localhost:3000/api/reg",false);
request.send(formData);
if(JSON.parse(request.responseText).error==0){
 
   this.$router.push('/login')
}else{
  console.log('失败！！！！！')
}

     }
  }
}
</script>

<style scoped>

@charset "utf-8";
/* CSS Document */
.last{position: absolute;top:4.5rem;right:.2rem;font-size:.16rem;color:white;cursor: pointer}
  .container{position:relative;}
  #aaa{height:50px;position:absolute;left:105px;top:170px;}
  #bbb{margin-top:80px;}


            .upload-box {
                position: relative;
                padding: 25px;
                width:100%;
                height: 150px;
                
                
            }

.aaaa{padding-bottom:20px;height: 50px;}

 .original-upload {
                position: absolute;
                top: 0;
                left: 15px;
                width: 134px;
                height: 42px;
                opacity: 0;
                z-index: 3;
                cursor: pointer;
               
               
            }
 .fake-uploadbtn {
                display: block;
                width: 136px;
                line-height: 42px;
                background-color: #FFCCCC;
                color: white;
                text-decoration: none;
                text-align: center;
                border-radius: 12px;
                font-size: 18px;
                 border: 1px solid salmon;
                  margin-left:15px;
                  
            }


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
   ;}

.onceWord{width:100%;}
.once{ display:inline-block; width:40%; float:left; font-size:14px; color:#FFFFFF;margin-left: 3%}
.forget{ display:inline-block; width:50%; float:right; text-align:right; font-size:14px; color:#FFFFFF;}




/*---------登录界面---------*/

/*注册界面*/
.zhuce{ margin:15em auto 0 auto; text-align:center; overflow:hidden;}
</style>