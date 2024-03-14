<template>
  <button
    v-if="type === 'button'"
    class="btn"
    :class="[
      'btn',
      {
        'btn--dark-primary': color === 'dark-primary',
        'btn--secondary': color === 'secondary',
        'btn--light-gray': color === 'light-gray',
        'btn--white': color === 'white',
        'btn--fullwidth': mobileFullWidth,
      },
    ]"
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
        'btn--dark-primary': color === 'dark-primary',
        'btn--secondary': color === 'secondary',
        'btn--light-gray': color === 'light-gray',
        'btn--white': color === 'white',
        'btn--fullwidth': mobileFullWidth,
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
});
</script>

<style lang="scss" scoped>
.btn {
  padding: 0 32px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  border: none;
  font-size: 16px;
  height: 56px;
  min-width: 122px;
  white-space: nowrap;
  cursor: pointer;
  transition: opacity 0.25s ease;
  @media screen and (max-width: 768px) {
    padding: 0 15px;
    font-size: 15px;
  }
  @media (any-pointer: fine) {
    &:hover {
      opacity: 0.8;
      transition: opacity 0.25s ease;
    }
  }
  &--dark-primary {
    color: var(--white);
    background: var(--dark-primary);
  }
  &--secondary {
    color: var(--white);
    background: #f9f9f926;
  }
  &--light-gray {
    color: var(--dark-primary);
    background: var(--light-gray);
  }
  &--white {
    color: var(--dark-primary);
    background: var(--white);
  }
  &--fullwidth {
    @media screen and (max-width: 768px) {
      width: 100%;
    }
  }
}
</style>
