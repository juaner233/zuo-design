<template>
  <div>
    <ZuoHeader></ZuoHeader>
    <Articles></Articles>
    <ZuoFooter></ZuoFooter>
  </div>
</template>

<script>
  // 头部
  import ZuoHeader from '../../components/common/zuoHeader.vue'
  //  主页内容
  import Articles from '../../components/articles/articles.vue'
  //  底部
  import ZuoFooter from '../../components/common/zuoFooter.vue'

  export default {
    name: 'articles',
    components: {
      ZuoHeader,
      Articles,
      ZuoFooter
    },
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style scoped>
  @import "../../common/style/marx.min.css";
</style>
