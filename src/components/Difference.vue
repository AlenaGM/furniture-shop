<template>
  <div class="difference">
    <h3 class="difference__title">What makes our brand different</h3>
    <div class="difference-elements">
      <div class="difference-element" v-for="(element, i) of usp" :key="i">
        <img
          :src="element.img"
          :alt="element.title"
          class="difference-element__img"
        />
        <h4 class="difference-element__title">{{ element.title }}</h4>
        <span class="difference-element__description text-sm">
          {{ element.description }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
const usp = [
  {
    img: "/svg/usp-delivery.svg",
    title: "Next day as standard",
    description: "Order before 3pm and get your order the next day as standard",
  },
  {
    img: "/svg/usp-checkmark.svg",
    title: "Made by true artisans",
    description:
      "Handmade crafted goods made with real passion and craftmanship",
  },
  {
    img: "/svg/usp-purchase.svg",
    title: "Unbeatable prices",
    description:
      "For our materials and quality you won’t find better prices anywhere",
  },
  {
    img: "/svg/usp-sprout.svg",
    title: "Recycled packaging",
    description:
      "We use 100% recycled to ensure our footprint is more manageable",
  },
];
</script>

<style lang="scss" scoped>
.difference {
  margin: var(--section-gap);
  @media screen and (max-width: 768px) {
    margin: var(--section-gap-mobile);
  }
  &__title {
    text-align: center;
    @media screen and (max-width: 768px) {
      text-align: left;
    }
  }
  &-elements {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-content: space-between;
    gap: 20px;
    @media screen and (max-width: 1150px) {
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
    }
    @media screen and (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }
  &-element {
    color: var(--dark-primary);
    background: var(--light-gray);
    padding: 24px 32px;
    @media screen and (max-width: 768px) {
      padding: 24px;
    }
    &__img {
      display: block;
      margin-bottom: 12px;
    }
  }
}
</style>
