<template>
  <div
    class="infoblock"
    :style="{ backgroundColor: background }"
    :class="{ 'infoblock--mobile-padding': mobilePadding }"
  >
    <div>
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
      :to="link || '/furniture-shop/products'"
    >
      {{ btnText }}
    </ui-button>
  </div>
</template>

<script setup>
import uiButton from "@/components/ui/Button.vue";

const props = defineProps({
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
    default: "",
  },
  colorDescription: {
    type: String,
    default: "#5b5676",
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
  background: var(--white);
  min-height: 444px;
  max-width: 640px;
  padding: 48px 64px;
  display: grid;
  align-content: space-between;
  justify-items: start;
  @media screen and (max-width: 1024px) {
    padding: 24px 32px;
  }
  @media screen and (max-width: 767px) {
    min-height: 282px;
    max-width: none;
    padding: 24px 0px;
  }
  div {
    margin: 0 0 20px 0;
    @media screen and (max-width: 767px) {
      margin-bottom: 0 0 32px 0;
    }
  }
  &__title {
    font-family: var(--clash);
    font-size: 32px;
    font-weight: 400;
    line-height: 140%;
    margin: 0 0 20px 0;
    @media screen and (max-width: 767px) {
      font-size: 20px;
    }
  }
  &__description {
    color: var(--black-coral);
    font-size: 18px;
    font-family: var(--satoshi);
    line-height: 150%;
  }
  &--mobile-padding {
    @media screen and (max-width: 767px) {
      padding: 24px;
    }
  }
}
</style>
