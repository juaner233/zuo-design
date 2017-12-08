<template>
  <a class="wrap" href="">
    <span class="point" :style="{backgroundColor:tagcolor}"></span>
    <span>{{tagArr.sceneTagName}}</span>
  </a>
</template>

<script>
  export default {
    name: 'ArticlesTag',
    props: ['tagArr'],
    data() {
      return {
        tagcolor: this.tagArr.sceneTagColor
      }
    },
    mounted() {
      console.log(this.tagcolor)
    }
  }
</script>

<style scoped>
  a {
    text-decoration: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: left;
    color: white;
    padding-right: 15px;
  }

  a:hover{
    color: #535557;
  }

  .point {
    /*background-color: rgb(228, 204, 169);*/
    display: inline-block;
    margin-right: 5px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
  }
</style>
