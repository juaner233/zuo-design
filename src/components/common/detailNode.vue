<template>
  <div v-if="isShowNode" class="wrap">
    <!--蒙版-->
    <div class="nodeMask" @click="isHideNode"></div>
    <!--主部分-->
    <div class="node">
      <!--左边-->
      <div class="nodeLeft">
        <!--头部-->
        <div class="nodeTop">
          <!--用户信息-->
          <div class="userInfo">
            <!--C-->
            <img class="cImg" src="../../assets/index/c.png" height="16" width="16"/>
            <!--头像-->
            <a class="headImg" href="">
              <!--<img src=""/>-->
              <img :src="nodeArr.owner.avatar" height="60" width="60"/>
            </a>
            <!--名称-->
            <a class="userId" href="">{{nodeArr.owner.username}}</a>
            <!--发布时间-->
            <span>发布于{{nodeArr.timeAgo}}</span>
          </div>
          <div class="nodeActions">
            <!--转发-->
            <img class="share" src="../../assets/index/转发.png"/>
            <!--举报-->
            <div class="dropDown">
              <img src="../../assets/index/更多.png" height="17" width="17"/>
            </div>
          </div>
        </div>
        <!--大图-->
        <div class="nodeImg">
          <!--<img :src=""/>-->
          <img :src="nodeArr.postImage.url" height="640" width="640"/>
          <!--蒙版-->
          <div class="imgMask"></div>
          <!--赞同动画-->
          <!--<div class="animateZan"-->
          <!--:style="{left:feedInfoArr.haloCenterRatio.width_ratio*100-10+'%',top:feedInfoArr.haloCenterRatio.height_ratio*100-10+'%'}">-->
          <!--<div class="zanCircle1">-->

          <!--</div>-->
          <!--<div class="zanText">-->
          <!--<span class="bigText">赞同</span>-->
          <!--<span class="smallText">这个态度</span>-->
          <!--</div>-->
          <!--<span class="zanCircle2"></span>-->
          <!--</div>-->
        </div>
      </div>
      <!--右边-->
      <div class="nodeRight">
        <!--点赞人数-->
        <div class="nodeLike">
          <div class="likeHead">
            <div class="likeTip">
              <img src="../../assets/index/赞同.png" height="21" width="19"/>
              <span>赞同这个态度</span>
            </div>
            <span class="likeCount">{{nodeArr.likeCount}}个赞同</span>
          </div>
          <div class="likeContain">
            <span class="triangle"></span>
            <div class="likeUser">
              <ul>
                <!--喜欢该设计前四-->
                <li v-for="likeTop in nodeArr.likes">
                  <a href="">
                    <img :src="likeTop.avatar" alt="">
                  </a>
                </li>
                <span>
                  <img src="../../assets/index/more.png" height="17" width="17"/>
                </span>
              </ul>
            </div>
          </div>
        </div>
        <!--发布内容-->
        <div class="nodeContent">
          <!--发布文字+tag-->
          <div class="nodeInfo">
            <div class="nodeText">{{nodeArr.postDescription}}</div>
            <!--tag-->
            <div class="tagBody">
              <Tag :tagArr="nodeArr.sceneTag"></Tag>
              <TagGray v-for="a in nodeArr.tags" :tagGrayArr="a"></TagGray>
            </div>
          </div>
          <!--xx条评论-->
          <div class="moreComment">
            <img src="../../assets/index/话泡.png" height="18" width="18"/>
            <span>{{nodeArr.commentedCount}}条评论</span>
          </div>
          <!--评论-->
          <div class="nodeComments">
            <feedComments v-for="a in nodeArr.comments" :commentsArr="a" @isAtUser="atUsers"></feedComments>
          </div>
        </div>
        <!--输入评论-->
        <div class="addComment">
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
      <!--关闭-->
      <div class="close" @click="isHideNode">
        <img src="../../assets/index/login关闭.png"/>
      </div>
    </div>
  </div>
</template>

<script>
  import TagGray from '../index/tagGray.vue'
  import Tag from '../common/tag.vue'
  import feedComments from '../index/feedComments.vue'
  import bus from '../../common/eventBus'
  //  获取数据
  import axios from 'axios'

  export default {
    name: 'DetailNode',
    props: ['isShowNode'],
    components: {
      Tag,
      TagGray,
      feedComments
    },
    data() {
      return {
        idChange: '',
        nodeArr: '',
        atUsername: '',
        isWrite: false
      }
    },
    methods: {
//      关闭
      isHideNode() {
        this.$emit('isHideDetailNode')
      },
      atUsers: function (msg) {
        this.isWrite = true;
        this.atUsername = '@' + msg
      }
    },
    mounted() {
//      监听info改变
      let _this = this;
//      this指bus
      bus.$on('nodeChange', function (msg) {
        _this.idChange = msg;
        console.log(_this.idChange)
      });
//http://www.zuodesign.cn/api/post/58a159ce128fe1006
      axios.get('/api/post/' + _this.idChange).then(function (response) {
        _this.nodeArr = response.data.post;
        console.log(_this.nodeArr)
      });
    }
  }
