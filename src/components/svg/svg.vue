<template>
  <div ref="icon" class="icon" />
</template>

<script>
export default {
  components: {},
  props: {
    name: {
      type: String,
      default: ''
    },

    w: {
      type: Number,
      default: -1
    },

    h: {
      type: Number,
      default: -1
    }
  },

  data() {
    return {
      icon: ''
    }
  },

  async mounted() {
    const width = this.w
    const height = this.h
    const { name } = this
    const el = this.$refs.icon
    let iconHTML = this.icon
    // eslint-disable-next-line
    const module = require(`@/assets/icon/${name}.svg`)
    iconHTML = module.default.content.replace('symbol', 'svg')
    el.innerHTML = iconHTML
    if (width > -1 && height > -1) {
      el.setAttribute('style', `width:${width}px;height:${height}px`)
    }
  },

  destroyed() {},

  methods: {}
}
</script>

<style lang="scss" scoped>
.icon {
  width: 100%;
  height: 100%;
}
</style>
