<!--引入 头部 尾部 welcome feed推送 标签 留言-->
<template>
  <div class="content" id="toTop">
    <!--欢迎-->
    <Welcome @linkHead1="linkHead2"></Welcome>
    <!--主要内容-->
    <div class="wrap">
      <!--左边-->
      <div class="leftCol">
        <!--话题-->
        <div class="topicCard" :class="{cardActive:isCardActive}" @mouseover="cardChange" @mouseout="cardChange">
          <!--话题大图-->
          <div class="topicTop">
            <div class="topicMask"></div>
            <!--话题文本-->
            <div class="topicText">
              <p>话题</p>
              <div class="yellowline"></div>
              <!--话题大标题-->
              <div class="topictitle">
                <span>{{topicArr.title}}</span>
                <img src="../../assets/index/next.png"/>
              </div>
              <div class="topicCount">
                <span>{{topicArr['collect_count']}}人收藏</span> | <span>{{topicArr['comment_count']}}个讨论</span>
              </div>
            </div>
          </div>
          <!--轮播文字-->
          <div class="topicBottom">
            <div class="comments">
              <a href="">{{username}}：</a>
              <span v-html="usercomments">{{usercomments}}</span>
            </div>
          </div>
        </div>
        <!--分类-->
        <div class="listBar">
          <!--分类列表-->
          <div class="listLeft">
            <!--全部-->
            <div class="all" @click="allList">
              <img src="../../assets/index/分类.png"/>
              <span>全部</span>
              <img src="../../assets/index/下拉.png"/>
            </div>
            <!--下拉列表-->
            <Classify v-show="isShowList"></Classify>
          </div>
          <!--好设计坏设计-->
          <div class="listRight">
            <div class="good" @click="GoodIdea">
              <img v-if="!isGood" src="../../assets/index/checkbox.png"/>
              <img v-if="isGood" src="../../assets/index/checkbox2.png"/>
              <span>好设计</span>
            </div>
            <div class="bad" @click="BadIdea">
              <img v-if="!isBad" src="../../assets/index/checkbox.png"/>
              <img v-if="isBad" src="../../assets/index/checkbox1.png"/>
              <span>坏设计</span>
            </div>
          </div>
        </div>
        <!--推送 点击大图时 显示块-->
        <Feed v-for="arr in selectArr" :feedInfoArr="arr" @showNode="showNode"></Feed>
      </div>
      <!--右边-->
      <!---->
      <div class="rightCol">
        <!--sideBar-->
        <div class="sideBar" :class="{sideBarfixed:isfixed}">
          <!--热门标签-->
          <div class="hotTag">
            <span class="tagTitle">热门标签</span>
            <div class="tags">
              <!--热门tag-->
              <TagLink v-for="a in tagArr" :tagLinkName="a"></TagLink>
            </div>
          </div>
          <!--推荐关注-->
          <div class="recommend">
            <span class="recTitle">推荐关注</span>
            <div>
              <RecUser v-for="a in recoArr" :recoUser="a"></RecUser>
            </div>
          </div>
          <!--二维码-->
          <div class="QRcode">
            <div @click="showWechat" @mouseover="wechatLight" @mouseout="wechatLight" class="wechat"
                 :class="{lightWechat:isShowLogo}">

              <a>关注微信公众号</a>

              <img v-show="!isShowLogo" src="../../assets/index/appLogo.png" height="28" width="28"/>

              <img v-show="isShowLogo" src="../../assets/index/appLogoActive.png" height="28" width="28"/>
            </div>
            <div @click="showDownload" @mouseover="downloadLight" @mouseout="downloadLight" class="downApp"
                 :class="{lightDownApp:isShowGreen}">

              <a>下载IOS版 App</a>
              <img v-show="!isShowGreen" src="../../assets/index/二维码.png" height="28" width="28"/>

              <img v-show="isShowGreen" src="../../assets/index/二维码1.png" height="28" width="28"/>
            </div>
          </div>
        </div>
      </div>
      <!--隐藏的标签-->
      <transition name="fade">
        <QRwechat v-if="isShowWechat" @click.native="isHideWechat"></QRwechat>
      </transition>
      <transition name="fade">
        <QRdownload v-if="isShowDownload" @click.native="isHideDownload"></QRdownload>
      </transition>
      <!--详细笔记-->
      <!-- -->
      <!--<DetailNode :isShowNode="isShowDetailNode" @isHideDetailNode="showNode"></DetailNode>-->
      <!--置顶-->
      <transition name="fade">
        <a v-show="isShowTopBtn" class="topBtn" href="#toTop">
          <img src="../../assets/index/置顶.png"/>
        </a>
      </transition>
    </div>
  </div>
