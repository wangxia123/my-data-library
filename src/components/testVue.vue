<template>
  <div class="lianxi">
    <h1>{{ good }}</h1>
    <input type="text" v-model="good"><br>
    <button v-on:click="count++">点击{{ count }}</button><br>
    <button>{{ doThis }}</button>
    <ol>
      <li v-for="item in items" v-bind:class="{ finished: item.isFinished }" @click="toggleFinish"
        v-bind:key="item.id"
        v-bind:title="item.title">{{ item.title }}</li>
    </ol>
    <div v-bind:class="{ 'red':red }">
      <label for="">点击给你惊喜有</label>
      <input type="checkbox" name="" id="" v-model="red">
    </div>
  </div>
</template>

<script>
export default {
  name: 'lianxi',
  data () {
    return {
      good: 'hello',
      red: false,
      count: 0,
      doThis: 'you is a super man!',
      items: [
        {
          id:1,
          title: 'hello1',
          isFinished: true
        },
        {
          id:2,
          title: 'hello2',
          isFinished: true
        },
        {
          id:3,
          title: 'hello3',
          isFinished: true
        }
      ]
    }
  },
  methods: {
    toggleFinish: function (item) {
      alert(item)
    }
  }
}
</script>

<style lang="scss" scoped>
  .red{
    color: red;
  }
</style>
