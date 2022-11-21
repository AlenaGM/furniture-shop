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
    <Button :color="colorLink || 'secondary'" type="link" to="/">
      View collection
    </Button>
  </div>
</template>

<script setup>
import Button from "@/components/ui/Button.vue";

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
  }
}
</style>
