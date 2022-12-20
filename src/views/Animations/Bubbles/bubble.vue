<template>
  <div class="frame">
    <div class="base">
      <div class="wrap">
        <div class="cover" />
      </div>
    </div>
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

<style lang="scss" scoped>
.frame {
  display: flex;
  flex-wrap: wrap;
  background-color: #000;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-25%, -50%);
  width: 400px;
  height: 400px;
  border: 6px solid rgb(73, 73, 73);
  border-radius: 6px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 1);
  overflow: hidden;
}
.base {
  width: 50%;
  height: 50%;
  border-radius: 50%;
  background-color: #000;
  transform: translate(50%, 50%);
}
.wrap {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-image: radial-gradient(
    circle at 50% 50%,
    rgba(0, 0, 0, 0.146) 0%,
    rgba(0, 0, 0, 0.249) 20%,
    rgba(0, 0, 0, 0.516) 50%,
    rgb(64, 0, 255) 75%,
    #fb41fb 80%,
    #ffea00 100%
  );
}

.cover {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #000;
  animation: broken 2s cubic-bezier(0.72, 0.37, 1, 1) 0.1s infinite both;
}

@keyframes broken {
  0% {
    transform: translate(-35%, -35%) scale(0);
  }
  25% {
    transform: translate(-1%, -1%) scale(1.05);
  }
}
</style>
