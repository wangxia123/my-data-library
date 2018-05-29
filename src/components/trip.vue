<template>
  <div class="trip">
    <div class="content">
      <div class="nav">
        <router-link class="return" to="/">
          <i class="iconfont icon-cc-arrow-left"></i>
        </router-link>
        <p class="title">猜你感兴趣！</p>
      </div>
      <ul class="list">
        <li>
          <router-link to="/celebrity"></router-link>
          <p>
            <i class="iconfont icon-ren01"></i>甘谷名人</p>
        </li>
        <li>
          <router-link to="/food">
            <img src="https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=4d47b413d42a283457ab3e593adca28f/c8177f3e6709c93d5dd1aaf99f3df8dcd1005498.jpg" alt="" srcset="">
          </router-link>
          <p><i class="iconfont icon-food"></i>甘谷美食</p>
        </li>
        <li>
          <router-link to="/home">
            <img src="https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=889f3a1c0b2442a7ba03f5f7b02ac62e/1b4c510fd9f9d72a76971082d02a2834359bbbb9.jpg" alt="" srcset="">
          </router-link>
          <p><i class="iconfont icon-wenhua"></i>甘谷文化</p>
        </li>
        <li>
          <router-link to="/testVue"></router-link>
          <p><i class="iconfont icon-food"></i>练习vue</p>
        </li>
        <li>
          <router-link to="/journey">
            <img src="../assets/images/bg-j.jpg" alt="" srcset="">
          </router-link>
          <p><i class="iconfont icon-lvyoutehui"></i>甘谷旅游</p>
        </li>
        <li>
          <router-link to="/"></router-link>
          <p><i class="iconfont icon-food"></i>甘谷风俗</p>
        </li>
        <li>
          <router-link to="/content"></router-link>
          <p><i class="iconfont icon-food"></i>天水</p>
        </li>
        <li>
          <router-link to="/todo"></router-link>
          <p><i class="iconfont icon-1"></i>todo</p>
        </li>
        <li>
          <router-link to="/"></router-link>
          <p><i class="iconfont icon-food"></i>秦安</p>
        </li>
        <li>
          <router-link to="/"></router-link>
          <p><i class="iconfont icon-food"></i>庆阳</p>
        </li>
        <li>
          <router-link to="/lanzhou">
            <img src="../assets/images/beef.jpg" alt="" srcset="">
          </router-link>
          <p><i class="iconfont icon-food"></i>兰州</p>
        </li>
        <li>
          <router-link to="/lianxi"></router-link>
          <p><i class="iconfont icon-food"></i>lianxi-vue</p>
        </li>
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
