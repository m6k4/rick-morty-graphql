<template>
  <div class="CharacterList">
    <div class="CharacterList__list">
      <CharacterListItem
        v-for="character in characters"
        :key="character.getId()"
        :character="character"
        @click="toggleModal"
      />
    </div>
    <div class="CharacterList__pagination">
      <ThePagination
        :total="infoCount"
        :page-size="pageSize"
        @current-change="changePage"
      />
    </div>
    <CharacterDescriptionModal
      v-if="isModalVisible"
      @closeModal="toggleModal"
    />
  </div>
</template>
<script lang="ts">
import {
  defineComponent, computed, ref, Ref,
} from 'vue';
import useCharacter from '../composable/useCharacter';
import { FilterCharacter } from '@/types/types';
import ThePagination from '../../common/ThePagination.vue';
import CharacterListItem from './CharacterListItem.vue';
import CharacterDescriptionModal from './CharacterDescriptionModal.vue';

export default defineComponent({
  name: 'CharacterList',
  components: {
    ThePagination,
    CharacterListItem,
    CharacterDescriptionModal,
  },
  setup() {
    const {
      characters,
      info,
      fetch,
    } = useCharacter();

    const isModalVisible: Ref<boolean> = ref(false);
    const pageSize = 20;
    const filters: FilterCharacter = {} as FilterCharacter;

    fetch(1, filters);

    function changePage(page: number): void {
      fetch(page, filters);
    }

    function toggleModal(): void {
      isModalVisible.value = !isModalVisible.value;
    }
    return {
      isModalVisible,
      pageSize,
      characters,
      infoCount: computed(() => info.value?.getCount()),
      toggleModal,
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
