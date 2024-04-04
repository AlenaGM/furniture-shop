<template>
  <form
    class="subscribe-form"
    id="subscribeForm"
    name="subscribeForm"
    @submit.prevent="onSubscribe"
  >
    <input
      type="text"
      placeholder="your@email.com"
      name="email"
      class="input subscribe-form__input"
      :style="{ backgroundColor: bgInput, color: colorText }"
    />
    <ui-button :color="colorButton || 'dark-primary'">Sign Up</ui-button>
  </form>
  <teleport to="body">
    <modal-content
      :open="isModalOpen"
      @close="isModalOpen = false"
      title="Thank you for subscribing! Your registration is complete."
    >
    </modal-content>
  </teleport>
</template>

<script setup>
import uiButton from "@/components/ui/Button.vue";
import ModalContent from "@/components/ui/Modal.vue";
import { ref } from "vue";
import api from "@/api";

const isModalOpen = ref(false);

const onSubscribe = async () => {
  //const userEmail = document.forms.subscribeForm.elements.email.value;
  await api.postNewsletter();
  isModalOpen.value = true;
};

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
  max-width: 630px;
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
