<template>
<div>
  <el-button id="start" v-if="!if_start" @click="makeNumber">开始</el-button>
  <div class="main">
    <div class="number">{{num}}</div>
    <el-input v-model="ipt" placeholder="请输入猜测的数字" id="gue-ipt">
      <el-button slot="append" @click="guessNumber">确定</el-button>
    </el-input>
    <div>提示:{{msg}}</div>
  </div>
</div>
</template>

<script>
  export default {
    data () {
      return {
        n: 0,
        arr: [],
        num: 1234,
        if_start: false,
        ipt: '',
        msg: ''
      }
    },
    methods: {
      makeNumber () {
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
        console.log(this.num)
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
          }
          this.msg = x + 'A' + y + 'B'
        } else {
          this.$confirm('您已经连续猜了15次，请重新开始', '失败', {
            closeOnClickModal: false,
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            center: true
          }).then(() => {
            this.$message({
              type: 'info',
              message: '新游戏'
            })
          }).catch(() => {
            this.$message({
              type: 'warning',
              message: '游戏结束'
            })
          })
        }
      }
    }
  }
</script>

<style scoped>
 #start{
   width: 80px;
   position: absolute;
   top: 120px;
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
  #gue-ipt{
    width: 50%;
  }
</style>
