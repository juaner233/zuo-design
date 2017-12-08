<template>
  <!--tagName.objectId-->
  <a href="">
    {{tagLinkName.content}}
  </a>
</template>

<script>
  export default {
    name: 'tagLink',
    props:['tagLinkName'],
    data() {
      return {
        tagName: 'App'
      }
    }
  }
</script>

<style scoped>
  a {
    text-decoration: none;
    display: inline-block;
    margin-right: 8px;
    margin-bottom: 10px;
    padding: 6px 10px;
    font-size: 14px;
    color: #999b9c;
    background-color: #eaeced;
    border-radius: 4px;
    -webkit-transition-duration: .3s;
    transition-duration: .3s;
  }

  a:hover {
    color: #fff;
    background-color: #999b9c;
  }

</style>
