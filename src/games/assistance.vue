<template>
  <div>
    <ul class="menu">
      <li class="menu-slc" @click="showWindow(0)">游戏规则</li>
      <li class="menu-slc" @click="showWindow(1)">模式拓展</li>
    </ul>
    <div class="name-body">
      <div class="rules" v-if="show_window">
        <span class="title">游戏规则</span>
        <p class="rule-ps">{{p1}}</p>
        <p class="rule-p">{{p2}}</p>
        <p class="rule-p">{{p3}}</p>
        <p class="rule-p">{{p4}}</p>
      </div>
      <div class="introduction" v-if="!show_window">
        <span class="title">模式拓展</span>
        <p class="title-p">挑战模式⇓</p>
        <p class="rule-p">{{p5}}</p>
        <p class="title-p">实力模式⇓</p>
        <p class="rule-p">{{p6}}</p>
        <p class="title-p">排行榜⇓</p>
        <p class="rule-p">{{p7}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        show_window: true,
        p1: '❥由计算机作为出数字的一方，玩家作为猜数字的一方。',
        p2: '❥玩家开始后，计算机会随机提供一个没有重复数字的四位数，每次猜测后，都会给出提示nAmB,其中n代表数字正确位置也正确的数字的个数，m代表数字正确但位置不正确的数字的个数。',
        p3: '❥当玩家猜数字的次数超过15次的时候，游戏失败，此时可查看答案并结束此次游戏也可以选择继续猜下去。',
        p4: '❥如果游戏成功，则可根据猜测次数来判断是否可以计入排行榜。',
        p5: '☠该模式允许玩家挑战排行榜中玩家的答题次数，挑战过后，对比双方答题过程，若挑战成功，则将入榜者踢出。',
        p6: '☠该模式连续出3题，对答题次数求总数，获取玩家的真正实力，另此模式不限答题次数。',
        p7: '☠由于游戏较为简单，故排行榜仅收录5名玩家，加油！'
      }
    },
    methods: {
      showWindow (num) {
        if (num === 1) {
          this.show_window = false
        } else {
          this.show_window = true
        }
      }
    }
  }
</script>

<style scoped>
  .menu{
    width: 100px;
  }
  .menu-slc{
    font-weight: bold;
    font-size: 16px;
    margin-top: 15px;
    color: #5A5E66;
    cursor: pointer;
    user-select: none;
  }
  .name-body{
    width: 60%;
    position: relative;
    top: -70px;
    left: 15%;
  }
  .title{
    font-size: 25px;
  }
  .rule-ps{
    margin-top: 30px;
    color: #5A5E66;
  }
  .rule-p{
    margin-top: 15px;
    color: #5A5E66;
  }
  .title-p{
    font-size: 20px;
    margin-top: 30px;
    color: #2D2F33;
  }
</style>
