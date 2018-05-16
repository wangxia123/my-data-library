<template>
  <div id="app">
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      message: 'hello hometown!'
    }
  }
}
</script>

<style lang="scss" scoped>

  html,
  body {
    width: 100%;
    height: 100%;
    font-size: 100%;
    overflow: hidden;
    background: #f5c4c6;
  }

  ul,
  ol,
  li {
    list-style: none;
  }

  a {
    -webkit-tap-highlight-color: rgba(255, 0, 0, 0);
    text-decoration: none;

    &:hover {
      color: inherit;
    }
  }

  #app{
    background: url('./assets/images/bg3.jpg') no-repeat top center;
    background-size: cover;
  }
</style>
