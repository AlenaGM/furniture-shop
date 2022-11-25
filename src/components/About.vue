<template>
  <div class="about">
    <h3 class="about__title">What makes our brand different</h3>
    <div class="about-elements">
      <div class="about-element" v-for="(element, i) of about" :key="i">
        <img
          :src="element.img"
          :alt="element.title"
          class="about-element__img"
        />
        <h4 class="about-element__title">{{ element.title }}</h4>
        <span class="about-element__description">
          {{ element.description }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const about = [
  {
    img: "/svg/about-delivery.svg",
    title: "Next day as standard",
    description: "Order before 3pm and get your order the next day as standard",
  },
  {
    img: "/svg/about-checkmark.svg",
    title: "Made by true artisans",
    description:
      "Handmade crafted goods made with real passion and craftmanship",
  },
  {
    img: "/svg/about-purchase.svg",
    title: "Unbeatable prices",
    description:
      "For our materials and quality you won’t find better prices anywhere",
  },
  {
    img: "/svg/about-sprout.svg",
    title: "Recycled packaging",
    description:
      "We use 100% recycled to ensure our footprint is more manageable",
  },
];
</script>

<style lang="scss" scoped>
.about {
  padding: 80px 80px 130px 80px;
  @media screen and (max-width: 767px) {
    padding: 48px 0;
  }
  &__title {
    text-align: center;
    color: var(--dark-primary);
    font-family: var(--clash);
    font-size: 24px;
    font-weight: 400;
    line-height: 34px;
    margin: 0 0 84px 0;
    @media screen and (max-width: 767px) {
      text-align: left;
      font-size: 20px;
      line-height: 28px;
      margin: 0 0 36px 0;
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
    @media screen and (max-width: 767px) {
      grid-template-columns: 1fr;
    }
  }
  &-element {
    color: var(--dark-primary);
    background: var(--light-gray);
    padding: 48px;
    @media screen and (max-width: 767px) {
      padding: 36px 24px;
    }
    &__img {
      display: block;
      margin-bottom: 12px;
    }
    &__title {
      margin: 0 0 12px 0;
      font-family: var(--clash);
      font-size: 20px;
      font-weight: 400;
      line-height: 28px;
    }
    &__description {
      font-size: 16px;
      line-height: 24px;
    }
  }
}
</style>
