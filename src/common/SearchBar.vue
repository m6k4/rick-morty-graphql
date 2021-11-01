<template>
  <div class="SearchBar">
    <input class="SearchBar__input"
          placeholder="search by name"
          v-on:keyup.enter="handleSearch"
          v-model="searchedValue"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'SearchBar',

  setup(props, context) {
    const searchedValue = ref<string>('');

    function handleSearch() {
      context.emit('search', {
        name: searchedValue.value,
      });
    }

    return {
      searchedValue,
      handleSearch,
    };
  },
});
</script>
<style lang="sass" scoped>
.SearchBar
  margin: 0

  &__input
    all: unset
    border: 1px $main-color solid
    padding: 16px
    width: 220px
    border-radius: 12px
    border: 2px solid $main-color
    box-shadow: 0px 0px 8px 2px lighten(#4FA639, 5%)

  &__label
    border-left: 1px solid #A9B1BD !important
    border-right: 1px solid #A9B1BD !important

</style>
