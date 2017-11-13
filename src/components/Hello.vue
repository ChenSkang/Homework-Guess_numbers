<template>
<div id="main">
  <div class="sign"><router-link to="/home/game/basic">Go to game</router-link></div>
</div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .sign{
    position: absolute;
    top: 300px;
    margin-left: 50%;
    transform: translateX(-50%);
  }
</style>
