<template>
  <form
    class="subscribe-form"
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
      class="input subscribe-form__input"
      v-model="valid.emailField.$model"
      @input="updateValue"
      :style="{ backgroundColor: bgInput, color: colorText }"
    />
    <ui-button :color="colorButton || 'dark-primary'">Sign Up</ui-button>
  </form>
  <div class="subscribe-form__error">
    <Transition v-if="valid.emailField.$error">
      <span class="form__error">{{
        valid.emailField.$errors[0].$message
      }}</span>
    </Transition>
  </div>
  <teleport to="body">
    <modal-content
      :open="isModalOpen"
      @close="isModalOpen = false"
      title="Thank you for subscribing!"
    >
      Your registration is complete.
    </modal-content>
  </teleport>
</template>

<script setup>
import uiButton from "@/components/ui/Button.vue";
import ModalContent from "@/components/ui/Modal.vue";
import { ref, computed } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { helpers, required, email } from "@vuelidate/validators";
import emailjs from "@emailjs/browser";

const isModalOpen = ref(false);
const emailField = ref("");

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

const onSubscribe = async () => {
  valid.value.$touch();
  if (valid.value.$error) return;
  sendSubscribe();
  resetForm();
};

const sendSubscribe = () => {
  emailjs
    .sendForm(
      "contact_service",
      "template_1guu3ga",
      newsRef.value,
      "0bqDQvGCW5ceicJh6"
    )
    .then(
      (result) => {
        console.log(result.text);
        isModalOpen.value = true;
      },
      (error) => {
        console.log(error.text);
        isModalOpen.value = true;
      }
    );
};

const newsRef = ref(null);

const resetForm = () => {
  emailField.value = "";
  valid.value.$reset();
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
  &__error {
    margin-top: 12px;
    color: var(--red);
  }
}
</style>
