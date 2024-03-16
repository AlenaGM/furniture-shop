<template>
  <form class="subscribe-form">
    <input
      type="text"
      placeholder="your@email.com"
      class="input subscribe-form__input"
      :style="{ backgroundColor: bgInput, color: colorText }"
    />
    <ui-button :color="colorButton || 'dark-primary'">Sign Up</ui-button>
  </form>
</template>

<script setup>
import uiButton from "@/components/ui/Button.vue";

const props = defineProps({
  bgInput: {
    type: String,
    required: false,
  },
  colorButton: {
    type: String,
    required: false,
  },
  colorText: {
    type: String,
    required: false,
  },
});
</script>

<style lang="scss" scoped>
.subscribe-form {
  display: flex;
  &__input {
    flex-grow: 1;
  }

  @media screen and (max-width: 349px) {
    flex-direction: column;
  }

  &__input {
    @media screen and (max-width: 349px) {
      margin-bottom: 12px;
    }
  }
}
</style>
