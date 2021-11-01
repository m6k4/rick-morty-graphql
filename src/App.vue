<template>
  <div id="app" class="AppView">
    <MainBackground />
    <div class="AppView__content">
      <router-view/>
    </div>
  </div>
</template>

<script lang="ts">
import MainBackground from './common/MainBackground.vue';

export default {
  components: {
    MainBackground,
  },
};
</script>

<style lang="sass">
#app
  padding: 0
  font-family: 'Poppins', sans-serif
  font-style: normal
  font-weight: normal
  font-size: 16px
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: $text-color

html, body
  margin: 0
  padding: 0

html
  height: 100%
  width: 100%

body
  font-size: 14px
  height: 100%
  width: 100%
  background: $background-color
  overflow-x: hidden

.AppView
  width: 100%
  height: 100vh

  &__content
    position: relative
    height: 100%
</style>
