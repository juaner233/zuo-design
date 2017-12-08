<template>
  <div class="feedWrap">

    <!--<div class="odk">-->
    <!--<img src="../../assets/index/OK手势.png" height="19" width="19"/>-->
    <!--<span>编辑推荐</span>-->
    <!--</div>-->

    <div class="feed">
      <!--用户信息-->
      <div class="feedTop">
        <div class="userInfo">
          <img class="cImg" src="../../assets/index/c.png" height="16" width="16"/>
          <!--主页-->
          <!--头像-->
          <a class="headImg" href="">
            <img :src="feedInfoArr.owner.avatar"/>
          </a>
          <!--名称-->
          <a class="userId" href="">{{feedInfoArr.owner.nickname}}</a>
        </div>
        <div class="actions">
          <img src="../../assets/index/赞同.png" height="21" width="19"/>
          <!--赞数-->
          <span>{{feedInfoArr.likeCount}}个赞同</span>
          <img @click="showShare" class="share" src="../../assets/index/转发.png" height="17" width="17"/>
          <div class="dropDown" @click="showDropDown">
            <img src="../../assets/index/更多.png" height="17" width="17"/>
            <div class="jubao" v-show="isShowDrop">
              <span class="triangle"></span>
              <a @click="showTipOff">举报</a>
            </div>
          </div>
        </div>
      </div>
      <!--大图-->
      <div class="feedImg" @click="showDetailNode">
        <img :src="feedInfoArr.postImage.url"/>
        <div class="imgMask"></div>
        <!--赞同动画-->
        <div class="animateZan"
             :style="{left:feedInfoArr.haloCenterRatio.width_ratio*100-10+'%',top:feedInfoArr.haloCenterRatio.height_ratio*100-10+'%'}">
          <div class="zanCircle1">

          </div>
          <div class="zanText">
            <span class="bigText">赞同</span>
            <span class="smallText">这个态度</span>
          </div>
          <span class="zanCircle2"></span>
        </div>
      </div>
      <!--文本部分-->
      <div class="feedContent">
        <!--用户输入-->
        <p class="feedText">{{feedInfoArr.postDescription}}</p>
        <!--颜色tag: feedInfoArr.sceneTag    color  name-->
        <!--灰色tag：feedInfoArr.0  feedInfoArr.1 -->
        <div class="tags">
          <div class="tagInner">
            <Tag :tagArr="feedInfoArr.sceneTag"></Tag>
            <TagGray v-for="a in feedInfoArr.tags" :tagGrayArr="a"></TagGray>
          </div>
        </div>
        <!--其他用户评论-->
        <div class="feedComments">
          <div class="commentsTop">
            <img src="../../assets/index/话泡.png" height="18" width="18"/>
            <span class="nowComments">{{feedInfoArr.commentedCount}}条评论</span>
            <span class="moreComments">更多评论...</span>
          </div>
          <div class="commentsContent">
            <feedComments v-for="a in feedInfoArr.comments" :commentsArr="a" @isAtUser="atUsers"></feedComments>
          </div>
        </div>
        <!--输入评论-->
        <div class="writeCommment">
          <textarea @click="showWriteBtn" :class="{textareaHeight:isWrite}" name="" id="" cols="80"
                    placeholder="写下你的评论..." v-html="atUsername">{{atUsername}}
          </textarea>
          <!--按钮-->
          <div v-show="isWrite" class="commentActions">
            <a class="writeCancel" @click="hideWriteBtn">取消</a>
            <a href="">评论</a>
          </div>
        </div>
      </div>

      <!--隐藏：举报-->
      <transition name="fade">
        <div v-if="isShowTipOff" class="tipOff">
          <div class="tipOffMask" @click="hideTipOff"></div>
          <div class="tipOffBox">
            <span>确定举报吗?</span>
            <div class="tipOffBtn">
              <div class="noBtn" @click="hideTipOff">取消</div>
              <div class="yesBtn">确定</div>
            </div>
          </div>
        </div>
      </transition>
      <!--隐藏：转发-->
      <transition name="fade">
        <div v-show="isShowShare" class="shareWrap">
          <div class="shareMask" @click="showShare"></div>
          <div class="shareBox">
            <div class="shareLeft">
              <div>
                扫一扫,<br>
                分享给微信好友！
              </div>
              <img class="QRimg" src="../../assets/index/下载.png" width="0" height="140"/>
            </div>
            <div class="shareRight">
              <span class="shareTitle">复制链接</span>
              <div class="shareLink">
                <!--转发id：feedInfoArr.objectId-->
                <p>http://zuodesign.cn/zuo/post/{{feedInfoArr.objectId}}</p>
              </div>
              <div class="socialLinks">
                <a href=""><img src="../../assets/index/weico.png" height="32" width="32"/></a>
                <a href=""><img src="../../assets/index/空间.png" height="29" width="29"/></a>
                <a href=""><img src="../../assets/index/花瓣.png" height="32" width="32"/></a>
                <a href=""><img src="../../assets/index/豆瓣.png" height="32" width="32"/></a>
              </div>
            </div>
            <img class="closeShare" @click="showShare" src="../../assets/index/login关闭.png" height="16" width="16"/>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
  //评论
  import feedComments from '../index/feedComments.vue'
  //  tag
  import Tag from '../common/tag.vue'
  //  tagGray
  import TagGray from '../index/tagGray.vue'
  import bus from '../../common/eventBus'

  //  获取数据
  import axios from 'axios'

  export default {
    name: 'Feed',
    props: ['feedInfoArr'],
    components: {
      feedComments,
      Tag,
      TagGray,
      bus
    },

    data() {
      return {
        shareLink: '',
        isWrite: false,
        isShowShare: false,
        isShowTipOff: false,
        isShowDrop: false,
        isShowMask: false,
        atUsername: null,
        userId: feedInfoArr.objectId
      }
    },

    methods: {
      //点击: 举报
      showDropDown() {
        this.isShowDrop = !this.isShowDrop
      },
      showTipOff() {
        this.isShowTipOff = true
      },
      hideTipOff() {
        this.isShowTipOff = false
      },
      showShare() {
        this.isShowShare = !this.isShowShare
      },
      showWriteBtn() {
        this.isWrite = true;
      },
//点击回复 在输入框显示：@用户名
      atUsers: function (msg) {
        this.isWrite = true;
        this.atUsername = '@' + msg
      },
      hideWriteBtn() {
        this.isWrite = false;
        this.atUsername = null;
      },
//    将id传给node
//      showDetailNode() {
//        this.$emit('showNode');
//        bus.$on('nodeChange', this.userId);
////        console.log(this.userId)
//      }
    },
    mounted(){
      console.log(this.feedInfoArr)
    }
  }
