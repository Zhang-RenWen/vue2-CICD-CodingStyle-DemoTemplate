<template>
  <div>
    <div v-html="htmlStr" v-highlightjs />
    <div v-html="cssStr" v-highlightjs />
    <div v-html="jsStr" v-highlightjs />
  </div>
</template>

<script>
export default {
  components: {},

  props: {},
  data() {
    return {
      htmlStr:
        '<label>HTML</label><pre><code class="html">&lt;button&gt;Press Me!&lt;/button&gt;</code></pre>',

      cssStr:
        '<label>CSS</label><pre><code class="css">button {\n width:20px;\n height:28px;\n color:#fff;\n font-size:28px;\n padding:11px 15px;\n border-radius:5px;\n background:#14ADE5;\n}</code>',

      jsStr:
        '<label>JS</label><pre><code class="javascript">var aaa = 123;\nconsole.log(aaa) //undefined </code></pre>'
    }
  },

  computed: {},

  mounted() {},

  methods: {}
}
</script>

<style lang="scss">
/* ---------------------------------
Add copy btn to every code tag right top corner
From https://gist.github.com/yangshun/55db997ed0f8f4e6527571fc3bee4675 
---------------------------------- */

/* "Copy" code block button */
pre {
  position: relative;
}

pre .btnIcon {
  position: absolute;
  top: 4px;
  z-index: 2;
  cursor: pointer;
  border: 1px solid transparent;
  padding: 0;
  color: #fff;
  background-color: transparent;
  height: 30px;
  transition: all 0.25s ease-out;
}

pre .btnIcon:hover {
  text-decoration: none;
}

.btnIcon__body {
  align-items: center;
  display: flex;
  padding: 0 8px;
}

.btnIcon svg {
  fill: currentColor;
  margin-right: 0.4em;
}

.btnIcon__label {
  font-size: 11px;
}

.btnClipboard {
  right: 10px;
}
</style>
