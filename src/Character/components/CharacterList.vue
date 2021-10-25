<template>
  <div class="CharacterList">
    <pre>
      {{ characters }}
    </pre>
    <el-pagination background layout="prev, pager, next"
                   hide-on-single-page
                   :total="infoCount"
                   :page-size="pageSize"
                   @current-change="changePage"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue';
import useCharacter from '../composable/useCharacter';
import { FilterCharacter } from '@/types/types';

export default defineComponent({
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
