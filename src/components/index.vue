<template>
  <div class="index">
    <div class="content">
      <div class="nav">
        <img src="../assets/images/pict.jpg" alt="" class="imgs">
        <p class="title">{{ message }}</p>
        <p class="icon">❀</p>
      </div>
      <div class="bt bt1">
        <router-link to="/trip/food:123" class="btn" v-text="msg"></router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      message: 'Welcome come to our hometown!',
      msg: '♥走进甘谷♥'
    }
  }
}
</script>

<style lang="scss" scoped>
  .index{
    background: url('../assets/images/bg.png') no-repeat top center;
    background-size: cover;
  }
</style>
