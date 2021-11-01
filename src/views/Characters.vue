<template>
  <div class="CharactersView">
    <TheHeader>
      <template #header-content>
        <SearchBar @search="handleSearch"/>
      </template>
    </TheHeader>
    <section class="CharactersView__content">
      <CharactersList />
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import CharactersList from '../Character/components/CharacterList.vue';
import TheHeader from '../platform/TheHeader.vue';
import SearchBar from '../common/SearchBar.vue';
// import { FilterCharacter } from '@/types/types';
import useCharacter from '../Character/composable/useCharacter';

export default defineComponent({
  name: 'Characters',
  components: {
    CharactersList,
    TheHeader,
    SearchBar,
  },

  setup() {
    const {
      fetch,
    } = useCharacter();

    function handleSearch(filters) {
      fetch(1, filters);
    }

    return {
      handleSearch,
    };
  },

});
</script>
<style lang="sass" scoped>
.CharactersView
  &__content
    margin: 40px 400px

</style>
