<template>
  <input type="text" @input="check" />
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {}
  },

  mounted() {},
  methods: {
    check(str) {
      const email = /^[^\s]+@[^\s]+\.[^\s]{2,3}$/
      const TaiwanID = /[a-zA-Z][1-2]\d{8}$/g
      const isTaiwanID = TaiwanID.test(str) && this.checkTaiwanIDCal(str)
      const symbol = /^[-~$%^&*()_+|、=-`';/.,":?><]/
      const englishHalfwidth = /^[a-zA-Z \-',.]$/
      const isFullwidth = this.isFullwidth(str)
      const number = /^[0-9]+$/
      const integers = /^[0-9]*$/
      //   const money

      console.log(isTaiwanID, email, symbol, englishHalfwidth, isFullwidth, number, integers)
    },

    checkTaiwanIDCal(str) {
      const abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
      //   const abc = 'ABCDEFGHJKLMNPQRSTUVXYWZIO'
      const m = [1, 9, 8, 7, 6, 5, 4, 3, 2, 1, 1]
      const s =
        (abc.indexOf(str.substring(0, 1).toUpperCase()) + 10).toString() + str.substring(1, 10)
      let sum = 0
      for (let i = 0; i < s.length; i++) {
        sum += s[i] * m[i]
      }
      return sum % 10 === 0
    },

    isFullwidth(str) {
      const charCode = str.charCodeAt(0)
      const isFullwidthUpperCase = 65313 <= charCode && charCode <= 65338
      const isFullwidthLowerCase = 65345 <= charCode && charCode <= 65370
      return isFullwidthUpperCase || isFullwidthLowerCase
    }
  }
}
</script>
