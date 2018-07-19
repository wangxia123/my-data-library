<template>
  <div class="home">
    <h1>{{title}}</h1>
    <input type="text" v-model="newItem" @keyup.enter="addNew">
    <ul>
      <li v-for="item in items" @click="toggleFinish(item)" :class="{finished: item.isFinished}">
        {{ item.label }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'todo',
  data () {
    return {
      title: 'This is todo list',
      items: [
        {
          label: 'play',
          isFinished: true
        }
      ],
      newItem: ''
    }
  },
  methods: {
    toggleFinish: function (item) {
      item.isFinished = !item.isFinished
    },
    addNew: function () {
      this.items.push({
        label: this.newItem,
        isFinished: false
      })
      this.newItem = ''
    }
  }
}
</script>

<style lang="scss" scoped>
  .finished {
    color: #ccc;
    font-size: 20px;
  }
  h1{
    width: 80%;
    margin:10% auto;
    text-align: center;
  }
  input {
    width: 80%;
    margin: auto 10%;
    text-align: center;
  }
  li {
    width: 80%;
    margin:5% auto;
  }
</style>
