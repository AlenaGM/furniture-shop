<template>
  <button
    v-if="type === 'submit' || 'button'"
    class="btn"
    :class="[
      'btn',
      {
        'btn__dark-primary': color === 'dark-primary',
        btn__secondary: color === 'secondary',
        'btn__light-gray': color === 'light-gray',
        btn__white: color === 'white',
        btn__fullwidth: 'mobileFullWidth',
      },
    ]"
    :disabled="disabled"
  >
    <slot />
  </button>
  <router-link
    v-else
    :to="to"
    class="btn"
    :class="[
      'btn',
      {
        'btn__dark-primary': color === 'dark-primary',
        btn__secondary: color === 'secondary',
        'btn__light-gray': color === 'light-gray',
        btn__white: color === 'white',
        btn__fullwidth: 'mobileFullWidth',
      },
    ]"
  >
    <slot />
  </router-link>
</template>

<script setup>
const props = defineProps({
  background: {
    type: String,
    required: false,
  },
  color: {
    type: String,
    default: "dark-primary",
  },
  type: {
    type: String,
    default: "button",
  },
  to: {
    type: String,
    required: false,
  },
  mobileFullWidth: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    required: false,
  },
});
</script>

<style lang="scss" scoped>
.btn {
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 56px;
  min-width: 122px;
  padding: 0 32px;
  border: none;
  font-size: 16px;
  font-family: var(--font-family);
  text-decoration: none;
  white-space: nowrap;
  cursor: pointer;
  transition: opacity 0.3s ease;
  @media screen and (max-width: 768px) {
    padding: 0 15px;
    font-size: 15px;
  }
  @media (any-pointer: fine) {
    &:hover {
      opacity: 0.6;
      transition: opacity 0.3s ease;
    }
  }
  &__dark-primary {
    color: var(--white);
    background: var(--dark-primary);
  }
  &__secondary {
    color: var(--white);
    background: #f9f9f926;
  }
  &__light-gray {
    color: var(--dark-primary);
    background: var(--light-gray);
  }
  &__white {
    color: var(--dark-primary);
    background: var(--white);
  }
  &__fullwidth {
    @media screen and (max-width: 767px) {
      width: 100%;
    }
  }
  &:disabled {
    opacity: 0.6;
    transition: opacity 0.3s ease;
    pointer-events: none;
  }
}
</style>
