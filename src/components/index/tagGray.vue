<template>
  <a class="wrap" href="">
    <span class="point"></span>
    <span>{{tagGrayArr}}</span>
  </a>
</template>

<script>
  export default {
    name: 'TagGray',
    props: ['tagGrayArr']
  }
</script>

<style scoped>
  a {
    text-decoration: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: left;
    color: #a6a7a7;
    padding-right: 15px;
  }

  a:hover{
    color: #535557;
  }

  .point {
    background-color: #a6a7a7;
    display: inline-block;
    margin-right: 5px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
  }
</style>
