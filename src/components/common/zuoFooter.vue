<template>
  <div class="wrap">
    <div class="about">
      <a class="wechat" @click="showWechat">关注公众号</a>
      <a href="">关于ZUO</a>
      <a @click="showSuggest">反馈吐槽</a>
    </div>
    <div class="company">
      <span class="comleft">上海设慧网络科技有限公司2016版权所有</span>
      <span>沪ICP备15013372号</span>
    </div>

    <transition name="fade">
      <QRwechat v-if="isShowWechat" @click.native="isHideWechat"></QRwechat>
    </transition>
      <Suggest :isShow="isShowSuggest" @isHide="hideSuggest"></Suggest>
  </div>
</template>

<script>
  import QRwechat from '../index/QRwechat.vue'
  import Suggest from '../index/Suggest.vue'

  export default {
    name: 'ZuoFooter',
    components: {
      QRwechat,
      Suggest
    },
    data() {
      return {
        isShowWechat: false,
        isShowSuggest: false
      }
    },
    methods: {
      showWechat() {
        this.isShowWechat = true;
//        console.log(this.isShowWechat)
      },
      isHideWechat() {
        this.isShowWechat = false;
//        console.log(this.isShowWechat)
      },
      showSuggest() {
        this.isShowSuggest = true;
//        console.log(this.isShowSuggest)
      },
      hideSuggest() {
        this.isShowSuggest = false;
//        console.log(this.isShowSuggest)
      },
    }
  }
</script>

<style scoped>
  .wrap {
    padding: 18px 0;
    width: 100%;
    /*margin-top: 30px;*/
    background-color: #eaeaea;
    text-align: center;
    font-size: 13px;

  }

  .company {
    color: #b8b9b9;
  }

  .about {
    margin-bottom: 10px;
  }

  .about a {
    cursor: pointer;
    margin: 0 10px;
    text-decoration: none;
    color: #999a9a;
  }

  .comleft {
    margin-right: 15px;
  }

  .wechat {
    cursor: pointer;
  }

  /*过渡样式*/

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }

  .fade-enter, .fade-leave-to {
    opacity: 0
  }
</style>
