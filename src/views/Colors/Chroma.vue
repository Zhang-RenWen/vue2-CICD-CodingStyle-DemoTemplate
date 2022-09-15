<template>
  <div class="colorScaleWrap">
    <template v-for="(scale, i) of mainColorGroups">
      <div :key="i" class="colorScale">
        <template v-for="(color, j) of scale">
          <div :key="j" class="color" :style="`background-color:${color}`">
            {{ color }}
          </div>
        </template>
      </div>
    </template>
  </div>
</template>

<script>
import chroma from 'chroma-js'

export default {
  components: {},
  props: {},
  data() {
    return {
      mainColorGroups: []
    }
  },

  computed: {},
  mounted() {
    const vm = this
    const colors = [
      '#F44336',
      '#E91E63',
      '#9C27B0',
      '#673AB7',
      '#3F51B5',
      '#2196F3',
      '#03A9F4',
      '#00BCD4',
      '#009688',
      '#4CAF50',
      '#8BC34A',
      '#CDDC39'
    ]
    vm.mainColorGroups = vm.colorScaleGenerator(colors, 10)
  },

  methods: {
    colorScaleGenerator(colors, amount = 10, min = '#ffffff') {
      const colorScaleGroups = []
      colors.forEach(d => {
        const scale = chroma
          .scale([d, min])
          .mode('lch')
          .colors(amount)
        colorScaleGroups.push(scale)
      })
      return colorScaleGroups
    }
  }
}
</script>

<style lang="scss" scoped>
.colorScaleWrap {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 25px 25px 0 25px;

  .colorScale {
    width: 32%;

    .color {
      width: 100%;
      height: 40px;
    }
  }
}
</style>
