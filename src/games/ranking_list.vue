<template>
<div id="rank">
  <div class="main">
    <div class="ranking left">
      <p class="ranking-title">基础模式排行</p>
      <el-row class="title-row">
        <el-col :span="6">排名</el-col>
        <el-col :span="6">玩家</el-col>
        <el-col :span="6">次数</el-col>
      </el-row>
      <ul>
        <li v-for="(value, index) in basic">
          <span>{{index+1}}</span>
          <span>{{basic[index].name}}</span>
          <span>{{basic[index].times}}</span>
          <el-tooltip class="item" effect="dark" content="跟他耍耍！" placement="right">
            <img src="../img/rank.png" />
          </el-tooltip>
        </li>
      </ul>
    </div>
    <div class="line"></div>
    <div class="ranking right">
      <p class="ranking-title">实力模式排行</p>
      <el-row class="title-row">
        <el-col :span="6">排名</el-col>
        <el-col :span="6">玩家</el-col>
        <el-col :span="6">总次数</el-col>
      </el-row>
      <ul>
        <li v-for="(value, index) in strength">
          <span>{{index+1}}</span>
          <span>{{strength[index].name}}</span>
          <span>{{strength[index].times}}</span>
          <el-tooltip class="item" effect="dark" content="跟他耍耍！" placement="right">
            <img src="../img/rank.png" />
          </el-tooltip>
        </li>
      </ul>
    </div>
  </div>
</div>
</template>

<script>
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
          times: 6
        }, {
          name: 'Nobody',
          times: 9
        }, {
          name: 'Hi',
          times: 12
        }, {
          name: 'GuiZi',
          times: 14
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
    }
  }
</script>

<style scoped>
#rank{

}
  .main{
    width: 80%;
    display: flex;
    flex-direction: row;
  }
  .ranking{
    width: 50%;
    text-align: center;
  }
  .ranking-title{
    font-size: 20px;
    color: #5A5E66;
  }
  .line{
    border: 1px solid;
    width: 0;
    height: 200px;
  }
  .right{

  }
  .title-row{
    color: #878d99;
  }
</style>
