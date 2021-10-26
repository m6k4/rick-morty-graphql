<template>
  <div class="CharacterListItem">
    <div>
      <img class="CharacterListItem__img"
        :src="character.getImageUrl()"
      />
    </div>
    <section class="CharacterListItem__description">
      <div class="description__content">
        <label class="content--title">
          name:
        </label>
        <label class="content--value">
          {{character.getName()}}
        </label>
      </div>
      <div class="description__content">
        <label class="content--title">
          status:
        </label>
        <label class="content--value">
          {{character.getStatus()}}
        </label>
      </div>
       <div class="description__content">
        <label class="content--title">
          gender:
        </label>
        <label class="content--value">
            {{character.getGender()}}
        </label>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import Character from '../types/Character';

export default defineComponent({
  name: 'CharacterListItem',
  props: {
    character: {
      type: Object as PropType<Readonly<Character>>,
      default: () => ({}),
    },
  },
});
</script>
<style lang="sass" scoped>
.CharacterListItem
  flex: 1 0 10%
  min-width: 250px
  height: 400px
  display: flex
  flex-direction: column
  border-radius: 16px
  background: darken($card-color, 5%)
  border: 5px solid $main-color
  box-shadow: 0 0 0.6em lighten(#efda53, 5%)

  &__img
    width: 100%
    border-radius: 10px 10px 0 0

  &__description
    margin-top: 40px
    display: flex
    flex-direction: column

  &__description__content
    display: flex
    justify-content: space-between

</style>
