<template>
  <div>
    <vue-resizable>
      <div style="width: 100px; height: 100px;border: 1px solid black;">
        <i class="fas fa-angle-up" />
      </div>
    </vue-resizable>

    <vue-resizable drag-selector=".drag-activator">
      <div style="width: 100px; height: 100px;border: 1px solid black;">
        <i class="fas fa-angle-up" />
      </div>
    </vue-resizable>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {}
  },

  mounted() {},
  methods: {}
}
</script>
