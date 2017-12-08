<template>
  <div v-if="isShow" class="wel-wrap">
    <div class="welcome">
      <p class="p1">可能是全宇宙最ZUO的图片社区</p>
      <div class="p2">
        <p>和像你一样认真对待生活的人一起</p>
        <p>从设计的角度，重新认识世界</p>
      </div>
      <a class="toRegister" @click="showRegister">创建ZUO账号</a>
      <img @click="isShowWelcome" class="close" src="../../assets/index/关闭.png"/>
    </div>
    <!--<Register :isShowReg="isShowRegister" @isHideReg="hideRegister"></Register>-->
  </div>
</template>

<script>
//  import Register from '../index/register.vue'
  export default {
    name: 'Welcome',
    data() {
      return {
        isShow: true,
      }
    },
    methods: {
//      点击关闭事件
      isShowWelcome() {
        this.isShow = false
      },
//     提交给父级 创建账号请求
      showRegister() {
        this.$emit('linkHead1')
      }
    }
  }
</script>

<style scoped>
  .wel-wrap {
    width: 100%;
  }

  .welcome {
    position: relative;
    padding: 30px 0;
    text-align: center;
    box-sizing: border-box;
    width: 100%;
    background-image: url(../../assets/index/overlay.png);
    background-repeat: repeat;
    background-color: #eaeced;
  }

  .welcome .p1 {
    font-size: 24px;
    margin: 0;
    font-weight: 700;
    color: #272c2f;
  }

  .welcome .p2 {
    margin-top: 15px;
    margin-bottom: 18px;
    font-size: 16px;
    color: #5d6c75;
  }

  .welcome .p2 p {
    margin: 0;
  }

  .welcome a {
    cursor: pointer;
    padding: 10px;
    display: inline-block;
    background-color: #1fd7e2;
    color: #fff;
    width: 200px;
    font-size: 16px;
    border-radius: 3px;
    text-decoration: none;
  }

  .close {
    cursor: pointer;
    width: 16px;
    position: absolute;
    right: 30px;
    top: 35px;
  }

</style>
