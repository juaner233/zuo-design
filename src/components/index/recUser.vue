<template>
  <div class="recInfo">
    <div class="recLeft">
      <a class="username" href="">
        <span>{{recoUser.username}}</span>
      </a>
      <a class="userIntro" href="">
        <p>
          {{recoUser.introduction}}
        </p>
      </a>
    </div>
    <div class="userImg">
      <img :src="recoUser.avatar"/>
      <div class="recMask"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'recUser',
    props:['recoUser'],
    data() {
      return {
        recUsername: '九月',
        userWords: '抛却日常偏见，像孩子般看待世界'
      }
    }
  }

</script>

<style scoped>
  .recInfo {
    width: 100%;
    border-bottom: 1px solid #e4e4e5;
    padding: 10px 0;
    background-color: transparent;
    display: flex;
    justify-content: space-between;
  }

  .recInfo img {
    width: 40px;
    height: 40px;
    border-radius: 4px;
  }

  .recLeft {
    width: 146px;
  }

  .username {
    font-size: 14px;
    color: #272c2f;
    font-weight: bold;
  }

  .userIntro {
    display: block;
    margin-top: 8px;
    font-size: 12px;
    color: #999a9a;
  }

  .userIntro p {
    margin: 0;
  }

  a {
    text-decoration: none;
  }

  .username:hover {
    color: #999a9a;
  }

  .userIntro:hover {
    color: #535557;
  }

  .userImg {
    position: relative;
  }

  /*蒙版*/
  .recMask {
    position: absolute;
    left: 0;
    top: 0;
    width: 40px;
    height: 40px;
    background-color: rgba(0, 0, 0, 0);
    -webkit-transition: .3s;
    transition: .3s;
  }

  .userImg:hover .recMask {
    background-color: rgba(0, 0, 0, .1);
  }

</style>
