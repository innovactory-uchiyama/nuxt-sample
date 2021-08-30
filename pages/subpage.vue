<template>
  <div>
    <HeaderMenu />
    <div class="canvas-container">
      <canvas id="myCanvas" />
    </div>
    <div class="container">
      <MessageCard vhtml="true" :message="$t('subPage')" />
    </div>
  </div>
</template>

<script>
import { init, animate } from '~/assets/js/threejs_2test'

export default {
  head () {
    return this.$nuxtI18nHead({ addSeoAttributes: true })
  },
  mounted () {
    init()
    animate()
  }
}
</script>

<style scoped>
.container {
  justify-content: center;
  display: flex;
  margin: 20px;
}

.canvas-container {
  text-align: center;
  margin-top: 20px;
}

#myCanvas {
  max-width: 60vw;
  max-height: 60vh;
}
</style>

<style lang="scss">
.dg.ac {
  top: 70px;
}
</style>