</template>

<script>
  //  欢迎注册
  import Welcome from '../../components/index/welcome.vue'
  //  主要展示内容
  import Feed from '../index/feed.vue'
  //  热门tag
  import TagLink from '../index/tagLink.vue'
  //  推荐用户
  import RecUser from '../index/recUser.vue'
  //  登录
  import Login from '../index/login.vue'
  //  下载二维码
  import QRdownload from '../index/QRdownload.vue'
  //  公众号二维码
  import QRwechat from '../index/QRwechat.vue'
  //  提交意见
  import Suggest from '../index/Suggest.vue'
  //  注册
  import Register from '../index/Register.vue'
  //  分类
  import Classify from '../index/classify.vue'
  //  详细笔记
  import DetailNode from '../../components/common/detailNode.vue'
  //  获取数据
  import axios from 'axios'

  export default {
    name: 'Index',
    components: {
      Feed,
      TagLink,
      RecUser,
      Login,
      QRdownload,
      QRwechat,
      Suggest,
      Register,
      Welcome,
      Classify,
      DetailNode
    },
    data() {
      return {
        isShowLogin: false,
        //全部
        isShowList: false,
        //好设计/坏设计
        isGood: true,
        isBad: true,
        //话题
        isCardActive: false,
        //显示微信
        isShowWechat: false,
        //显示下载APP
        isShowDownload: false,
        //二维码
        isShowLogo: false,
        isShowGreen: false,
//        笔记
        isShowDetailNode: false,
        //置顶
        isShowTopBtn: false,
        isfixed: false,

//————————————————获取数据用————————————————
        //话题数据：
        selectArr: [],
        badFeedArr: [],
        goodFeedArr: [],
        feedArr: [],
        recoArr: [],
        tagArr: [],
        topicArr: [],
        topicNum: '',
        topicComments: '',
        username: '',
        usercomments: ''
      }
    },
    methods: {
//      展开全部列表
      allList() {
        this.isShowList = !this.isShowList
      },
//      好设计、坏设计
      GoodIdea() {
        //按钮的点击规则
        if (this.isBad === false && this.isGood === true) {
          alert('至少选择一项');
        } else {
          this.isGood = !this.isGood
        }
//——————————每次点击时判断应该显示的内容————————————
        //        好主意
        if (this.isGood && !this.isBad) {
          this.selectArr = this.goodFeedArr;
          console.log(this.selectArr)
        }
//        坏主意
        if (!this.isGood && this.isBad) {
          this.selectArr = this.badFeedArr;
          console.log(this.selectArr)
        }
//        好坏
        if (this.isGood && this.isBad) {
          this.selectArr = this.feedArr;
          console.log(this.selectArr)
        }
        console.log('isGood：' + this.isGood)
      },
      BadIdea() {
//按钮的点击规则
        if (this.isBad === true && this.isGood === false) {
          alert('至少选择一项');
        } else {
          this.isBad = !this.isBad;
        }
        //——————————每次点击时判断应该显示的内容————————————
        //        好主意
        if (this.isGood && !this.isBad) {
          this.selectArr = this.goodFeedArr;
          console.log(this.selectArr)
        }
//        坏主意
        if (!this.isGood && this.isBad) {
          this.selectArr = this.badFeedArr;
          console.log(this.selectArr)
        }
//        好坏
        if (this.isGood && this.isBad) {
          this.selectArr = this.feedArr;
          console.log(this.selectArr)
        }
        console.log('isBad：' + this.isBad)
      },
//      鼠标移入：话题
      cardChange() {
        this.isCardActive = !this.isCardActive
      },
//      公众号
      showWechat() {
        this.isShowWechat = true;
//        console.log(this.isShowWechat)
      },
      isHideWechat() {
        this.isShowWechat = false;
//        console.log(this.isShowWechat)
      },
//      下载APP
      showDownload() {
        this.isShowDownload = true;
//        console.log(this.isShowDownload)
      },
      isHideDownload() {
        this.isShowDownload = false;
//        console.log(this.isShowDownload)
      },
//      鼠标移入：主页按钮
      wechatLight() {
        this.isShowLogo = !this.isShowLogo;
      },
      downloadLight() {
        this.isShowGreen = !this.isShowGreen;
      },
//      提交给头部 创建请求
      linkHead2() {
        this.$emit('linkHead2');
      },
//      滚轮事件
      onScroll() {
        let scrolled;
        scrolled = document.documentElement.scrollTop || document.body.scrollTop;
        if (scrolled >= 214) {
          this.isShowTopBtn = true
        } else {
          this.isShowTopBtn = false
        }
        if (scrolled >= 445) {
          this.isfixed = true
        } else {
          this.isfixed = false
        }
      },
//      笔记显示
      showNode() {
        this.isShowDetailNode = !this.isShowDetailNode;
      }
    },

//    获取数据
    mounted() {
      let _this = this;
//     话题
//      axios.get('/zuoapi/topics.json').then(function (response) {
      axios.get('/api/topics').then(function (response) {
        _this.topicArr = response.data['topic'];
        _this.username = _this.topicArr['comments'][0]['author']['username'];
        _this.usercomments = _this.topicArr['comments'][0]['text'];
//        循环更新数据
        setInterval(changeTopicNum, 30000);
        function changeTopicNum() {
          let i = 0;
          i = Math.floor(Math.random() * 5);
          _this.username = _this.topicArr['comments'][i]['author']['username'];
          _this.usercomments = _this.topicArr['comments'][i]['text']
        }
      });

      //     热门标签
//      axios.get('/zuoapi/web_hot_tags.json').then(function (response) {
        axios.get('/api/web_hot_tags').then(function (response) {
          _this.tagArr = response.data.hot_tags;
      });

        //      推荐关注
//      axios.get('/zuoapi/web_reco_users.json').then(function (response) {
        axios.get('/api/web_reco_users').then(function (response) {
        _this.recoArr = response.data.reco_users;
      });

        //      好设计/坏设计推送
//      axios.get('/zuoapi/web_hot_posts.json').then(function (response) {
        axios.get('/api/web_hot_posts').then(function (response) {
//        好+坏设计
        _this.feedArr = response.data.posts;

        for (let i = 0; i < 8; i++) {
          if (response.data.posts[i].isLiked === false) {
//            坏设计
            _this.badFeedArr.push(response.data.posts[i]);

          } else {
//            好设计
            _this.goodFeedArr.push(response.data.posts[i]);
          }
        }
//        默认 好+坏
        _this.selectArr = _this.feedArr
          console.log(_this.selectArr);
      });
//      滚动监听
      window.addEventListener('scroll', this.onScroll);
    }
  }
