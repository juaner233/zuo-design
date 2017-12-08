<template>

  <div v-if="isShow" class="suggest">
    <div class="sugMask" @click="isHideSuggest"></div>
    <div class="sugBox">
      <div class="sugTop">
        <span>意见反馈</span>
      </div>
      <div class="sugInput">
        <textarea name="" id="" placeholder="你有啥想ZUO的，快告诉我们呀~"></textarea>
        <input type="button" value="提交">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Suggest',
    props: ['isShow'],
    data() {
      return {
//        isShowSlef: 'this.isShow'

      }
    },
    methods: {
      isHideSuggest() {
        this.$emit('isHide')
      }
    }
  }
</script>

<style scoped>
  .suggest {
    /*display: none;*/
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
    background-color: rgba(0, 0, 0, 0);
  }

  .sugMask {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(39, 44, 47, .9);
    z-index: 120;
  }

  .suggest .sugBox {
    width: 540px;
    height: 391px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -220px;
    margin-left: -240px;
    z-index: 150;
  }

  .sugBox .sugTop {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #272c2f;
    font-size: 18px;
    padding-top: 25px;
    padding-bottom: 25px;
    color: #fff;
  }

  .sugBox .sugInput {
    padding: 30px;
    background-color: #fff;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }

  .sugBox input {
    background-color: #1fd7e2;
    color: #fff;
    width: 100%;
    padding: 13px 18px;
    font-size: 18px;
    border-radius: 5px;
  }

  .sugBox textarea {
    text-decoration: none;
    outline: none;
    border: 1px solid #ececec;
    width: 100%;
    height: 186px;
    background-color: #f6f6f6;
    resize: none;
    padding: 15px;
    margin-bottom: 20px;
  }
</style>
