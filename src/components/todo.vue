<template>
  <div class="home">
    <input type="text" v-model="todo" @keyup.enter="enter">
    <ul v-bind="{ 'red':red }">
      <li v-for="(item, index) in todos" :key="index">
        <input type="checkbox" @click="addTodo(index)" v-model="red">
        <span v-text="item" v-bind:class="my"></span>
        <!-- {{ item }} -->
        <button @click="delTodo(index)">del</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'todo',
  data () {
    return {
      red: false,
      my: false,
      todo:'',
      todos: []
    }
  },
  methods: {
    enter: function () {
      this.todos.push(this.todo)
      this.todo = ''
    },

    delTodo (index) {
      this.todos.splice(index, 1)
    },

    addTodo (index) {
      this.todos.indexOf(1)
    }
  }
}
</script>

<style lang="scss" scoped>
.red{
  color:red;
}
.my{
  color:#ccc;
}
</style>
