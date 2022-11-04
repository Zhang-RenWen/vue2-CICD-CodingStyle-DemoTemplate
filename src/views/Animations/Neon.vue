<template>
  <div class="loveWrapper outWrapper">
    <div class="outWrapper neon">I LOVE CSS</div>
    <div class="outWrapper neon">CSS EXPERT IS ME :)</div>
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
.loveWrapper {
  width: 100%;
  height: 50%;
  border: 5px solid black;
  background-color: black;
  text-align: center;
  vertical-align: middle;
  font-family: monospace, fantasy, 'Gill Sans', 'Gill Sans MT', 'Trebuchet MS', sans-serif;
  font-size: 100px;
  color: red;
}

.neon {
  color: #fb4264;
  line-height: 100px;
  animation: neon 3s ease infinite;
  -moz-animation: neon 3s ease infinite;
  -webkit-animation: neon 3s ease infinite;
}

/*
  .flux {
    color: #426dfb;
    font-size: 9vw;
    line-height: 9vw;
    text-shadow: 0 0 3vw #2356ff;
    animation: flux 2s linear infinite;
    -moz-animation: flux 2s linear infinite;
    -webkit-animation: flux 2s linear infinite;
    -o-animation: flux 2s linear infinite;
  } */
@keyframes neon {
  0%,
  100% {
    text-shadow: 0 0 10px #fa1c16, 0 0 10px #fa1c16, 0 0 10px #fa1c16, 0 0 10px #fa1c16,
      0 0 0.4px #ffdb5b, 0.5px 0.5px 0.1px #806914;
    color: #ffdb5b;
  }

  50% {
    text-shadow: 0 0 0 #800e0b, 0 0 0 #800e0b, 0 0 5px #800e0b, 0 0 0 #800e0b, 0 0 0 #800e0b,
      0 0 0 #40340a;
    color: #806914;
  }
}

/* @keyframes flux {
    0%,
    100% {
      text-shadow: 0 0 1vw #1041ff, 0 0 3vw #1041ff, 0 0 10vw #1041ff, 0 0 10vw #1041ff,
        0 0 0.4vw #8bfdfe, 0.5vw 0.5vw 0.1vw #147280;
      color: #28d7fe;
    }

    50% {
      text-shadow: 0 0 0.5vw #082180, 0 0 1.5vw #082180, 0 0 5vw #082180, 0 0 5vw #082180,
        0 0 0.2vw #082180, 0.5vw 0.5vw 0.1vw #0a3940;
      color: #146c80;
    }
  } */
</style>
