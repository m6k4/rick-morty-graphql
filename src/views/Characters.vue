<template>
  <div class="CharactersView">
    <TheHeader />
    <section class="CharactersView__content">
      <CharactersList />
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import CharactersList from '../Character/components/CharacterList.vue';
import TheHeader from '../platform/TheHeader.vue';

export default defineComponent({
  name: 'Characters',
  components: {
    CharactersList,
    TheHeader,
  },
});
</script>
<style lang="sass" scoped>
.CharactersView
  &__content
    margin: 40px 400px

</style>
