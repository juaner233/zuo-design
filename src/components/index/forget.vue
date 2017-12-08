<template>
  <div v-if="isShowFor" class="wrap">
    <!--蒙版-->
    <div class="forgetMask" @click="isHideForget"></div>
    <!--登录主部分-->
    <div class="forget">
      <!--头部logo-->
      <div class="forgetTop">
        <img src="../../assets/index/logo.png"/>
        <span>忘记密码</span>
      </div>
      <!--表单-->
      <div class="forgetContent">
        <div class="forgetForm">
          <input class="phoneNum" type="text" placeholder="手机号">
          <!--验证码登录-->
          <input class="PAC" type="text" placeholder="验证码">
          <input class="sendPAC" type="button" value="发送验证码">
          <!--密码登录-->
          <input class="PAC" type="password" placeholder="新密码">
          <input class="PAC" type="password" placeholder="新密码确认">
        </div>
        <!--点击登录-->
        <input class="forgetBtn" type="button" value="确认修改">
      </div>
      <!--关闭-->
      <div class="close" @click="isHideForget">
        <img src="../../assets/index/login关闭.png"/>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'Forget',
    props: ['isShowFor'],
    data() {
      return {
//        isPassword: false
      }
    },
    methods: {
//      关闭
      isHideForget() {
        this.$emit('isHideFog')
//        this.isPassword = false
      }
    }
  }
</script>

<style scoped>

  .wrap {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
    background-color: rgba(0, 0, 0, 0);
  }

  .forgetMask {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(39, 44, 47, .9);
    z-index: 120;
  }

  .forget{
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

  .forgetTop {
    background-color: #272c2f;
    font-size: 18px;
    padding-top: 25px;
    padding-bottom: 25px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .forgetTop span {
    padding-left: 15px;
  }

  .forgetContent {
    padding: 30px;
    /*background-color: #fff;*/
  }

  /*登录框*/
  .forgetForm {
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

  /*登录按钮*/

  .forgetBtn {
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
