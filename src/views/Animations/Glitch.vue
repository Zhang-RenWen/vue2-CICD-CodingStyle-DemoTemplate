<template>
  <div class="GLITCH">
    <h1 data-text="GLITCH">GLITCH</h1>
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
.GLITCH {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: Arial, Helvetica, sans-serif;
  background-color: #000;

  * {
    margin: 0;
    padding: 0;
  }

  h1 {
    font-size: 100px;
    color: #fff;
  }

  h1::before {
    content: attr(data-text);
    position: absolute;
    left: -1.5px;
    text-shadow: 1.5px 0 #69cad1;
    background-color: #000;
    animation: glitch1 0.8s infinite linear alternate-reverse;
  }

  h1::after {
    content: attr(data-text);
    position: absolute;
    left: 1.5px;
    text-shadow: -1.5px 0 #ef1751;
    background-color: #000;
    animation: glitch2 1s infinite linear alternate-reverse;
  }

  @keyframes glitch1 {
    0% {
      clip-path: inset(5% 0 15% 0);
    }

    20% {
      clip-path: inset(61% 0 9% 0);
    }

    40% {
      clip-path: inset(5% 0 81% 0);
    }

    60% {
      clip-path: inset(21% 0 52% 0);
    }

    80% {
      clip-path: inset(11% 0 70% 0);
    }

    100% {
      clip-path: inset(68% 0 6% 0);
    }
  }

  @keyframes glitch2 {
    0% {
      clip-path: inset(82% 0 9% 0);
    }

    20% {
      clip-path: inset(31% 0 44% 0);
    }

    40% {
      clip-path: inset(49% 0 11% 0);
    }

    60% {
      clip-path: inset(6% 0 85% 0);
    }

    80% {
      clip-path: inset(40% 0 37% 0);
    }

    100% {
      clip-path: inset(90% 0 3% 0);
    }
  }
}
</style>
