<template>
  <div class="content">
    <div v-show="page === 'page1'" class="page page1">
      <div class="code"></div>
      <div class="up1">
        <ul class="number">
          <li
            v-for="(code, index) in codes"
            :key="index"
          >{{code}}</li>
        </ul>
        <ul class="exchange">
          <li
            :key="number"
            v-for="number in keyNumbers"
            @click="handleClickNumber(number)"
          >{{number}}</li>
          <li class="font btn--delete" @click="handleRemoveOneNumber">删除</li>
          <li class="font btn--confirm" @click="handleConfirmPost">确认</li>
        </ul>
      </div>
    </div>

    <div v-show="page === 'page2'" class="page page2">
       <h1 class="logo"></h1>
    </div>
  </div>
</template>

<script>
let fillCodes = 0
const numberPlaceholder = '-'
export default {
  name: 'Content',
  data () {
    return {
      page: 'page1',
      codes: Array(8).fill(numberPlaceholder),
      keyNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
    }
  },
  computed: {},
  methods: {
    // 删除一位兑换码
    handleRemoveOneNumber () {
      fillCodes--
      this.setCode(fillCodes, numberPlaceholder)

      if (fillCodes <= 0) {
        fillCodes = 0
      }
    },

    // 确认提交兑换码
    handleConfirmPost () {
      const self = this
      const codes = this.codes
      if (fillCodes <= 7) {
        return
      }
      this.$router.push('lanzhou/20')
    },

    // 点击数字
    handleClickNumber (number) {
      if (fillCodes > 7) {
        return
      }

      this.setCode(fillCodes, number)
      fillCodes++
    },

    setCode (index, number) {
      this.codes = this.codes.map((num, i) => {
        if (i > fillCodes) {
          return numberPlaceholder
        } else if (index === i) {
          return number
        }
        return num
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
