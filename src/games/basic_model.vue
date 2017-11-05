<template>
<div>
  <el-button id="start" v-if="!if_start" @click="if_start=true">开始</el-button>
</div>
</template>

<script>
  export default {
    data () {
      return {
        if_start: false
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
</style>
