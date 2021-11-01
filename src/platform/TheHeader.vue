<template>
  <header class="TheHeader">
    <img
        class="TheHeader__img"
        src="@/assets/images/header.png"
    />
    <slot name="header-content"/>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TheHeader',
});
</script>

<style lang="sass">
.TheHeader
  background: transparent
  align-items: center
  padding: 10px
  width: 100%
  display: flex
  height: 80px
  column-gap: 20%

  &__img
    height: 150px
    margin: 0 60px 10px

</style>
