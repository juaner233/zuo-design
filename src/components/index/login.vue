<template>
  <div v-if="isShow" class="wrap">
    <!--蒙版-->
    <div class="loginMask" @click="isHideLogin"></div>
    <!--登录主部分-->
    <div class="login">
      <!--头部logo-->
      <div class="loginTop">
        <img src="../../assets/index/logo.png"/>
        <span>欢迎回到<strong>ZUO</strong></span>
      </div>
      <!--表单-->
      <div class="loginContent">
        <!--社交账号登录-->
        <div class="loginSocial">
          <div class="socialImg">
            <img src="../../assets/index/微博.png"/>
            <img src="../../assets/index/微信.png"/>
          </div>
          <span class="explain">你可以使用第三方社交账号直接登录</span>
          <!--分割线-->
          <div class="divider">
            <div class="lineLeft"></div>
            <span>或者</span>
            <div class="lineRight"></div>
          </div>
        </div>
        <!--表单-->
        <div class="loginForm">
          <input class="phoneNum" type="text" placeholder="手机号">
          <!--验证码登录-->
          <input v-if="!isPassword" class="PAC" type="text" placeholder="验证码">
          <input v-if="!isPassword" class="sendPAC" type="button" value="发送验证码">
          <!--密码登录-->
          <input v-if="isPassword" class="PAC" type="password" placeholder="密码">
        </div>
        <!--其他-->
        <div class="otherLogin">
          <!--跳转注册页面-->
          <a v-if="!isPassword" @click="linkToRegister" class="toRegister">没有账号？去注册</a>
          <!--@click="linkToForget" 跳转忘记密码页面-->
          <a v-if="isPassword" @click="linkToForget" class="toRegister">忘记密码？</a>
          <div class="phoneLogin">
            <img src="../../assets/index/锁.png"/>
            <span v-if="!isPassword" @click="passwordLogin">手机密码登录</span>
            <span v-if="isPassword" @click="passwordLogin">手机验证码登录</span>
          </div>
        </div>
        <!--点击登录-->
        <input class="loginBtn" type="button" value="登录">
      </div>
      <!--关闭-->
      <div class="close" @click="isHideLogin">
        <img src="../../assets/index/login关闭.png"/>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'Login',
    props: ['isShow'],
    data() {
      return {
        isPassword: false,
        testCodeValue: '',
        phoneValue: ''

      }
    },
    methods: {
//      关闭
      isHideLogin() {
        this.$emit('isHide')
        this.isPassword = false
      },
//      点击：没有账号，去注册
      linkToRegister() {
        this.$emit('noCount')
      },
      passwordLogin() {
        this.isPassword = !this.isPassword
      },
//     点击：跳转忘记密码页面
      linkToForget() {
        this.$emit('forgetPW')
        this.isPassword = false
      },
      login(){
        let _this = this;
        axios({
          method: 'post',
          url: 'api/login_by_pass',
          data: {
            password: 'win12459',
            phone: '15140646106'
          }
        }).then(function (res) {
          console.log(res.data);
          console.log(res.headers);
          if (res.data.status === 'ok') {
           axios({
             methods:'get',
             url:'api/currentuser'
           })
          }else{
8
          }

        }).catch(function (err) {
          console.log(err)
        })
      }
    },
    mounted() {

    }
  }
</script>

<style scoped>
  /*.showWrap{*/
  /*display: none;*/
  /*}*/
  .wrap {
    /*display: none;*/
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
    background-color: rgba(0, 0, 0, 0);
  }

  .loginMask {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(39, 44, 47, .9);
    z-index: 120;
  }

  .login {
    width: 540px;
    position: absolute;
    top: 100px;
    left: 50%;
    margin-left: -270px;
    background-color: white;
    border-radius: 4px;
    z-index: 150;
  }

  /*.login {*/
  /*width: 540px;*/
  /*position: fixed;*/
  /*top: 100px;*/
  /*left: 50%;*/
  /*margin-left: -270px;*/
  /*background-color: white;*/
  /*border-radius: 4px;*/
  /*}*/

  /*头部*/

  .loginTop {
    background-color: #272c2f;
    font-size: 18px;
    padding-top: 25px;
    padding-bottom: 25px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .loginTop span {
    padding-left: 15px;
  }

  .loginTop strong {
    padding-left: 5px;
  }

  .loginContent {
    padding: 30px;
    /*background-color: #fff;*/
  }

  /*社交账号登录*/

  .socialImg {
    display: flex;
    justify-content: center;
    margin-top: 5px;
  }

  .socialImg img {
    cursor: pointer;
    margin: 0 20px;
  }

  .explain {
    margin-top: 20px;
    margin-bottom: 13px;
    font-size: 14px;
    color: #a6a7a7;
    display: flex;
    justify-content: center;
  }

  /*分割线*/

  .divider {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .divider div {
    height: 1px;
    width: 138px;
    background-color: #d7d8d8;
  }

  .divider span {
    font-size: 14px;
    color: #d7d8d8;
    margin: 0 17px;
  }

  /*登录框*/

  .loginForm {
    padding-top: 30px;
    position: relative;
  }

  .phoneNum, .PAC {
    width: 100%;
    background-color: #f7f7f7;
    padding: 14px 20px;
    font-size: 14px;
    line-height: 22px;
    border: none;
    margin-bottom: 20px;
  }

  .sendPAC {
    cursor: pointer;
    width: 115px;
    position: absolute;
    bottom: 23px;
    right: 4px;
    padding: 12px 18px;
    font-size: 14px;
    color: white;
    background-color: #1fd7e2;
    border-radius: 4px;
  }

  /*没有账号*/

  .otherLogin {
    width: 100%;
    margin-bottom: 30px;
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .toRegister {
    text-decoration: none;
    cursor: pointer;
    color: #a6a7a7;
  }

  .phoneLogin {
    cursor: pointer;
    display: flex;
    align-items: center;
  }

  /*登录按钮*/

  .loginBtn {
    cursor: pointer;
    text-align: center;
    background-color: #1fd7e2;
    color: #fff;
    font-size: 18px;
    border-radius: 4px;
    width: 100%;
    padding: 12px 18px;
  }

  .close {
    cursor: pointer;
    position: absolute;
    top: 10px;
    right: -34px;
  }

  /*过渡样式*/

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }

  .fade-enter, .fade-leave-to {
    opacity: 0
  }

</style>
