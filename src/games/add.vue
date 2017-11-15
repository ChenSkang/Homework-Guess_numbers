<template>
  <div>
    <span id="title-two">挑战模式</span>
    <div class="main">
      <div class="middle">
        <div class="number" v-if="show_answer">游戏答案：{{num}}</div>
        <el-tooltip effect="dark" content="点击会使本次挑战失败" placement="right" :disabled="show_answer">
          <el-button class="show" @click="show_answer = true,game_over = true" type="primary" v-if="!show_answer">查看答案</el-button>
        </el-tooltip>
        <el-input v-model="ipt" placeholder="请输入猜测的数字" id="gue-ipt" @keyup.enter.native="guessNumber" :disabled="show_answer">
          <el-button slot="append" @click="guessNumber" :disabled="show_answer">确定</el-button>
        </el-input>
        <div class="guide">游戏提示：{{msg}}</div>
        <div class="guide">猜测次数：{{n}}&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</div>
        <el-row :gutter="20" class="gg-btn" v-if="game_over">
          <el-col :span="12"><router-link to="/home/ranking"><el-button type="primary">返回排行</el-button></router-link></el-col>
          <el-col :span="12"><el-button @click="makeNumber">再次挑战</el-button></el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
  import bus from '../assets/bus'
  export default {
    data () {
      return {
        max: 5,
        show_answer: false,
        game_over: false,
        n: 0,
        arr: [],
        num: 1234,
        ipt: '',
        msg: '0A0B'
      }
    },
    mounted () {
      bus.$on('ranking', (n) => {
        this.max = n
        this.makeNumber()
      })
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
        if (this.n < this.max) {
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
            this.game_over = true
            this.show_answer = true
            let x = this.n
            bus.$emit('ifRank', x)
            this.$alert('恭喜！挑战成功！', '成功', {
              confirmButtonText: '确定'
            }).then(() => {
              this.$message({
                type: 'info',
                message: '游戏成功'
              })
            })
          }
          this.msg = x + 'A' + y + 'B'
        } else if (this.n === this.max) {
          this.game_over = true
          this.$alert('你好菜挑战失败了', '失败', {
            confirmButtonText: '确定'
          }).then(() => {
            this.$message({
              type: 'info',
              message: '别想了失败了'
            })
          })
        }
      }
    }
  }
</script>

<style scoped>
  #title-two{
    position: absolute;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 30px;
    color: #878D99;
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
