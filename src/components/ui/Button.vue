<template>
  <button
    v-if="type === button"
    class="btn"
    :class="[
      'btn',
      {
        'btn--primary': color === 'primary',
        'btn--secondary': color === 'secondary',
        'btn--lightgray': color === 'lightgray',
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
        'btn--primary': color === 'primary',
        'btn--secondary': color === 'secondary',
        'btn--lightgray': color === 'lightgray',
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
    default: "primary",
  },
  type: {
    type: String,
    default: "button",
  },
  to: {
    type: String,
    required: false,
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
  cursor: pointer;
  border: none;
  font-size: 16px;
  height: 56px;
  &:hover {
    opacity: 0.8;
  }
  &--primary {
    color: var(--white);
    background: var(--space);
  }
  &--secondary {
    color: var(--white);
    background: rgba(249, 249, 249, 0.15);
  }
  &--lightgray {
    color: var(--space);
    background: #f9f9f9;
  }
}
</style>
