<template>
    <div class="content1">
      <div v-show="page === 'page1'" class="page page1">
        <div class="code"></div>
        <div class="up1">
          <ul class="number"><!--选择的数字 -->
            <li ref="testNum" v-for="(code,index) in codes"
                :key="index"
            >{{ code }}</li>
          </ul>
          <ul class="exchange"><!--被选择的数字 -->
            <li v-for="number in numbers"
                :key="number"
                @click="handleClickNumber(number)"

            >{{ number }}</li>
            <li class="font btn--delete" @click="handleClickMoveNumber">删除</li>
            <li class="font btn--confirm" @click="handleClickConfirmNumber">确认</li>
          </ul>
        </div>
      </div>

      <div v-show="page === 'page2'" class="page page2">
         <h1 class="logo"></h1>
      </div>
    </div>
  </template>

  <script>
    // 初始化
  let fillCodes = 0
  const numberPlaceholder = '-'
  export default {
    name: 'Content',
    data () {
      return {
        page: 'page1', // 要展示的页面page1
        codes: Array(8).fill(numberPlaceholder), // 将8个数字放在codes空格中
        numbers: [1,2,3,4,5,6,7,8,9,0] // 数字
      }
    },
    computed: {}, // 计算属性
    methods: { // 方法
      setCode (index, number) { //这个函数会运用到下面的添加数字，删除数字以及确认之后的其他操作
        this.codes = this.codes.map((num, i) =>{
          if (i > fillCodes) {
            return numberPlaceholder
          }else if (index === i) {
            return number
          }
          return num
        })
      },
      // 删除一位兑换码
      handleClickMoveNumber () {
        fillCodes--
        this.setCode(fillCodes,numberPlaceholder) //

        if (fillCodes <= 0) {
          fillCodes = 0
        }
      },

      // 确认提交兑换码
      handleClickConfirmNumber () {
        const codes = this.codes
        if (fillCodes <= 7) {
          alert('请填完兑换码')
        }else{
        this.$router.push('home')
      }
    },

      // 点击数字
      handleClickNumber (number) { //点击数字时，如果填充的数字大于7，return出来
        if (fillCodes>7) {
          return
        }
        this.setCode(fillCodes,number) //
        fillCodes ++
      },
    }
  }
  </script>

  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>

  </style>
