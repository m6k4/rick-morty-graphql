<template>
  <div class="MainBackground">
    <img src="@/assets/images/background.jpg"
       class="MainBackground"
    >>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MainBackground',
});
</script>

<style lang="sass">

.MainBackground
  position: fixed
  top: 0
  left: 0
  width: 100%
  height: 100%
</style>
