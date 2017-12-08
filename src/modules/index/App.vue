<template>
  <div>
    <ZuoHeader ref="zuoHead"></ZuoHeader>
    <Index @linkHead2="linkHead3"></Index>
    <ZuoFooter></ZuoFooter>
    <!--<NewList></NewList>-->
  </div>
</template>

<script>
  // 头部
  import ZuoHeader from '../../components/common/zuoHeader.vue'
  //  主页内容
  import Index from '../../components/index/index.vue'
  //  底部
  import ZuoFooter from '../../components/common/zuoFooter.vue'


  export default {
    name: 'index',
    components: {
      ZuoHeader,
      Index,
      ZuoFooter
//      NewList
    },
    data(){
      return{
        linkReg:false
      }
    },
    methods:{
//      告诉头部调用注册
      linkHead3(){
        this.linkReg=true
        if(this.linkReg){
          this.$refs.zuoHead.showRegister();
        }
      }
    }
  }
</script>

<style scoped>
  @import "../../common/style/marx.min.css";
</style>
