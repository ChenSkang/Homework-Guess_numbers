<template>
<div>
  <div id="head">
    <img src="../img/shu.png" id="title-img" />
    <div class="title">猜数字</div>
    <ul class="menus">
      <router-link to="/home/game/basic" @click.native="changed(0)"><li class="list" :class="{select:mains[0].change}"><span class="line" v-if="mains[0].change"></span>游戏</li></router-link>
      <router-link to="/home/ranking" @click.native="changed(1)"><li class="list" :class="{select:mains[1].change}"><span class="line" v-if="mains[1].change"></span>排行</li></router-link>
      <router-link to="/home/assist" @click.native="changed(2)"><li class="list" :class="{select:mains[2].change}"><span class="line" v-if="mains[2].change"></span>帮助</li></router-link>
    </ul>
  </div>
  <div class="main">
    <div class="main-body">
      <router-view></router-view>
    </div>
  </div>
  <div id="foot">
    Made by anknife | 2017
  </div>
</div>
</template>

<script>
  export default {
    data () {
      return {
        mains: [{
          change: false
        }, {
          change: false
        }, {
          change: false
        }
        ]
      }
    },
    methods: {
      changed (num) {
        for (let i = 0; i < 3; i++) {
          this.mains[i].change = false
        }
        this.mains[num].change = true
      }
    }
  }
</script>

<style scoped>
  #head{
    width: 100%;
    height: 80px;
    background-color: #6495ed;
  }
  #title-img{
    position: absolute;
    top: 25px;
    left: 21%;
  }
  .title{
    font-family:  Microsoft YaHei;
    color: #fff;
    font-size: 30px;
    line-height: 80px;
    margin-left: 15%;
    user-select: none;
  }
  .menus{
    height: 80px;
    position: absolute;
    top: 0;
    right: 15%;
    display: flex;
    flex-direction: row;
  }
  .list{
    position: relative;
    line-height: 80px;
    font-size: 17px;
    width: 76px;
    color: #D8DCE5;
    cursor: pointer;
    user-select: none;
  }
  .list:hover{
    color: #fff;
  }
  .select{
    color: #fff;
  }
  .line{
    width: 35px;
    height: 0;
    border-bottom: 2px solid #fff;
    position: absolute;
    bottom: 20px;
  }
  .main{
    width: 100%;
    position: absolute;
    top: 80px;
    bottom: 60px;
  }
  .main-body{
    width: 70%;
    position: absolute;
    left: 20%;
    top: 100px;
  }
  #foot{
    width: 100%;
    height: 60px;
    background-color: #6495ed;
    position: absolute;
    bottom: 0;
    font-size: 13px;
    color: #fff;
    line-height: 60px;
    text-align: center;
  }
</style>
