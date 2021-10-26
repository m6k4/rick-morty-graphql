<template>
  <div class="CharacterList">
    <div class="CharacterList__list">
      <CharacterListItem
        v-for="character in characters"
        :key="character.getId()"
        :character="character"
      />
    </div>
    <div class="CharacterList__pagination">
      <ThePagination
        :total="infoCount"
        :page-size="pageSize"
        @current-change="changePage"
      />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue';
import useCharacter from '../composable/useCharacter';
import { FilterCharacter } from '@/types/types';
import ThePagination from '../../common/ThePagination.vue';
import CharacterListItem from './CharacterListItem.vue';

export default defineComponent({
  name: 'CharacterList',
  components: {
    ThePagination,
    CharacterListItem,
  },
  setup() {
    const {
      characters,
      info,
      fetch,
    } = useCharacter();

    const pageSize = 20;
    const filters: FilterCharacter = {} as FilterCharacter;

    fetch(1, filters);

    function changePage(page: number): void {
      fetch(page, filters);
    }

    return {
      pageSize,
      characters,
      infoCount: computed(() => info.value?.getCount()),
      changePage,
    };
  },
});
</script>
<style lang="sass" scoped>
.CharacterList
  text-align: center

  &__list
    display: flex
    flex-wrap: wrap
    justify-content: flex-start
    column-gap: 20px
    row-gap: 20px

  &__pagination
    margin-top: auto

</style>
