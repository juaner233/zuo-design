<template>
  <div class="QRwechat">
    <img src="../../assets/index/scan-wechat.png"/>
  </div>
</template>

<script>
    export default {
        name: 'QRwechat'
    }
</script>

<style scoped>
  .QRwechat {
    /*display: none;*/
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(39, 44, 47, .9);
    z-index: 100;
  }

  .QRwechat img {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 436px;
    height: 440px;
    margin-top: -220px;
    margin-left: -218px;
  }

</style>
