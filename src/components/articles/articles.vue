<template>
  <div class="wrap" id="toArticlesTop">
    <div class="content">
      <!--推荐阅读-->
      <div class="contentTop">
        <header>推荐阅读</header>
        <div class="recoInfo">
          <!--v-for="a in articlesArr"-:articlesInfo="a"-->
          <RecoRead v-for="a in articlesArr" :articlesInfo="a"></RecoRead>
        </div>
      </div>
      <!--更多文章-->
      <div class="contentBottom">
        <header>更多文章</header>
        <div class="more">
          <MoreArticles v-for="a in moreArr" :moreArrInfo="a"></MoreArticles>
        </div>
      </div>
    </div>
    <!--置顶-->
    <transition name="fade">
      <a v-show="isShowTopBtn" class="topBtn" href="#toArticlesTop">
        <img src="../../assets/index/置顶.png"/>
      </a>
    </transition>
  </div>
</template>

<script>
  import RecoRead from '../articles/recoRead.vue'
  import MoreArticles from '../articles/moreArticles.vue'
  //  获取数据
  import axios from 'axios'

  export default {
    name: 'Articles',
    data() {
      return {
        articlesArr: [],
        moreArr: [],
//      置顶
        isShowTopBtn:false
      }
    },
    components: {
      RecoRead,
      MoreArticles
    },
    methods:{
      onScroll() {
        let scrolled;
        scrolled = document.documentElement.scrollTop || document.body.scrollTop;
        if (scrolled >= 214) {
          this.isShowTopBtn = true
        } else {
          this.isShowTopBtn = false
        }
      }
    },
    mounted() {
      let _this = this;
//     推荐文章
      axios.get('/zuoapi/hot_articles.json').then(function (response) {
        _this.articlesArr = response.data.hot_articles;
        console.log(_this.articlesArr)
      });
//      更多文章
      axios.get('/zuoapi/articles.json').then(function (response) {
        _this.moreArr = response.data.articles;
        console.log(_this.moreArr)
      });
      //      滚动监听
      window.addEventListener('scroll', this.onScroll);
    }
  }
</script>

<style scoped>
  .wrap {
    width: 100%;
    background-color: rgb(244, 244, 244);
    /*position: relative;*/
    padding-top: 60px;
  }

  .content {
    width: 930px;
    margin: 0 auto;
  }

  .contentTop {
    width: 100%;
  }

  /*大标题*/
  header {
    margin: 0;
    font-size: 20px;
    font-weight: 700;
    text-align: center;
    padding-top: 30px;
    padding-bottom: 30px;
  }

  .recoInfo {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .more {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    padding-bottom: 30px;
  }

  .topBtn {
    border-radius: 4px;
    position: fixed;
    bottom: 150px;
    right: 35px;
    text-decoration: none;
    cursor: pointer;
    width: 40px;
    height: 40px;
    background-color: #272c2f;
    opacity: 0.4;
    padding-top: 10px;
    padding-left: 9px;
  }

  .topBtn img {
    width: 25px;
  }

  /*过渡样式*/

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }

  .fade-enter, .fade-leave-to {
    opacity: 0
  }

</style>
