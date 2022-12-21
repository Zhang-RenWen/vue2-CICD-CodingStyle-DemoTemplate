<template>
  <div class="frame">
    <div class="bubble">
      <div class="refraction-top" />
      <div class="refraction-bottom" />
      <div class="light" />
      <div class="cover" />
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
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-25%, -50%);
  width: 400px;
  height: 400px;
  background-color: #000;
  border: 6px solid rgb(73, 73, 73);
  border-radius: 6px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 1);
  overflow: hidden;
}

.bubble {
  width: 50%;
  height: 50%;
  border-radius: 50%;
  background-color: #000;
  transform: translate(50%, 50%);
}

.refraction-top {
  width: 90%;
  height: 90%;
  border-radius: 50%;
  position: absolute;
  left: 5%;
  top: 1%;
  background-image: radial-gradient(
    circle at 50% 60%,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0) 60%,
    rgba(64, 0, 0, 0.401) 65%,
    #ff00ff81 80%,
    #ffea00a9 90%,
    #ffea00 100%
  );
}
.refraction-bottom {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  position: absolute;
  background-image: radial-gradient(
    circle at 50% 43%,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0) 50%,
    rgba(64, 0, 255, 0.401) 60%,
    #ff00ff81 65%,
    #ffea0090 70%,
    #ffea00 100%
  );
}

.light {
  background: #ffffff;
  width: 7%;
  height: 25%;
  position: absolute;
  left: 10%;
  top: 15%;
  transform: rotate(30deg);
  filter: blur(3px);
  border-radius: 50% / 50%;
}

.cover {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #000;
  animation: broken 3s cubic-bezier(0.72, 0.37, 1, 1) 1.1s infinite both;
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
