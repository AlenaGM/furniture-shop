<template>
  <div
    class="hero-info"
    :style="{ backgroundColor: background }"
    :class="{ 'hero-info--mobile-padding': mobilePadding }"
  >
    <div class="hero-info-text">
      <h2 class="hero-info__title" :style="{ color: colorTitle }">
        {{ title }}
      </h2>
      <span
        class="hero-info__description"
        :style="{ color: colorDescription }"
        >{{ description }}</span
      >
    </div>
    <ui-button
      :mobileFullWidth="true"
      :color="colorLink || 'secondary'"
      type="link"
      to="/"
    >
      View collection
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

<style lang="scss">
.hero {
  &-info {
    background: var(--white);
    max-width: 630px;
    padding: 50px 60px;
    min-height: 444px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    @media screen and (max-width: 767px) {
      padding: 47px 0 32px 0;
      min-height: 0;
    }
    &-text {
      @media screen and (max-width: 767px) {
        margin-bottom: 32px;
      }
    }
    &__title {
      font-family: var(--clash);
      font-size: 32px;
      font-weight: 400;
      line-height: 45px;
      margin: 0 0 20px 0;
    }
    &__description {
      color: var(--black-coral);
      font-size: 18px;
      font-family: var(--satoshi);
      line-height: 27px;
    }
    &--mobile-padding {
      @media screen and (max-width: 767px) {
        padding: 36px 32px;
      }
    }
  }
}
</style>
