<template>
  <div class="hero-info" :style="{ backgroundColor: background }">
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
    <a :href="link" class="hero-info-link" :style="{ color: colorLink }"
      >View collection</a
    >
  </div>
</template>

<script setup>
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
    default: "#5b5676",
  },
  background: {
    type: String,
    default: "#fff",
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
    &-link {
      color: var(--space);
      text-decoration: none;
      width: 170px;
      height: 56px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: rgba(249, 249, 249, 0.15);
      cursor: pointer;
      &:hover {
        background: rgba(249, 249, 249, 0.3);
      }
    }
  }
}
</style>
