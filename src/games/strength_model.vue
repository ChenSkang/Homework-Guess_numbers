<template>
  <div>
    <span id="title-first" v-if="!if_start">实力模式</span>
    <el-button id="start" v-if="!if_start" @click="makeNumber" type="primary">游戏开始</el-button>
    <span id="title-two" v-if="if_start">实力猜测</span>
    <div class="main" v-if="if_start">
      <div class="middle">
        <div class="number" v-if="show_answer">游戏答案：{{num}}</div>
        <el-tooltip effect="dark" content="点击会使本次游戏失败" placement="bottom" :disabled="show_answer">
          <el-button class="show" @click="show_answer = true, how_many = 3" type="primary" v-if="!show_answer">查看答案</el-button>
        </el-tooltip>
        <el-input v-model="ipt" :disabled="show_answer" placeholder="请输入猜测的数字" id="gue-ipt" @keyup.enter.native="guessNumber">
          <el-button slot="append" @click="guessNumber" :disabled="show_answer">确定</el-button>
        </el-input>
        <div class="guide">游戏提示：{{msg}}</div>
        <div class="guide">累计次数：{{n}}&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</div>
        <el-row :gutter="20" class="gg-btn" v-if="game_over">
          <el-col :span="12">
            <el-tooltip class="item" effect="dark" content="点击会使本次游戏失败" placement="bottom-start"  :disabled="!game_over">
              <el-button @click="show_answer = true, how_many = 3">游戏结束</el-button>
            </el-tooltip>
          </el-col>
          <el-col :span="12"><el-button type="primary" @click="makeNumber">继续游戏</el-button></el-col>
        </el-row>
        <el-row :gutter="20" class="gg-btn" v-if="how_many === 3">
          <el-col :span="12"><el-button type="primary">查看排行</el-button></el-col>
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
        must_over: true,
        if_guess: false,
        how_many: 0,
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
        if (this.how_many === 3) {
          this.n = 0
          this.how_many = 0
        }
        this.must_over = true
        this.show_answer = false
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
        if (this.how_many < 3) {
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
            this.how_many = this.how_many + 1
            this.game_over = true
            this.show_answer = true
            if (this.how_many === 3) {
              this.game_over = false
              this.$alert('恭喜！您完成了实力模式', '成功', {
                confirmButtonText: '确定'
              }).then(() => {
                this.$message({
                  type: 'info',
                  message: '游戏成功'
                })
              })
            } else {
              this.$alert('恭喜！您猜出了此次结果', '成功', {
                confirmButtonText: '确定'
              }).then(() => {
                this.$message({
                  type: 'info',
                  message: '请继续游戏'
                })
              })
            }
          }
          this.msg = x + 'A' + y + 'B'
        }
      }
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
  #title-two{
    position: absolute;
    top: 20px;
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
    margin-left: 50%;
    transform: translateX(-50%);
    height: 35px;
  }
  .show{
    margin-left: 50%;
    transform: translateX(-180%);
    width: 100px;
    height: 35px;
  }
  .main{
    text-align: center;
  }
  .middle{
    margin-top: 100px;
  }
  #gue-ipt{
    width: 50%;
    margin-top: 10px;
  }
  .guide{
    height: 50px;
    line-height: 50px;
  }
  .gg-btn{
    width: 50%;
    transform: translateX(50%);
    margin-top: 50px;
  }
</style>
