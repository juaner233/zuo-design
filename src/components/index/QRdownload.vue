<template>
  <div class="QRdownload">
    <img src="../../assets/index/scan.png"/>
  </div>
</template>

<script>
  export default {
    name: 'QRdownload'
  }
</script>

<style scoped>
  .QRdownload {
    /*display: none;*/
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(39, 44, 47, .9);
    z-index: 100;
  }

  .QRdownload img, .QRwechat img {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 436px;
    height: 440px;
    margin-top: -220px;
    margin-left: -218px;
  }
</style>
