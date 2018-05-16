<template>
  <div class="index">
    <div class="content">
      <div class="nav">
        <img src="../assets/images/pict.jpg" alt="" class="imgs">
        <p class="title">{{ message }}</p>
        <p class="icon">❀</p>
      </div>
      <div class="bt">
        <router-link to="/trip" class="btn">♥走进甘谷♥</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      message: 'Welcome come to our hometown!'
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
