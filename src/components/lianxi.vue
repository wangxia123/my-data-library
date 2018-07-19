<template>
  <div class="test">
    <div>this is a "{{ message }}"</div>

    <input type="text" v-model="message">

    <div v-text='message'></div>

    <div v-html='hello'></div>

    <div @click='myself'>点击弹出“I love you！♥”</div>

    <div :title='big'>we are good friend!</div>

    <button @click="seen = !seen">show</button>
    <h1 v-if="seen">you can looked me now!</h1>

    <ul>
      <li v-for="(num,index) of 10" :key="index">{{ num }} -- {{ index }}</li>
    </ul>

    <ol>
      <li v-for="(todo,index) in todos" :key="index">{{ todo.text }} -- {{ index }}</li>
    </ol>

    <button @click="count1 += 1">change it</button>
    <span>The button above has been clicked {{ count1 }} times.</span>
    <br>
    <button @click="count2 -= 1">change it</button>
    <span>{{ '数字递减' + count2 }}</span>

    <h1 id="example-4">
      <input type="radio" id="one" value="One" v-model="picked">
      <label for="one">One</label>
      <br>
      <input type="radio" id="two" value="Two" v-model="picked">
      <label for="two">Two</label>
      <br>
      <span>Picked: {{ picked }}</span>

      <div class="my">
        <select v-model="selected">
          <option value="">请选择:我喜欢的小孩是：</option>
          <option>王康康</option>
          <option>王彤彤</option>
          <option>王欢</option>
          <option>王林</option>
          <option>王丽</option>
          <option>王丹丹</option>
          <option>王文静</option>
          <option>王文强</option>
          <option>李振兴</option>
        </select>
        <span>请选择：{{ selected }}</span>
      </div>
    </h1>
    <div>{{ message }}</div>
  </div>
</template>

<script>
  export default {
    name: 'test',
    data() {
      return {
        message: '<h1>hello world!</h1>',
        hello: 'ni zhe ge ben dan!',
        big: 'we are good friend!',
        seen: true,
        count1: 0,
        count2: 0,
        picked: '',
        selected: '',
        todos: [
          { text: 'hello' },
          { text: 'hello' },
          { text: 'hello' },
          { text: 'hello' }
        ]
      }
    },
    methods: {
      myself: function () {
        alert('I love you！！！嗯哼！' + new Date().toLocaleString())
      }
    }
  }
</script>

<style lang="scss" scoped>
  div {
    margin-top: 5%;
  }
  div:first-child {
    margin: 0;
  }
</style>
