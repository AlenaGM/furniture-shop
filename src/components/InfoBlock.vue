<template>
  <div
    class="infoblock"
    :style="{ backgroundColor: background }"
    :class="{ 'infoblock--mobile-padding': mobilePadding }"
  >
    <div>
      <h1 class="infoblock__title" :style="{ color: colorTitle }">
        {{ pageTitle }}
      </h1>
      <h2 class="infoblock__title" :style="{ color: colorTitle }">
        {{ title }}
      </h2>
      <span
        class="infoblock__description"
        :style="{ color: colorDescription }"
        >{{ description }}</span
      >
    </div>
    <ui-button
      :mobileFullWidth="true"
      :color="colorLink || 'secondary'"
      type="link"
      :to="link || '/products'"
    >
      {{ btnText }}
    </ui-button>
  </div>
</template>

<script setup>
import uiButton from "@/components/ui/Button.vue";

const props = defineProps({
  pageTitle: {
    type: String,
    required: false,
  },
  title: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: false,
  },
  btnText: {
    type: String,
    default: "View collection",
  },
  link: {
    type: String,
    required: false,
  },
  colorTitle: {
    type: String,
    default: "#2a254b",
  },
  colorDescription: {
    type: String,
    default: "#505977",
  },
  colorLink: {
    type: String,
    required: false,
  },
  background: {
    type: String,
    default: "#fff",
  },
  mobilePadding: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss" scoped>
.infoblock {
  min-height: 440px;
  max-width: 640px;
  padding: 48px 64px;
  display: grid;
  align-content: space-between;
  justify-items: center;
  @media screen and (max-width: 1024px) {
    padding: 24px 32px;
  }
  @media screen and (max-width: 768px) {
    min-height: 300px;
    padding: 24px 0px;
    max-width: none;
  }
  div {
    margin: 0 0 48px 0;
    @media screen and (max-width: 768px) {
      margin: 0 0 32px 0;
    }
  }
  h1 {
    max-width: 480px;
  }
  &__description {
    color: var(--color-text);
    font-family: var(--font-family);
    font-size: 18px;
    line-height: 150%;
    @media screen and (max-width: 768px) {
      font-size: 16px;
    }
  }
  &--mobile-padding {
    @media screen and (max-width: 768px) {
      padding: 24px;
    }
  }
}
</style>
