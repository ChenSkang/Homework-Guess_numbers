<template>
<div id="main">
  <div id="back">
    <img src="../img/star.png" id="my-img">
    <span class="title">Guess Numbers</span>
    <router-link to="/home/assist"><span class="sign">Go to game</span></router-link>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #back{
    position:fixed;
    width:100%;
    height:100%;
    background-color: #108ee9;
  }
  #my-img{
    position: absolute;
    top: 150px;
    margin-left: 50%;
    transform: translateX(-50%);
  }
  .title{
    font-size: 40px;
    color: #fff;
    position: absolute;
    top: 280px;
    margin-left: 50%;
    transform: translateX(-50%);
  }
  .sign{
    font-size: 25px;
    color: #fff;
    position: absolute;
    top: 350px;
    margin-left: 50%;
    transform: translateX(-50%);
    transition: all .3s linear;
  }
  .sign:hover{
    color: #f4ea2a;
    font-size: 31px;
  }
</style>
