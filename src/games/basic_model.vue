<template>
<div>
  <span id="title-first" v-if="!if_start">基本模式</span>
  <el-button id="start" v-if="!if_start" @click="makeNumber" type="primary">游戏开始</el-button>
  <div class="main" v-if="if_start">
    <div class="middle">
      <div class="number" v-if="!show_answer">{{num}}</div>
      <el-input v-model="ipt" placeholder="请输入猜测的数字" id="gue-ipt" @keyup.enter.native="guessNumber">
        <el-button slot="append" @click="guessNumber">确定</el-button>
      </el-input>
      <div class="guide">提示:{{msg}}</div>
      <div class="guess-num">当前猜测次数：{{n}}</div>
      <el-row :gutter="20" class="gg-btn" v-if="game_over">
        <el-col :span="12"><el-button @click="show_answer = true" type="primary">{{over_msg}}</el-button></el-col>
        <el-col :span="12"><el-button @click="makeNumber">重新开始</el-button></el-col>
      </el-row>
    </div>
  </div>
</div>
</template>

<script>
  export default {
    data () {
      return {
        over_msg: '',
        show_answer: false,
        game_over: false,
        n: 0,
        arr: [],
        num: 1234,
        if_start: false,
        ipt: '',
        msg: '0A0B'
      }
    },
    methods: {
      makeNumber () {
        this.show_answer = false
        this.n = 0
        this.ipt = ''
        this.msg = '0A0B'
        this.game_over = false
        this.if_start = true
        for (let i = 0; i <= 3; i++) {
          this.arr[i] = Math.floor(Math.random() * 10)
          if (i >= 1) {
            for (let j = 0; j < i; j++) {
              while (this.arr[i] === this.arr[j]) {
                this.arr[i] = Math.floor(Math.random() * 10)
              }
            }
          }
        }
        this.num = this.arr.join('')
      },
      guessNumber () {
        let x = 0
        let y = 0
        this.n += 1
        if (this.n <= 15) {
          if (this.ipt !== this.num) {
            for (let i = 0; i <= 3; i++) {
              for (let j = 0; j <= 3; j++) {
                if (this.ipt[i] === this.num[j]) {
                  if (i === j) {
                    x += 1
                  } else {
                    y += 1
                  }
                }
              }
            }
          } else {
            x = 4
            y = 0
            this.over_msg = '查看排行'
            this.game_over = true
            this.show_answer = true
            this.$alert('恭喜！游戏成功，已为您查看排行榜信息', '成功', {
              confirmButtonText: '确定'
            }).then(() => {
              this.$message({
                type: 'info',
                message: '游戏成功'
              })
            })
          }
          this.msg = x + 'A' + y + 'B'
        } else if (this.n === 16) {
          this.game_over = true
          this.over_msg = '查看答案'
          this.$alert('您已经连续猜了16次，游戏结束', '失败', {
            confirmButtonText: '确定'
          }).then(() => {
            this.$message({
              type: 'info',
              message: '此次游戏失败'
            })
          })
        }
      }
    }
  }
</script>

<style scoped>
  #title-first{
    text-align: center;
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
 .number{
   width: 50%;
   background-color: #EDF2FC;
 }
 .main{
   text-align: center;
 }
 .middle{
   margin-top: 250px;
   transform: translateY(-50%);
 }
  #gue-ipt{
    width: 50%;
  }
  .gg-btn{
    width: 50%;
    transform: translateX(50%);
    margin-top: 50px;
  }
</style>
