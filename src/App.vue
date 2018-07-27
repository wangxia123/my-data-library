<template>
  <div id="app">
    <div id="app1"><my-component>This is a component!!!</my-component></div>
    <router-view></router-view>
  </div>
</template>

<script>
  var myComponent = Vue.extend({
			template: '<div>This is my first component!</div>'
		})

		new Vue({
			el: '#app',
			components: {
				// 2. 将myComponent组件注册到Vue实例下
				'my-component' : myComponent
			}
		});
export default {
  name: 'App'
}
</script>

<style lang="scss" scoped>
</style>
