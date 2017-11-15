<template>
<div id="rank">
  <div class="main">
    <div class="ranking left">
      <p class="ranking-title">基础模式排行</p>
      <el-row class="title-row">
        <el-col :span="6">排名</el-col>
        <el-col :span="6">玩家</el-col>
        <el-col :span="6">次数</el-col>
        <el-col :span="6">挑战</el-col>
      </el-row>
      <ul>
        <li v-for="(value, index) in basic" class="list">
          <el-row>
            <el-col :span="6">{{index+1}}</el-col>
            <el-col :span="6">{{basic[index].name}}</el-col>
            <el-col :span="6">{{basic[index].times}}</el-col>
            <el-col :span="6">
              <el-tooltip class="item" effect="dark" content="跟他耍耍！" placement="right-end">
                <el-button size="small" @click="challenge(index)">挑战</el-button>
              </el-tooltip>
            </el-col>
          </el-row>
        </li>
      </ul>
    </div>
    <div class="ranking right">
      <p class="ranking-title">实力模式排行</p>
      <el-row class="title-row">
        <el-col :span="6">排名</el-col>
        <el-col :span="6">玩家</el-col>
        <el-col :span="6">总次数</el-col>
        <el-col :span="6">挑战</el-col>
      </el-row>
      <ul>
        <li v-for="(value, index) in strength" class="list">
          <el-row>
            <el-col :span="6">{{index+1}}</el-col>
            <el-col :span="6">{{strength[index].name}}</el-col>
            <el-col :span="6">{{strength[index].times}}</el-col>
            <el-col :span="6">
              <el-tooltip class="item" effect="dark" content="跟他耍耍！" placement="right-end">
                <el-button size="small" @click="open">挑战</el-button>
              </el-tooltip>
            </el-col>
          </el-row>
        </li>
      </ul>
    </div>
  </div>
</div>
</template>

<script>
  import bus from '../assets/bus'
  import ElCol from 'element-ui/packages/col/src/col'
  export default {
    components: {ElCol},
    data () {
      return {
        basic: [{
          name: 'Mr.Chen',
          times: 1
        }, {
          name: 'Sher',
          times: 2
        }, {
          name: 'Nobody',
          times: 3
        }, {
          name: 'Hi',
          times: 4
        }, {
          name: 'GuiZi',
          times: 5
        }],
        strength: [{
          name: 'Mr.Chen',
          times: 3
        }, {
          name: 'Sher',
          times: 19
        }, {
          name: 'Nobody',
          times: 26
        }, {
          name: 'Hi',
          times: 40
        }, {
          name: 'GuiZi',
          times: 48
        }]
      }
    },
    mounted () {
      bus.$on('ranks', (p, l) => {
        let v = []
        this.basic.pop()
        this.basic.unshift(v)
        this.basic[l].name = '你没更改名字的权利'
        this.basic[l].times = p
        console.log(this.basic)
      })
    },
    methods: {
      challenge (index) {
        let n = this.basic[index].times
        bus.$emit('ranking', n)
        this.$router.push('game/add')
      },
      open () {
        this.$alert('还没这个功能呢，哈哈哈哈嗝', '错误', {
          confirmButtonText: '确定'
        }).then(() => {
          this.$message({
            type: 'info',
            message: '挑战左边的！'
          })
        })
      }
    }
  }
</script>

<style scoped>
  .main{
    background: rgba(255, 255, 255, .5);
    box-sizing: border-box;
    width: 100%;
    display: flex;
    flex-direction: row;
  }
  .ranking{
    width: 50%;
    text-align: center;
  }
  .ranking-title{
    margin-top: 20px;
    font-size: 20px;
    color: #5A5E66;
  }
  .right{
    border-left: 1px solid #EDF2FC;
  }
  .title-row{
    border-radius: 3px;
    height: 50px;
    line-height: 50px;
    color: #878d99;
    margin:20px 20px 0 20px;
    background: #DFE4ED;
  }
  ul{
    margin:0 20px 20px 20px;
  }
  .list{
    height: 50px;
    line-height: 50px;
    border-radius: 3px;
    transition:background-color 0.3s linear;
    border-bottom: 1px solid #EDF2FC;
  }
  .list:hover{
    background-color: #DFE4ED;
  }
</style>
