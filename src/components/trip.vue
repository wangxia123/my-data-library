<template>
  <div class="trip">
    <div class="content">
      <div class="nav">
        <router-link class="return" to="/"><i class="iconfont icon-cc-arrow-left"></i></router-link>
        <p class="title">选择你喜欢的东西吧！</p>
      </div>
      <ul class="list">
        <li>
          <router-link to="/celebrity"></router-link>
          <p><i class="iconfont icon-ren01"></i>甘谷名人</p>
        </li>
        <li><router-link to="/food"></router-link><p><i class="iconfont icon-food"></i>甘谷美食</p></li>
        <li><router-link to="/home"></router-link><p><i class="iconfont icon-wenhua"></i>甘谷文化</p></li>
        <li><router-link to="/"></router-link><p><i class="iconfont icon-food"></i>甘谷俚语</p></li>
        <li><router-link to="/journey"></router-link><p><i class="iconfont icon-lvyoutehui"></i>甘谷旅游</p></li>
        <li><router-link to="/"></router-link><p><i class="iconfont icon-food"></i>甘谷风俗</p></li>
        <li><router-link to="/"></router-link><p><i class="iconfont icon-food"></i>天水</p></li>
        <li><router-link to="/"></router-link><p><i class="iconfont icon-1"></i>武山</p></li>
        <li><router-link to="/"></router-link><p><i class="iconfont icon-food"></i>秦安</p></li>
        <li><router-link to="/"></router-link><p><i class="iconfont icon-food"></i>庆阳</p></li>
        <li><router-link to="/"></router-link><p><i class="iconfont icon-food"></i>兰州</p></li>
        <li><router-link to="/"></router-link><p><i class="iconfont icon-food"></i>qqqq</p></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'trip',
  data () {
    return {
      msg: '选择你喜欢的东西吧！'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
