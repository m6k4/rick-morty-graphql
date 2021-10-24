<template>
  <div class="about">
   <CharacterList />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CharacterList from '../Character/components/CharacterList.vue';

export default defineComponent({
  components: {
    CharacterList,
  },
});
</script>
