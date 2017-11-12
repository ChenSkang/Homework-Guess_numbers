<template>
  <div class="">
    <ul class="menu">
      <li class="menu-slc">游戏规则</li>
      <li class="menu-slc">模式拓展</li>
    </ul>
    <div class="name-body">
      <div class="rules">
        <span class="title">游戏规则</span>
        <p class="rule-p">1.{{p1}}</p>
        <p class="rule-p">2.{{p2}}</p>
        <p class="rule-p">3.{{p3}}</p>
        <p class="rule-p">4.{{p4}}</p>
      </div>
      <div class="introduction"></div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        p1: '由计算机作为出数字的一方，玩家作为猜数字的一方。',
        p2: '玩家开始后，计算机会随机提供一个没有重复数字的四位数，每次猜测后，都会给出提示nAmB,其中n代表数字正确位置也正确的数字的个数，m代表数字正确但位置不正确的数字的个数。',
        p3: '当玩家猜数字的次数超过15次的时候，游戏失败，此时可查看答案并结束此次游戏也可以选择继续猜下去。',
        p4: '如果游戏成功，则可根据猜测次数来判断是否可以计入排行榜。'
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
  .rule-p{
    margin-top: 15px;
  }
</style>
