<template>
  <div class="">
    <ul class="menu">
      <li class="menu-slc">基本模式</li>
      <li class="menu-slc">挑战模式</li>
      <li class="menu-slc">实力模式</li>
    </ul>
    <div class="name-body">

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
      }
    }
  }
</script>

<style scoped>
  .menu{
    width: 100px;
  }
  .menu-slc{
    font-size: 18px;
    margin-top: 15px;
    color: #5A5E66;
  }
  .name-body{
    border: 1px solid #D8DCE5;
    width: 65%;
    height: 500px;
    position: relative;
    top: -100px;
    left: 10%;
  }
</style>
