<template>
  <div class="CharacterList">
    <TheLoading v-if="isLoading" />
    <div
      v-else
      class="CharacterList__list"
    >
      <CharacterListItem
        v-for="character in characters"
        :key="character.getId()"
        :character="character"
        @click="toggleModal"
      />
      <div class="list__pagination">
        <ThePagination
          :total="infoCount"
          :page="currentPage"
          :page-size="pageSize"
          @current-change="changePage"
        />
      </div>
    </div>
    <CharacterDescriptionModal
      v-if="isModalVisible"
      @closeModal="toggleModal"
    />
  </div>
</template>
<script lang="ts">
import {
  defineComponent, computed, ref,
} from 'vue';
import useCharacter from '../composable/useCharacter';
import { FilterCharacter } from '@/types/types';
import ThePagination from '../../common/ThePagination.vue';
import CharacterListItem from './CharacterListItem.vue';
import CharacterDescriptionModal from './CharacterDescriptionModal.vue';
import TheLoading from '@/common/TheLoading.vue';

export default defineComponent({
  name: 'CharacterList',
  components: {
    ThePagination,
    CharacterListItem,
    CharacterDescriptionModal,
    TheLoading,
  },
  setup() {
    const {
      characters,
      info,
      isLoading,
      fetch,
    } = useCharacter();

    const isModalVisible = ref<boolean>(false);
    const pageSize = 20;
    const filters: FilterCharacter = {} as FilterCharacter;
    const currentPage = ref<number>(1);

    fetch(1, filters);

    function changePage(page: number): void {
      currentPage.value = page;
      fetch(page, filters);
    }

    function toggleModal(): void {
      isModalVisible.value = !isModalVisible.value;
    }
    return {
      isModalVisible,
      pageSize,
      characters,
      isLoading,
      currentPage,
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
    justify-content: center
    column-gap: 20px
    row-gap: 20px

  &__list__pagination
    margin-top: auto

</style>
