<template>
  <div class="CharacterDescriptionModal"
    @click="handleClickOutside"
  > TEST12434
    <div id="modal"
      class="CharacterDescriptionModal__modal"
    >
      <div class="modal__content">
        <i class="fa fa-times CharacterDescriptionModal__icon"
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

    function handleClickOutside(event) {
      if (event.target instanceof HTMLElement && event.target.parentElement.id !== 'modal') {
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
  background: rgba(0, 0, 0, 0.5)
  bottom: 0
  left: 0
  opacity: 0
  overflow: scroll
  position: fixed
  right: 0
  top: 0
  z-index: 20

  &__modal
    background: #62656F
    border-radius: 10px
    display: flex
    flex-direction: column
    justify-content: space-between
    min-height: 220px
    min-width: 350px
    position: absolute
    right: 50%
    top: 50%
    transform: translate(50%,-50%)
    z-index: 21

    .modal__content
      padding: 60px 40px

  &__icon
    font-size: 14px
    height: 14px
    position: absolute
    right: 2px
    text-align: center
    top: 18px

  &__icon:hover
    color: $main-color
    cursor: pointer

</style>
