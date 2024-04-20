<template>
  <div class="contact">
    <h1 class="contact_title">Get in Touch</h1>
    <form class="contact_form form" ref="formRef" @submit.prevent="submitForm">
      <div>
        <div class="form_input">
          <input
            class="input"
            type="text"
            name="user_name"
            placeholder="Name"
            maxlength="71"
            v-model="valid.nameField.$model"
            @input="updateValue"
          />
          <Transition v-if="valid.nameField.$error">
            <span class="form_error">
              {{ valid.nameField.$errors[0].$message }}
            </span>
          </Transition>
        </div>
        <div class="form_input">
          <input
            class="input"
            type="email"
            name="user_email"
            maxlength="254"
            placeholder="E-mail (optional)"
            v-model="valid.emailField.$model"
            @input="updateValue"
          />
          <Transition v-if="valid.emailField.$error">
            <span class="form_error">{{
              valid.emailField.$errors[0].$message
            }}</span>
          </Transition>
        </div>
      </div>

      <div class="form_textarea">
        <textarea
          class="input"
          name="message"
          maxlength="1001"
          placeholder="Message"
          v-model="valid.messageField.$model"
          @input="updateValue"
        />
        <Transition v-if="valid.messageField.$error">
          <span class="form_error">{{
            valid.messageField.$errors[0].$message
          }}</span>
        </Transition>
      </div>
      <div class="form_button">
        <ui-button
          type="button"
          :mobileFullWidth="true"
          :disabled="isButtonDisabled"
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
      title="An error occurred!"
    >
      Your message hasn't been sent. Please try again later!
    </modal-content>
    <modal-content
      :open="isModalOpen"
      @close="isModalOpen = false"
      v-else
      title="Your message has been sent!"
    >
      <div>
        <p>Thank you! I will try to answer within 2-3 hours</p>
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
      `That was a long name. Any diminutive?`,
      maxLength(70)
    ),
  },
  emailField: {
    email: helpers.withMessage(
      `E-mail is optional, but please provide a valid e-mail address, if you want an answer. I will never share your personal details with anyone`,
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
      minLength(4)
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

const isButtonDisabled = computed(() => {
  return (
    nameField.value === "" || messageField.value === "" || valid.value.$error
  );
});

const submitForm = async () => {
  valid.value.$touch();
  if (valid.value.$error) return;
  sendEmail();
  resetForm();
};

const formRef = ref(null);

const myKey = import.meta.env.VITE_KEY;

const sendEmail = () => {
  emailjs
    .sendForm(
      "contact_service",
      "template_fokmhcv",
      formRef.value,
      myKey
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
  &_title {
    grid-column: 2;
    grid-row: 1;
    padding: 80px 0 32px;
    text-align: center;
    @media screen and (max-width: 768px) {
      padding: 40px 0 16px;
    }
  }
  &_form {
    grid-column: 2;
    grid-row: 2;
    width: 100%;
    font-family: var(--second-family);
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
    text-decoration: none;
    color: var(--dark-primary);
    @media screen and (max-width: 768px) {
      font-size: 16px;
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
  &_input,
  &_textarea {
    display: flex;
    flex-direction: column;
    input,
    textarea {
      text-decoration: none;
      color: var(--dark-primary);
      width: 100%;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      &:focus {
        outline: none;
      }
    }
  }
  &_textarea {
    margin: 20px 0 0;
    textarea {
      min-height: 240px;
      resize: vertical;
      padding: 20px 32px;
      @media screen and (max-width: 768px) {
        padding: 20px 16px;
      }
    }
  }
  &_button {
    justify-content: center;
    button {
      margin: var(--section-gap);
      //align-items: center;
      @media screen and (max-width: 560px) {
        margin: var(--section-gap-mobile);
      }
    }
  }
  &_error {
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
