<template>
  <div class="moreBox">
    <!--图片-->
    <a class="moreImg" href="">
      <!--<img src="../../assets/articles/img1.png"/>-->
      <img :src="moreArrInfo.banner" alt="">
    </a>
    <!--文字-->
    <div class="moreText">
      <!--描述-->
      <a class="moreTitle">{{moreArrInfo.title}}</a>
      <!--发布信息-->
      <div class="moreInfo">
        <span class="moreUser">{{moreArrInfo.author.name}}</span>
        <span class="moreTime">{{moreArrInfo.timeAgo}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'MoreArticles',
    props: ['moreArrInfo']
  }
</script>

<style scoped>
  .moreBox {
    display: block;
    width: 219px;
    height: 312px;
    margin-bottom: 18px;
    border-radius: 4px;
    background-color: white;
    overflow: hidden;
  }

  .moreBox:hover{
    box-shadow: 0 0 8px rgba(0,0,0,.1);
  }

  /*大图*/
  .moreImg {
    display: block;
    cursor: pointer;
    text-decoration: none;
    width: 100%;
    height: 162px;
    overflow: hidden;
  }

  .moreImg img {
    object-fit: cover;
  }

  /*文字*/
  .moreText {
    width: 100%;
    padding: 15px;
  }

  .moreTitle {
    text-decoration: none;
    cursor: pointer;
    display: block;
    width: 100%;
    height: 105px;
    font-size: 14px;
    color: #272c2f;
    line-height: 20px;
  }

  .moreInfo {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;
  }

  .moreInfo .moreUser {
    color: #272c2f;
  }

  .moreInfo .moreTime {
    color: #a6a7a7;
  }
</style>
