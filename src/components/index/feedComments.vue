<template>
  <!--feedCommentArr-->
  <div class="commentWrap">
    <!--<div v-for="a in commentsArr" class="comment" @mouseover="showRepose" @mouseout="showRepose">-->
      <div class="comment" @mouseover="showRepose" @mouseout="showRepose">
      <!--回复内容-->
      <div class="commentContent">
        <a href="">{{commentsArr.author.username}}</a>
        <span class="line">-</span>
        <span v-html="commentsArr.text" class="commentWords">{{commentsArr.text}}</span>
      </div>
      <!--信息-->
      <div class="commentBottom">
        <!--时间-->
        <p class="commentsTime">{{commentsArr.timeAgo}}</p>
        <!--用户操作-->
        <div class="commentRight">
          <!--隐藏的回复-->
          <span @click="atUser(commentsArr.author.username)" v-show="isRepose" class="commentRepose">回复</span>
          <!--点亮-->
          <div class="commentLight">
            <span>点亮</span>
            <span class="lightTip">{{commentsArr.likeNumber}}</span>
            <img src="../../assets/index/灯泡.png" height="13" width="13"/>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'feedComments',
    props: ['commentsArr'],
    data() {
      return {
        isRepose: false,
        commentsNum: '18',
        comTime: '2个月',
        feedCommentArr: ''
      }
    },
    methods: {
      showRepose() {
        this.isRepose = !this.isRepose
      },
//      点击:回复
      atUser(name) {
        this.$emit('isAtUser',name)
        console.log(name)
      }
    }
  }
</script>

<style scoped>
  .commentWrap {
    width: 100%;
  }

  .comment {
    font-size: 12px;
    width: 100%;
    padding: 9px 15px;
  }

  .comment:hover {
    background-color: #f7f7f8;
    border-radius: 4px;
  }

  .comment .line {
    margin: 0 6px;
  }

  .comment a {
    text-decoration: none;
    color: black;
  }

  .commentBottom {
    padding-top: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .commentBottom p {
    margin: 0;
    color: #c9c9c9;
  }

  .commentBottom .commentRight {
    color: #a1a2a3;
    font-weight: bold;
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .commentLight .lightTip {
    margin: 0 5px;
  }

  .commentRepose {
    margin-right: 18px;
  }

</style>
