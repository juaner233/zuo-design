<template>
  <div class="recoBox">
    <!--图片-->
    <img class="backImg" :src="articlesInfo.banner" alt="">
    <!--蒙版-->
    <div class="mask"></div>
    <!--文字-->
    <div class="text">
      <!--标题-->
      <div class="textContent">
        <!--articlesInfo.title-->
        <a href="">{{articlesInfo.title}}</a>
        <!--articlesInfo.summary-->
        <span>{{articlesInfo.summary}}</span>
      </div>
      <!--文章信息-->
      <div class="textInfo">
        <ArticlesTag :tagArr="articlesInfo"></ArticlesTag>
        <span class="time">{{articlesInfo.timeAgo}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import ArticlesTag from '../articles/articlesTag.vue'
  export default {
    name: 'RecoRead',
    components:{
      ArticlesTag
    },
    props:['articlesInfo']
  }
</script>

<style scoped>
  .recoBox {
    cursor: pointer;
    width: 298px;
    position: relative;
    height: 452px;
    overflow: hidden;
    border-radius: 4px;
  }

  .backImg {
    object-fit: cover
  }

  .mask {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .2);
    -webkit-transition: .3s;
    transition: .3s;
  }

  .recoBox:hover .mask{
    background-color: rgba(0, 0, 0, .5);
  }

  .text {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
  }

  .text .textContent {
    width: 100%;
    margin-bottom: 18px;
    padding: 15px 18px;
  }

  .textContent a{
    text-decoration: none;
    cursor: pointer;
    font-size: 18px;
    color: #fff;
    font-weight: 700;
    line-height: 24px;
    margin-bottom: 10px;
    display: block;
  }

  .textContent span{
    display: block;
    font-size: 14px;
    font-weight: 400;
    color: rgba(255,255,255,.8);
    padding-top: 10px;
  }

  .textInfo{
    /*width: 100%;*/
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 8px;
    margin: 0 10px;
    border-top: 1px solid rgba(255,255,255,.2);
    color: #ffffff;
    font-size: 12px;
  }

</style>
