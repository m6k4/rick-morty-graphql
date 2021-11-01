<template>
  <div class="CharacterDescriptionModal"
    @click.prevent="handleClickOutside"
  >
    <div id="modal"
      class="CharacterDescriptionModal__modal"
    >
      <div
        id="content"
        class="modal__content"
      >
        <i
          id="content__icon"
          class="fa fa-times CharacterDescriptionModal__icon"
          @click="closeModal"
        />
        modal window
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, getCurrentInstance } from 'vue';

export default defineComponent({
  name: 'CharacterDescriptionModal',

  setup() {
    const { emit } = getCurrentInstance();

    function closeModal(): void {
      emit('closeModal');
    }

    function handleClickOutside(event: Event) {
      if (event.target instanceof HTMLElement && (event.target.id !== 'content' && event.target.id !== 'content__icon')) {
        closeModal();
      }
    }
    return {
      handleClickOutside,
      closeModal,
    };
  },
});
</script>
<style lang="sass" scoped>
.CharacterDescriptionModal
  background: rgba(0, 0, 0, 0.7)
  bottom: 0
  left: 0
  overflow: scroll
  position: fixed
  right: 0
  top: 0
  z-index: 20px

  &__modal
    background: #62656F
    border-radius: 10px
    display: flex
    flex-direction: column
    justify-content: space-between
    height: 360px
    width: 300px
    position: absolute
    right: 50%
    top: 50%
    transform: translate(50%,-50%)
    z-index: 21
    border: 5px solid $main-color
    box-shadow: 0px 0px 8px 3px lighten(#4FA639, 5%)
    background-image: url('~@/assets/images/background.jpg')

    .modal__content
      height: 100%
      padding: 60px 40px

  &__icon
    font-size: 14px
    height: 14px
    position: absolute
    right: 8px
    text-align: center
    top: 8px

  &__icon:hover
    color: $main-color
    cursor: pointer

</style>
