<template>
  <div v-if="isShowReg" class="wrap">
    <!--蒙版-->
    <div class="registerMask" @click="isHideRegister"></div>
    <!--注册-->
    <div class="register">
      <!--注册头部-->
      <div class="registerTop">
        <img src="../../assets/index/logo.png"/>
        <span><strong>ZUO</strong>欢迎你的加入</span>
      </div>
      <!--注册主体-->
      <div class="registerContent">
        <!--社交账号登录-->
        <div class="registerSocial">
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
        <!--输入表单-->
        <div class="registerForm">
          <input class="phoneNum" type="text" placeholder="手机号">
          <input class="PAC" type="text" placeholder="验证码">
          <input class="sendPAC" type="button" value="发送验证码">
          <input class="password" type="password" placeholder="密码">
          <input class="passwordCheck" type="password" placeholder="确认密码">
        </div>
        <!--去注册页面-->
        <div class="otherRegister">
          <div class="agree" @click="isAgree">
            <!--同意-->
            <img v-show="isChecked" class="yesCheck" src="../../assets/index/regCheck1.png"/>
            <!--不同意-->
            <img v-show="!isChecked" class="noCheck" src="../../assets/index/regCheck.png"/>
            <span>我已经认真阅读并同意<strong>ZUO</strong>的</span>
            <a href="http://zuoooodesign.lofter.com/post/1d1a2c6b_6478482">《用户协议》</a>
          </div>
          <!--转到登录界面-->
          <a @click="linkToLogin" class="toLogin">已有账号，登录</a>
        </div>
        <!--注册按钮-->
        <input class="registerBtn" type="button" value="注册">
      </div>
      <!--关闭-->
      <div class="close">
        <img @click="isHideRegister" src="../../assets/index/login关闭.png"/>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Register',
    props: ['isShowReg'],
    data() {
      return {
        //是否同意用户协议 默认同意
        isChecked: true
      }
    },
    methods: {
      isHideRegister() {
        this.$emit('isHideReg')
      },
      linkToLogin(){
        this.$emit('haveCount')
      },
      isAgree(){
        console.log(this.isChecked)
        this.isChecked = !this.isChecked
      }
    }
  }
</script>

<style scoped>
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

  .registerMask {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(39, 44, 47, .9);
    z-index: 120;
  }

  .register {
    width: 540px;
    position: absolute;
    top: 100px;
    left: 50%;
    margin-left: -270px;
    background-color: white;
    border-radius: 4px;
    z-index: 150;
  }

  /*头部*/

  .registerTop {
    background-color: #272c2f;
    font-size: 18px;
    padding-top: 25px;
    padding-bottom: 25px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .registerContent {
    padding: 30px;
    /*background-color: #fff;*/
  }

  .registerTop strong {
    margin: 10px;
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
  .registerForm {
    padding-top: 30px;
    position: relative;
  }

  .phoneNum, .PAC, .password, .passwordCheck {
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
    top: 104px;
    right: 4px;
    padding: 12px 18px;
    font-size: 14px;
    color: white;
    background-color: #1fd7e2;
    border-radius: 4px;
  }

  /*没有账号*/

  .otherRegister {
    width: 100%;
    margin-bottom: 30px;
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .otherRegister a {
    text-decoration: none;
  }

  .agree {
    display: flex;
    align-items: center;
    font-weight: bold;
  }

  .agree span {
    margin-left: 5px;
  }

  .agree a {
    color: #1fd7e2;
  }

  .toLogin {
    cursor: pointer;
    color: #272c2f;
  }

  /*登录按钮*/

  .registerBtn {
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
    position: absolute;
    top: 10px;
    right: -34px;
    cursor: pointer;
  }

</style>
