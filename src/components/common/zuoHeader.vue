<template>
  <div class="wrap">

    <div class="logo">
      <a href="index.html" class="blogo">ZUO</a>
      <span class="slogo">HONEY WASABI</span>
    </div>

    <div class="guide">
      <a href="index.html">首页</a>
      <a href="articles.html">深度</a>
      <a class="downloadApp" @click="showDownload">下载APP</a>
      <div class="search">
        <img src="../../assets/index/search.png"/>
        <input type="text" placeholder="输入关键字搜索">
      </div>
    </div>

    <div class="user">
      <a class="login" @click="showLogin">
        <img src="../../assets/index/user.png"/>
        <span class="linkLogin">登录</span>
      </a>
      <a class="linkRegister" @click="showRegister">注册</a>
    </div>
    <!--隐藏内容-->
    <!--hideLshowR-->
    <transition name="fade">
      <QRdownload v-if="isShowDownload" @click.native="isHideDownload"></QRdownload>
    </transition>
    <Login @noCount="hideLshowR" :isShow="isShowLogin" @isHide="hideLogin" @forgetPW="hideLshowF"></Login>
    <Register @haveCount="hideRshowL" :isShowReg="isShowRegister" @isHideReg="hideRegister"></Register>
    <Forget :isShowFor="isShowForget" @isHideFog="hideForget"></Forget>
  </div>
</template>

<script>
  import QRdownload from '../index/QRdownload.vue'
  import Login from '../index/login.vue'
  import Register from '../index/register.vue'
  import Forget from '../index/forget.vue'

  export default {
    name: 'ZuoHeader',
    components: {
      Login,
      QRdownload,
      Register,
      Forget
    },
    data() {
      return {
        isShowLogin: false,
        isShowDownload: false,
        isShowRegister: false,
        isShowForget: false
      }
    },
    methods: {
//      显示登录界面
      showLogin() {
        this.isShowLogin = true;
      },
      hideLogin() {
        this.isShowLogin = false;
//        console.log(this.isShowLogin)
      },
//      显示下载页面
      showDownload() {
        this.isShowDownload = true;
      },
      isHideDownload() {
        this.isShowDownload = false;
      },
//      显示注册界面
      showRegister() {
        this.isShowRegister = true;
      },
      hideRegister() {
        this.isShowRegister = false;
      },
//      隐藏忘记密码页面
      hideForget() {
        this.isShowForget = false
      },
//    登录转注册：登录界面隐藏、注册界面显示
      hideLshowR() {
        this.isShowLogin = false;
        this.isShowRegister = true;
      },
//    注册转登录：登录界面显示、注册界面隐藏
      hideRshowL() {
        this.isShowLogin = true;
        this.isShowRegister = false;
      },
//    点击登录界面的忘记密码：登录界面消失、忘记密码页面显示
      hideLshowF() {
        this.isShowLogin = false;
        this.isShowForget = true;
      }
    }
  }


</script>

<style scoped>
  .wrap {
    position: fixed;
    z-index: 99;
    background-color: #272c2f;
    width: 100%;
    padding: 0 30px;
    display: flex;
    height: 60px;
    justify-content: space-between;
    align-items: center;

  }

  .logo {
    display: flex;
    align-items: center;
  }

  .logo .blogo {
    font-weight: 800;
    font-size: 20px;
    color: white;
    margin: 0 8px;
    text-decoration: none;
  }

  .logo .slogo {
    font-size: 10px;
    color: rgba(255, 255, 255, .3);
    /*width: 100px;*/
  }

  .guide {
    align-items: center;
    display: flex;
    font-size: 14px;
  }

  .guide a {
    margin: 0 15px;
    text-decoration: none;
    color: #9ea0a5;
  }

  .guide .downloadApp {
    cursor: pointer;
  }

  .guide input {
    width: 230px;
    margin-left: 10px;
    padding: 6px 30px 6px 10px;
    background-color: #464b4d;
    color: #fff;
    outline: none;
  }

  .guide .search {
    position: relative;
    border: none;
  }

  .guide img {
    width: 20px;
    height: 20px;
    position: absolute;
    right: 10px;
    top: 6px;
  }

  .user .login {
    position: relative;
    margin-right: 30px;
    cursor: pointer;
  }

  .user a {
    font-size: 14px;
    text-decoration: none;
    color: #9ea0a5;
  }

  .linkRegister {
    cursor: pointer;
  }

  .user img {
    width: 20px;
    height: 20px;
    position: absolute;
    left: -22px;
    top: -3px;
  }

  /*过渡样式*/

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }

  .fade-enter, .fade-leave-to {
    opacity: 0
  }

</style>
