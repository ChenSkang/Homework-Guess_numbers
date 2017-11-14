<template>
<div>
  <ul class="menu">
    <router-link to="/home/game/basic"><li class="menu-slc" @click="openBasic">基本模式</li></router-link>
    <router-link to="/home/game/strength"><li class="menu-slc" @click="openStrength">实力模式</li></router-link>
    <router-link to="/home/game/challenge"><li class="menu-slc">挑战模式</li></router-link>
  </ul>
  <div class="name-body">
    <router-view></router-view>
  </div>
</div>
</template>

<script>
  export default {
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    methods: {
      openBasic () {
        this.$message('基本模式最多可以猜15次哦')
      },
      openStrength () {
        this.$message('您需要连续进行三个数字的猜测')
      }
    }
  }
</script>

<style scoped>
  .menu{
    width: 100px;
    height: 400px;
  }
  .menu-slc{
    font-size: 18px;
    margin-top: 15px;
    color: #5A5E66;
  }
  .name-body{
    background: rgba(255, 255, 255, .5);
    width: 80%;
    height: 400px;
    position: absolute;
    left: 15%;
    top: 0;
  }
</style>