</script>

<style scoped>
  .content {
    width: 100%;
    background-color: rgb(244, 244, 244);
    position: relative;
    padding-top: 60px;
  }

  .wrap {
    position: relative;
    width: 790px;
    margin: 0 auto;
    padding-top: 30px;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
  }

  /*左边*/

  .leftCol {
    width: 540px;
    padding-bottom: 30px;
  }

  .topicCard {
    width: 100%;
    margin-bottom: 30px;
    border-radius: 4px;
    cursor: pointer;
    box-sizing: border-box;
    overflow: hidden;
  }

  .cardActive {
    box-shadow: 0 0 8px rgba(0, 0, 0, .1);
  }

  .topicCard .topicTop {
    position: relative;
    width: 100%;
    height: 167px;
    background-image: url("../../assets/index/topic.jpeg");
  }

  .topicCard .topicMask {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background-color: rgba(0, 0, 0, .4);
  }

  .topicCard .topicText {
    padding: 18px 30px;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 2;
    color: white;
    text-align: left;
  }

  .topicCard .topicText p {
    font-size: 14px;
    margin: 0;
  }

  .yellowline {
    width: 20px;
    height: 5px;
    border-radius: 6px;
    background-color: #F8D440;
    margin-top: 10px;
  }

  .topicCard .topictitle {
    font-size: 22px;
  }

  .topicCard .topicText img {
    width: 35px;
    height: 35px;
  }

  .topicCard .topictitle {
    display: flex;
    line-height: 35px;
    margin-top: 30px;
    margin-bottom: 18px;
  }

  .topicCount {
    color: rgba(255, 255, 255, .6);
    font-size: 14px;
  }

  .topicCount span:nth-child(1) {
    margin-right: 5px;
  }

  .topicCount span:nth-child(2) {
    margin-left: 5px;
  }

  .topicCard .topicBottom {
    background-color: white;
    width: 100%;
    padding: 18px 20px;
    font-size: 14px;
    /*white-space: nowrap;*/
    height: 80px;
  }

  .topicCard .topicBottom a {
    color: #272c2f;
    font-weight: 500;
    text-align: center;
  }

  .topicCard .topicBottom span {
    color: #999a9a;
    height: 40px;
    overflow: hidden;

  }

  /*筛选*/
  .listBar {
    width: 100%;
    height: 40px;
    /*overflow: hidden;*/
    padding-bottom: 18px;

  }

  .listBar .listLeft {
    position: relative;
    float: left;
    cursor: pointer;
    font-size: 15px;
    display: flex;
    align-items: center;
    z-index: 50;
  }

  .listBar .listLeft span {
    margin: 0 5px;
  }

  .listBar .listRight {
    font-size: 14px;
    color: #959697;
    float: right;
    display: flex;
    align-items: center;
  }

  .listBar .listRight img {
    margin-right: 10px;
  }

  .listRight div {
    height: 16px;
    margin-left: 5px;
    display: flex;
    align-items: center;
  }

  .listRight .good {
    margin-right: 10px;
  }

  /*右边*/
  .rightCol {
    width: 220px;
    position: relative;
  }

  .sideBar {
    width: 100%;
    padding-bottom: 20px;
  }

  /*fixed根据浏览器定位
  页面滚动后改变*/
  .sideBarfixed {
    width: 220px;
    position: fixed;
    bottom: 80px;
  }

  .tagTitle {
    display: inline-block;
    font-size: 14px;
    font-weight: 500;
    color: #272c2f;
    padding-bottom: 15px;
  }

  .recommend {
    margin-top: 30px;
  }

  .recTitle {
    display: inline-block;
    font-size: 14px;
    font-weight: 500;
    color: #272c2f;
  }

  /*按钮显示二维码*/

  .QRcode {
    width: 100%;
    margin-top: 30px;
  }

  .QRcode > div {
    margin-bottom: 10px;
    width: 100%;
    border: 1px solid #ececec;
    border-radius: 4px;
    cursor: pointer;
  }

  .QRcode a {
    text-decoration: none;
    font-size: 14px;
    display: inline-block;
    width: 169px;
    height: 50px;
    border-right: 1px solid #ececec;
    text-align: center;
    line-height: 50px;
    color: #272c2f;
  }

  .QRcode .downApp img {
    position: relative;
    left: 7px;
    top: 10px;
  }

  .QRcode .wechat img {
    position: relative;
    left: 7px;
    top: 10px;
  }

  /*置顶标签*/
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

  .lightWechat, .lightDownApp {
    background-color: #fbfbfb;
    box-shadow: 1px 0 4px rgba(0, 0, 0, .05);
  }

  /*过渡样式*/

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }

  .fade-enter, .fade-leave-to {
    opacity: 0
  }

</style>
