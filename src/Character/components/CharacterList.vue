<template>
  <div class="CharacterList">
    HELLO
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import useCharacter from '../composable/useCharacter';

export default defineComponent({
  setup() {
    const {
      allCharacters,
      fetch,
    } = useCharacter();

    fetch([1]);

    console.log(allCharacters.value, 'TEST');
  },
});
</script>
