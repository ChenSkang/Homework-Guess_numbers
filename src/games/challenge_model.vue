<template>
  <div>
    <span id="title-first">挑战模式</span>
    <router-link to="/home/ranking"><el-button id="start" type="primary">查看排行</el-button></router-link>
  </div>
</template>

<script>
  export default {
    data () {
      return {}
    }
  }
</script>

<style scoped>
  #title-first{
    position: absolute;
    top: 100px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 30px;
    color: #878D99;
  }
  #start{
    width: 80px;
    position: absolute;
    top: 200px;
    left: 50%;
    transform: translateX(-40px);
  }
</style>
