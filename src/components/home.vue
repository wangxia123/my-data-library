<template>
  <div class="home">
    <div>
      <router-link to="/celebrity">首页</router-link>
      <router-link to="/food">管理页</router-link>
    </div>
    <div id="app1">
      <my-component></my-component>
    </div>
    <view-router name="sidebar"></view-router>
    <view-router name="content"></view-router>
  </div>
</template>

<script>
  // var myComponent = Vue.extend ({
  //   template: `<div>This is a component!</div>`
  // })

  // vue.component('my-component',myComponent)
export default {
  el: '#app'
}
</script>

<style lang="scss" scoped>

</style>
