<template>
  <div class="contact">
    <h1 class="contact__title">Get in Touch</h1>
    <form class="contact__form form" ref="formRef" @submit.prevent="submitForm">
      <div>
        <div class="form__input">
          <input
            type="text"
            name="user_name"
            placeholder="Name"
            maxlength="71"
            v-model="valid.nameField.$model"
            @input="updateValue"
          />
          <Transition v-if="valid.nameField.$error">
            <span class="form__error">
              {{ valid.nameField.$errors[0].$message }}
            </span>
          </Transition>
        </div>
        <div class="form__input">
          <input
            type="email"
            name="user_email"
            maxlength="254"
            placeholder="E-mail"
            v-model="valid.emailField.$model"
            @input="updateValue"
          />
          <Transition v-if="valid.emailField.$error">
            <span class="form__error">{{
              valid.emailField.$errors[0].$message
            }}</span>
          </Transition>
        </div>
      </div>

      <div class="form__textarea">
        <textarea
          name="message"
          maxlength="1001"
          placeholder="Your message"
          v-model="valid.messageField.$model"
          @input="updateValue"
        />
        <Transition v-if="valid.messageField.$error">
          <span class="form__error">{{
            valid.messageField.$errors[0].$message
          }}</span>
        </Transition>
      </div>
      <div class="form__button">
        <ui-button type="button" class="contact__btn" :mobileFullWidth="true"
          >Send</ui-button
        >
      </div>
    </form>
  </div>
  <teleport to="body">
    <modal-content
      :open="isModalOpen"
      @close="isModalOpen = false"
      v-if="isError"
      title="An error occurred. Please try again later!"
    >
    </modal-content>
    <modal-content
      :open="isModalOpen"
      @close="isModalOpen = false"
      v-else
      title="Your message has been sent!"
    >
      <div>
        <p>Thank you! I will try to answer within 2 hours</p>
      </div>
    </modal-content>
  </teleport>
</template>

<script setup>
import { ref, computed } from "vue";
import { useVuelidate } from "@vuelidate/core";
import {
  helpers,
  minLength,
  maxLength,
  required,
  email,
} from "@vuelidate/validators";
import emailjs from "@emailjs/browser";

import uiButton from "@/components/ui/Button.vue";
import ModalContent from "@/components/ui/Modal.vue";

const nameField = ref("");
const emailField = ref("");
const messageField = ref("");

const rules = computed(() => ({
  nameField: {
    required: helpers.withMessage(
      `I would like to know your name, if you do not mind`,
      required
    ),
    minLength: helpers.withMessage(
      `I would like to know your name, if you do not mind`,
      minLength(2)
    ),
    maxLength: helpers.withMessage(
      `That was long. Any diminutive?`,
      maxLength(70)
    ),
  },
  emailField: {
    required: helpers.withMessage(
      `Please provide a valid e-mail address, so that I can answer you. I will never share your personal details with anyone`,
      required
    ),
    email: helpers.withMessage(
      `Please provide a valid e-mail address, so that I can answer you. I will never share your personal details with anyone`,
      email
    ),
  },
  messageField: {
    required: helpers.withMessage(
      `Are you sure you do not want to write me anything?`,
      required
    ),
    minLength: helpers.withMessage(
      `I'm not sure I've got you well. Can you add more details?`,
      minLength(3)
    ),
    maxLength: helpers.withMessage(
      `That's too long! I've decided that the message couldn't be longer than 1000 characters`,
      maxLength(1000)
    ),
  },
}));

const isModalOpen = ref(false);
const isError = ref(false);

const valid = useVuelidate(rules, {
  nameField,
  emailField,
  messageField,
});

const submitForm = () => {
  valid.value.$touch();
  if (valid.value.$error) return;
  sendEmail();
  resetForm();
};

const formRef = ref(null);

const sendEmail = () => {
  emailjs
    .sendForm(
      "contact_service",
      "template_1guu3ga",
      formRef.value,
      "0bqDQvGCW5ceicJh6"
    )
    .then(
      (result) => {
        console.log(result.text);
        isError.value = false;
        isModalOpen.value = true;
      },
      (error) => {
        console.log(error.text);
        isError.value = true;
        isModalOpen.value = true;
      }
    );
};

const resetForm = () => {
  nameField.value = "";
  emailField.value = "";
  messageField.value = "";
  valid.value.$reset();
};
</script>

<style lang="scss" scoped>
.contact {
  background: var(--light-gray);
  &__title {
    grid-column: 2;
    grid-row: 1;
    padding: 80px 0 32px;
    text-align: center;
    @media screen and (max-width: 768px) {
      padding: 40px 0 16px;
    }
  }
  &__form {
    grid-column: 2;
    padding: 48px 64px;
    grid-row: 2;
    width: 100%;
    font-family: var(--second-family);
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
    text-decoration: none;
    color: var(--dark-primary);
    margin: var(--section-gap);
    @media screen and (max-width: 768px) {
      font-size: 16px;
      padding: 0 24px;
    }
  }
  &__btn {
    grid-column: 2;
    grid-row: 3;
    margin-top: 40px;
    justify-self: center;
    align-items: center;
    @media screen and (max-width: 560px) {
      margin-top: 20px;
    }
  }
}

.form {
  display: grid;
  position: relative;
  div {
    display: flex;
    gap: 20px;
    width: 100%;
    @media screen and (max-width: 768px) {
      flex-direction: column;
    }
  }
  &__input,
  &__textarea {
    display: flex;
    flex-direction: column;
    background-color: var(--white);
    input,
    textarea {
      padding: 24px 32px;
      font-family: inherit;
      font-weight: inherit;
      font-size: 18px;
      line-height: 150%;
      text-decoration: none;
      color: var(--dark-primary);
      width: 100%;
      border: none;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      &:focus {
        outline: none;
      }
    }
  }
  &__textarea {
    margin: 20px 0 0;
    align-items: center;
    textarea {
      min-height: 240px;
      resize: vertical;
    }
  }
  &__input {
    @media screen and (max-width: 768px) {
      width: 100%;
    }
  }
  &__button {
    justify-content: center;
  }
  &__error {
    margin-top: 4px;
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: var(--red);
    @media screen and (max-width: 768px) {
      font-size: 14px;
    }
  }
}
</style>
