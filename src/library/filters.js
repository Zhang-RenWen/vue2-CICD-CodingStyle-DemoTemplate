// import Vue from 'vue'

// export const filterDot = function(value, dot) {
//   if (isNaN(value)) {
//     return ''
//   }

//   if (Number(value) === 0) {
//     return Number(value)
//   }
//   return Number(value).toLocaleString(undefined, {
//     minimumFractionDigits: dot,
//     maximumFractionDigits: dot,
//   })
// }

// Vue.filter('filterDot', function(value, dot) {
//   if (isNaN(value)) {
//     return ''
//   }

//   if (Number(value) === 0) {
//     return Number(value)
//   }
//   return Number(value).toLocaleString(undefined, {
//     minimumFractionDigits: dot,
//     maximumFractionDigits: dot,
//   })
// })

// Vue.filter('positive', function(value) {
//   if (isNaN(value)) {
//     return ''
//   }

//   if (value < 0) {
//     value *= -1
//     return value
//   }
//   return value
// })

// Vue.filter('dateFilter', function(value) {
//   value = value.slice(0, 10)
//   return value
// })

// Vue.filter('datePlusZero', function(value) {
//   let valueString = value
//   if (value <= 9) {
//     valueString = `0${value}`
//   }
//   return valueString
// })

// Vue.filter('YYYYMMDD', (taiwanDateString, divide = '-') => {
//   const taiwnDateInstance = new Date(taiwanDateString)
//   const YY = taiwnDateInstance.getFullYear()
//   const month = taiwnDateInstance.getMonth() + 1
//   let MM = month

//   if (month <= 9) {
//     MM = `0${month}`
//   }
//   const date = taiwnDateInstance.getDate()
//   let DD = date
//   if (date <= 9) {
//     DD = `0${date}`
//   }
//   return `${YY}${divide}${MM}${divide}${DD}`
// })

// Vue.filter('makeupZero', function(value) {
//   if (String(value).length == 1) {
//     return `0${value}`
//   }
//   return value
// })

// Vue.filter('ceilphone', function(value) {
//   const newStrung = value.replace(/(\d{3})\d{3}(\d{4})/, '$1***$2')
//   return newStrung
// })

// Vue.filter('filterDate', function(value) {
//   const year = value.getFullYear()
//   let month = 1 + value.getMonth()
//   let day = value.getDate()

//   if (month < 10) {
//     month = `0${month}`
//   }
//   if (day < 10) {
//     day = `0${day}`
//   }
//   const newString = `${year}/${month}/${day}`
//   return newString
// })

// Vue.filter('filterWeek', function(value) {
//   const weekArray = ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
//   if (value - 1 == -1) {
//     value = 7
//   }
//   const newString = weekArray[value - 1]
//   return newString
// })

// Vue.filter('filterFmt', function(value, fmt) {
//   const newString = new Date(value).format(fmt)
//   if (new Date(value).format('yyyy-MM-dd') == '1900-01-01') {
//     return ''
//   }
//   return newString
// })
// Date.prototype.format = function(fmt) {
//   const o = {
//     'M+': this.getMonth() + 1, // 月份
//     'd+': this.getDate(), // 日
//     'h+': this.getHours(), // 小時
//     'm+': this.getMinutes(), // 分
//     's+': this.getSeconds(), // 秒
//     'q+': Math.floor((this.getMonth() + 3) / 3), // 季度
//     S: this.getMilliseconds(), // 毫秒
//   }
//   if (/(y+)/.test(fmt))
//     fmt = fmt.replace(
//       RegExp.$1,
//       `${this.getFullYear()}`.substr(4 - RegExp.$1.length),
//     )
//   for (const k in o)
//     if (new RegExp(`(${k})`).test(fmt))
//       fmt = fmt.replace(
//         RegExp.$1,
//         RegExp.$1.length == 1 ? o[k] : `00${o[k]}`.substr(`${o[k]}`.length),
//       )
//   return fmt
// }

// Date.prototype.addSeconds = function(seconds) {
//   this.setSeconds(this.getSeconds() + seconds)
//   return this
// }

// Date.prototype.addMinutes = function(minutes) {
//   this.setMinutes(this.getMinutes() + minutes)
//   return this
// }

// Date.prototype.addHours = function(hours) {
//   this.setHours(this.getHours() + hours)
//   return this
// }

// Date.prototype.addDays = function(days) {
//   this.setDate(this.getDate() + days)
//   return this
// }

// Date.prototype.addMonths = function(months) {
//   this.setMonth(this.getMonth() + months)
//   return this
// }

// Date.prototype.addYears = function(years) {
//   this.setFullYear(this.getFullYear() + years)
//   return this
// }