</script>

<style scoped>
  .wrap {
    /*display: none;*/
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
    background-color: rgba(0, 0, 0, 0);
  }

  .nodeMask {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(39, 44, 47, .9);
    z-index: 120;
  }

  .node {
    width: 850px;
    position: absolute;
    top: 100px;
    left: 35%;
    margin-left: -270px;
    background-color: white;
    border-radius: 4px;
    z-index: 150;
    padding-top: 5px;
    padding-left: 18px;
    padding-bottom: 15px;
    display: flex;
    justify-content: space-between;
  }

  /*左边*/
  .nodeLeft {
    width: 540px;
  }

  .nodeTop {
    width: 100%;
    padding: 10px 18px 10px 0;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .nodeTop .userInfo {
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

  .userInfo .cImg {
    position: absolute;
    left: -8px;
    top: 0;
  }

  .userInfo span {
    padding-left: 10px;
    color: #a6a7a7;
    font-size: 14px;
  }

  .userInfo .userId {
    text-decoration: none;
    font-size: 14px;
    font-weight: 500;
    color: #272c2f;
    padding-left: 10px;
  }

  .nodeActions {
    display: flex;
    align-content: center;
  }

  .share {
    height: 17px;
    width: 17px;
    margin-right: 18px;
  }

  .nodeImg {
    width: 540px;
    border-radius: 4px;
    height: 540px;
    position: relative;
    overflow: hidden;
    /*z-index: 900;*/
    /*background-color: #eaeced;*/
  }

  /*蒙版*/
  .nodeImg .imgMask {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0);
    -webkit-transition: .5s;
    transition: .5s;
  }

  .nodeImg:hover .imgMask {
    background-color: rgba(0, 0, 0, .2);
  }

  .nodeImg img {
    object-fit: cover
  }

  /*右边*/
  .nodeRight {
    width: 280px;
    height: 600px;
    position: relative;
  }

  /*赞同*/

  .nodeLike {
    width: 100%;
  }

  .nodeLike .likeHead {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 19px 25px 18px;
    color: #a6a7a7;
    font-size: 14px;
  }

  .likeHead .likeTip {
    display: flex;
    align-items: center;
  }

  .likeTip span {
    padding-left: 5px;
  }

  .likeContain {
    position: relative;
    padding-left: 15px;
    padding-right: 15px;
  }

  .likeContain .triangle {
    position: absolute;
    right: 36px;
    top: -9px;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid #eaeced;
  }

  .likeUser {
    /*position: relative;*/
    padding: 10px;
    background-color: #eaeced;
    border-radius: 4px;
    height: 60px;
    display: flex;
    align-items: center;
  }

  .likeUser ul {
    padding: 0;
    margin: 0;
    width: 100%;
    list-style: none;
    display: flex;
    align-content: center;
  }

  .likeUser li {
    border-radius: 50%;
    margin-right: 10px;
    overflow: hidden;
  }

  .likeUser li a {
    text-decoration: none;
    cursor: pointer;
  }

  .likeUser li a img {
    width: 40px;
    height: 40px;
  }

  /*文字*/
  .nodeContent {
    max-height: 420px;
    overflow-y: auto;
    overflow-x: hidden;
  }

  .nodeInfo {
    padding-left: 15px;
    padding-top: 15px;
    padding-right: 15px;
  }

  .nodeInfo .nodeText {
    padding: 13px 0;
    border-top: 1px solid #ececec;
    word-wrap: break-word;
    line-height: 22px;
    color: #595c5d;
    font-size: 14px;
    font-weight: 400;
  }

  .nodeInfo .tagBody {
    padding-bottom: 13px;
    flex-wrap: wrap;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border-bottom: 1px solid #ececec;
  }

  .moreComment {
    padding: 15px;
    display: flex;
    align-items: center;
  }

  .moreComment span {
    font-size: 14px;
    padding-left: 8px;
    color: #a6a7a7;
    cursor: pointer;
  }

  /*写评论*/

  .addComment {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding-right: 15px;
  }

  /*关闭*/
  .close {
    cursor: pointer;
    position: absolute;
    top: 10px;
    right: -34px;
  }

</style>
