<template>
  <div>
    <div @click="ROC_Date(new Date(), { showDetail: true, aaaaaaa: true })">
      123
    </div>
    <div>
      {{ removeNull(nullNest) }}
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      nullNest: {
        aa: null,
        bb: '',
        cc: null,
        dd: {
          dd1: 'dd1',
          dd2: null,
          dd3: 'null'
        },

        ee: [
          {
            ee: 'null',
            ff: [
              'null',
              {
                ff1: {
                  ff2: null
                }
              }
            ]
          },
          null
        ]
      }
    }
  },

  mounted() {
    this.toLocaleString(10000000.12345)
  },

  methods: {
    toLocaleString(n) {
      // toLocaleStringnstrate selected international locales
      let locales = [
        undefined, // Your own browser
        'en-US', // United States
        'de-DE', // Germany
        'ru-RU', // Russia
        'hi-IN' // India
      ]
      let opts = { minimumFractionDigits: 2 }
      const result = locales.map(locales => {
        const value = n.toLocaleString(locales, opts)
        const obj = { locales, value }
        return obj
      })

      return result
    },

    removeNull(data, str = '') {
      let newObject = data
      if (typeof data !== 'object' || this.isNull(data)) {
        if (this.isNull(data)) {
          return str
        } else {
          return data
        }
      }

      for (const v in newObject) {
        const item = newObject[v]
        if (this.isNull(item)) {
          newObject[v] = str
        }
        if (typeof item === 'object') {
          this.removeNull(item)
        }
      }
      return newObject
    },

    isNull(d) {
      if (this._) {
        return this._.isNull(d) || (typeof d === 'string' && d.toLowerCase() === 'null')
      }
      return (
        (!d && typeof d !== 'undefined' && d !== 0) ||
        (typeof d === 'string' && d.toLowerCase() === 'null')
      )
    },

    /**
     * 顯示民國年
     * @param {String,Date} date
     */
    ROC_Date(date, option = {}) {
      const dateInstance = new Date(date)
      function YYYMMDDhhmmss(d, showDetail) {
        let Y, M, D, h, m, s
        Y = String(d.getFullYear() - 1911).padStart(3, '0')
        M = String(d.getMonth() + 1).padStart(2, '0')
        D = String(d.getDate()).padStart(2, '0')
        h = String(d.getHours()).padStart(2, '0')
        m = String(d.getMinutes()).padStart(2, '0')
        s = String(d.getSeconds()).padStart(2, '0')
        return `${Y}/${M}/${D} ${showDetail ? `${h}:${m}:${s}` : ''}`
      }
      function isValidDate(d) {
        return d instanceof Date && !isNaN(d)
      }
      if (!isValidDate(dateInstance)) {
        console.error('isValidDate in ROC_Date()')
        return
      }
      const defaultOption = {
        showDetail: false,
        ignoreSecond: false
      }
      Object.assign(defaultOption, option)
      if (dateInstance.getFullYear() - 1911 < 0) {
        console.error('out of year in ROC_Date()')
      }
      const { showDetail } = defaultOption
      console.log(YYYMMDDhhmmss(dateInstance, showDetail))
      return YYYMMDDhhmmss(dateInstance, showDetail)
    }
  }
}
</script>