</script>

<style scoped>
  * {
    padding: 0;
    margin: 0;
  }

  .feedWrap {
    position: relative;
    width: 100%;

  }

  .feed:hover {
    box-shadow: 0 0 8px rgba(0, 0, 0, .1);
  }

  /*编辑推荐*/
  /*.odk {*/
  /*position: absolute;*/
  /*left: -38px;*/
  /*top: 10px;*/
  /*width: 103px;*/
  /*background-color: #1fd7e2;*/
  /*padding-top: 5px;*/
  /*padding-bottom: 5px;*/
  /*border-radius: 4px;*/
  /*display: flex;*/
  /*align-items: center;*/
  /*justify-content: center;*/
  /*z-index: 0;*/
  /*}*/

  /*.odk span {*/
  /*color: #fff;*/
  /*font-size: 12px;*/
  /*margin-left: 5px;*/
  /*}*/

  .feed {
    width: 100%;
    position: relative;
    border-radius: 4px;
    background-color: white;
    margin-bottom: 17px;
    /*z-index: 500;*/
  }

  /*头像部分*/
  .feedTop {
    width: 100%;
    padding: 10px 18px;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .feedTop .userInfo {
    display: flex;
    align-items: center;
    position: relative;
  }

  .userInfo .headImg {
    overflow: hidden;
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  .userInfo .userId {
    text-decoration: none;
    font-size: 14px;
    font-weight: 500;
    color: #272c2f;
    padding-left: 10px;
  }

  .userInfo .cImg {
    position: absolute;
    left: -8px;
    top: 0;
  }

  .feedTop .actions {
    color: #959697;
    font-size: 14px;
    display: flex;
    align-items: center;
  }

  .actions > span {
    padding-left: 10px;
    padding-right: 18px;
  }

  .actions .share {
    margin-right: 18px;
    cursor: pointer;
  }

  .dropDown {
    width: 17px;
    height: 17px;
    position: relative;
    cursor: pointer;
  }

  /*举报*/

  .dropDown .jubao {
    position: absolute;
    top: 20px;
    left: -43px;
    padding: 10px 10px;
    min-width: 100px;
    margin-top: 8px;
    font-size: 14px;
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, .15);
    border-radius: 4px;
    box-shadow: 0 6px 12px rgba(0, 0, 0, .175);
    z-index: 50;
    text-align: center;
  }

  .jubao a {
    display: block;
    padding: 10px 5px;
    text-decoration: none;
    color: #a6a7a7;
    font-weight: 500;
    border-radius: 4px;
  }

  .jubao a:hover {
    background-color: #f5f5f5;
  }

  .jubao .triangle {
    position: absolute;
    top: -7px;
    left: 45%;
    width: 13px;
    height: 13px;
    border-left: 1px solid #ccc;
    border-top: 1px solid #ccc;
    border-right: 0;
    border-bottom: 0;
    background-color: #fff;
    transform: rotate(45deg);
  }

  /*图片*/
  .feedImg {
    width: 540px;
    height: 540px;
    position: relative;
    cursor: zoom-in;
  }

  /*赞动画*/
  .animateZan {
    cursor: pointer;
    position: absolute;
    width: 120px;
    height: 120px;
  }

  /*小圈*/
  .zanCircle1 {
    position: absolute;
    left: 0;
    top: 0;
    width: 120px;
    height: 120px;
    border: 2px solid #1fd7e2;
    border-radius: 50%;
    -webkit-transition: all .3s;
    transition: all .3s;
  }

  .feedImg:hover .zanCircle1 {
    transform: scale(1.1);
    border-width: 5px;
  }

  /*赞文字*/
  .animateZan .zanText {
    text-align: center;
    opacity: 0;
    position: absolute;
    left: 27%;
    top: 27%;
    color: #ffffff;
    -webkit-transition: .3s;
    transition: .3s;
  }

  .feedImg:hover .zanText {
    opacity: 1;
  }

  .animateZan .zanText span {
    display: block;
  }

  .bigText {
    font-size: 24px;
    font-weight: 500;
  }

  .smallText {
    font-size: 14px;
  }

  /*大圈*/
  .animateZan .zanCircle2 {
    z-index: 50;
    position: absolute;
    left: 0;
    top: 0;
    width: 120px;
    height: 120px;
    border: 1px solid #1fd7e2;
    background-color: rgba(31, 217, 255, .2);
    border-radius: 50%;
    /*-webkit-transform-origin: center center;*/
    /*transform-origin: center center;*/
    -webkit-animation: zanMove 1s infinite;
    animation: zanMove 1s infinite;
    animation-timing-function: ease-out;
  }

  .feedImg:hover .zanCircle2 {
    transform: scale(1.3);
  }

  @-webkit-keyframes zanMove {
    from {
      transform: scale(1);
      opacity: 1;
    }
    to {
      transform: scale(1.5);
      opacity: 0;
    }
  }

  /*蒙版*/
  .feedImg .imgMask {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0);
    -webkit-transition: .5s;
    transition: .5s;
  }

  .feedImg:hover .imgMask {
    background-color: rgba(0, 0, 0, .2);
  }

  .feedImg img {
    object-fit: cover
  }

  /*文字部分*/
  .feedContent {
    font-size: 14px;
    width: 100%;
    padding-top: 18px;
  }

  .feedText {
    color: #595c5d;
    width: 100%;
    padding: 0 25px 20px;

  }

  .feedContent .tags {
    width: 100%;
    padding: 0 25px 0;
    color: #a6a7a7;
  }

  .tagInner {
    width: 100%;
    padding-bottom: 20px;
    border-bottom: 1px solid #ececec;
    display: flex;
    align-items: center;
  }

  .feedTagInner .colorPoint {
    width: 8px;
    height: 8px;
    background-color: #ffeb3b;
    border-radius: 50%;
  }

  .feedTag .tagName {

    margin-left: 5px;
  }

  .feedComments {
    padding: 18px 10px;
  }

  .feedComments .commentsTop {
    color: #a6a7a7;
    display: flex;
    align-items: flex-start;
    padding: 0px 15px 9px;
  }

  .commentsTop .moreComments {
    cursor: pointer;
  }

  .commentsTop .nowComments {
    margin: 0 5px;
  }

  .commentsContent {
    border-bottom: 1px solid #ececec;
    padding-bottom: 10px;
  }

  /*写评论*/

  .writeCommment {
    padding: 0 25px 18px;
  }

  textarea {
    overflow: auto;
    padding: 0;
    border: none;
    outline: none;
    min-height: 22px;
    font-size: 12px;
  }

  .textareaHeight {
    min-height: 100px;
  }

  .commentActions {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 15px 15px 0;
  }

  .commentActions a {
    text-decoration: none;
    color: #272c2f;
    cursor: pointer;
  }

  /*隐藏部分*/
  /*举报*/
  .tipOff {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
    background-color: rgba(0, 0, 0, 0);
  }

  .tipOffMask {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(39, 44, 47, .9);
    z-index: 120;
  }

  .tipOffBox {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 540px;
    height: 156px;
    margin-left: -270px;
    margin-top: -78px;
    background-color: #fff;
    border-radius: 4px;
    padding: 30px;
    z-index: 150;
    text-align: center;
  }

  .tipOffBox span {
    width: 100%;
    font-size: 18px;
    font-weight: 500;
    color: #272c2f;
  }

  .tipOffBtn {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .tipOffBtn div {
    cursor: pointer;
    width: 46%;
    margin: 0 2%;
    font-size: 18px;
    border-radius: 4px;
    padding: 13px 18px;
  }

  .tipOffBtn .yesBtn {
    background-color: #1fd7e2;
    color: #fff;
  }

  .tipOffBtn .noBtn {
    background-color: #AAB2BF;
    color: #fff;
  }

  /*转发*/
  .shareWrap {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
    background-color: rgba(0, 0, 0, 0);
  }

  .shareMask {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(39, 44, 47, .9);
    z-index: 120;
  }

  .shareBox {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 540px;
    margin-left: -270px;
    margin-top: -78px;
    background-color: #fff;
    color: #272c2f;
    border-radius: 4px;
    padding: 30px;
    z-index: 150;
    display: flex;
    justify-content: space-between;
    /*align-items: t;*/
  }

  .shareLeft {
    width: 160px;
    padding-right: 20px;
    border-right: 1px solid #ececec;
  }

  .shareLeft div {
    font-size: 15px;
    color: #272c2f;
    font-weight: 500;
    line-height: 22px;
    margin-bottom: 15px;
  }

  .shareLeft .QRimg {
    width: 140px;
  }

  .shareRight {
    width: 320px;
    padding-left: 20px;
  }

  .shareRight .shareTitle {
    display: inline-block;
    font-size: 15px;
    color: #272c2f;
    font-weight: 500;
    line-height: 22px;
    padding-top: 15px;
  }

  .shareRight .shareLink {
    width: 299px;
    margin-top: 15px;
    margin-bottom: 30px;
    padding: 13px 10px;
    background-color: #f6f6f6;
    border-radius: 4px;
  }

  .shareLink p {
    color: #a6a7a7;
    text-decoration: none;
    font-size: 16px;
    word-wrap: break-word;
    word-break: break-all;
  }

  .socialLinks {
    width: 175px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .closeShare {
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

  /*@@-webkit-keyframes animationname {keyframes-selector {css-styles;}}*/
</style>
