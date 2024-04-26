<template>
  <form
    class="subscribe_form"
    ref="newsRef"
    id="subscribeForm"
    name="subscribeForm"
    @submit.prevent="onSubscribe"
  >
    <input
      type="text"
      placeholder="your@email.com"
      name="email"
      maxlength="254"
      class="subscribe_form__input input"
      v-model="valid.emailField.$model"
      @input="updateValue"
      :style="{ backgroundColor: bgInput, color: colorText }"
    />
    <ui-button
      :color="colorButton || 'dark-primary'"
      :disabled="isButtonDisabled"
      >Sign Up</ui-button
    >
  </form>
  <div class="subscribe_form__error">
    <Transition v-if="valid.emailField.$error">
      <span class="form_error">{{ valid.emailField.$errors[0].$message }}</span>
    </Transition>
  </div>
  <teleport to="body">
    <modal-content
      :open="isModalOpen"
      @close="isModalOpen = false"
      title="Thank you for subscribing! "
      >Your registration for newsletter is now complete.</modal-content
    >
  </teleport>
</template>

<script setup>
import { ref, computed } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { helpers, required, email } from "@vuelidate/validators";
import uiButton from "@/components/ui/Button.vue";
import ModalContent from "@/components/ui/Modal.vue";

const emailField = ref("");
const isModalOpen = ref(false);

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

const rules = computed(() => ({
  emailField: {
    required: helpers.withMessage(
      `Please provide a valid e-mail address`,
      required
    ),
    email: helpers.withMessage(`Please provide a valid e-mail address`, email),
  },
}));

const valid = useVuelidate(rules, {
  emailField,
});

const isButtonDisabled = computed(() => {
  return emailField.value === "" || valid.value.$error;
});

const onSubscribe = () => {
  valid.value.$touch();
  if (valid.value.$error) return;
  console.log("Subscribe - OK!");
  isModalOpen.value = true;
  resetForm();
};

const resetForm = () => {
  emailField.value = "";
  valid.value.$reset();
};
</script>

<style lang="scss" scoped>
.subscribe_form {
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
  &__error {
    margin-top: 12px;
    color: var(--red);
  }
}
</style>
