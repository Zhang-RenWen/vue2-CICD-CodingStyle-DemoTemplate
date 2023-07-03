<template>
  <div class="outer">
    <div id="layer-1" class="layer" />
    <div id="layer-2" class="layer" />
    <div id="layer-3" class="layer" />
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {}
  },

  mounted() {
    this.init()
  },

  methods: {
    init() {
      // Fields
      let outer = document.querySelector('.outer'),
        layers = []

      // Generates layers array
      Array.from(outer.querySelectorAll('.layer')).forEach((item, index) => {
        layers.push({
          layer: item,
          startPosition: {
            x: -50,
            y: 0,
            z: index * 4 + 4
          }
        })
      })

      // On mouse move
      document.addEventListener('mousemove', e => {
        // Fields
        let outerCenterX = outer.offsetLeft + outer.offsetWidth / 2,
          outerCenterY = outer.offsetTop + outer.offsetHeight / 2,
          distanceX = e.pageX - outerCenterX,
          distanceY = e.pageY - outerCenterY,
          direction = Math.atan2(distanceY, distanceX),
          distance = Math.sqrt(Math.pow(distanceX, 2) + Math.pow(distanceY, 2)),
          distanceEqualized =
            distance /
            Math.sqrt(Math.pow(window.innerWidth / 2, 2) + Math.pow(window.innerHeight / 2, 2))
        // Moves layers
        layers.forEach(item => {
          let xMoved = Math.cos(direction) * item.startPosition.z * distanceEqualized,
            yMoved = Math.sin(direction) * item.startPosition.z * distanceEqualized
          item.layer.style.cssText = `top:calc( ${item.startPosition.y}px + ${yMoved}%);
          left:calc( ${item.startPosition.x}px + ${xMoved}%)`
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.outer {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-25%, -50%);
  width: 50%;
  height: 50%;
  border: 6px solid rgb(73, 73, 73);
  border-radius: 6px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 1);
  overflow: hidden;

  .layer {
    position: absolute;
    top: -5%;
    left: 0%;
    width: 120%;
    height: 110%;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;

    &#layer-1 {
      background-image: url(../../assets/image/Blue_Point_Island.png);
      z-index: 1;
      background-size: cover;
    }

    &#layer-2 {
      width: 100%;
      height: 50%;
      margin-top: 5%;
      background-image: url(../../assets/image/Articuno.png);
      z-index: 2;
    }

    &#layer-3 {
      width: 100%;
      height: 100%;
      margin-left: 25%;
      margin-top: 10%;
      background-image: url(../../assets/image/kisspng-meteor-shower-icon-meteor-shower-across-the-sky-5a73e5d3903ae1.8340378315175449155908__1_-removebg-preview.png);
      z-index: 3;
    }
  }
}
</style>
