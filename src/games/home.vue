<template>
  <div id="head">
    <div class="title">猜数字</div>
    <ul class="menus">
      <router-link to="/home/game/basic"><li class="list" :class="{select:mains[0].change}" @click="changed(0)"><span class="line" v-if="mains[0].change"></span>游戏</li></router-link>
      <router-link to="/home/ranking"><li class="list" :class="{select:mains[1].change}" @click="changed(1)"><span class="line" v-if="mains[1].change"></span>排行</li></router-link>
      <router-link to="/home/assist"><li class="list" :class="{select:mains[2].change}" @click="changed(2)"><span class="line" v-if="mains[2].change"></span>帮助</li></router-link>
    </ul>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        mains: [{
          change: true
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
    background-color: #fff;
  }
  .title{
    color: #20A0FF;
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
    color: #878D99;
    cursor: pointer;
    user-select: none;
  }
  .list:hover{
    color: #000;
  }
  .select{
    color: #000;
  }
  .line{
    width: 35px;
    height: 0;
    border-bottom: 2px solid #20A0FF;
    position: absolute;
    bottom: 20px;
  }
  .main{
    margin-top: 50px;
    margin-left: 15%;
  }
</style>
