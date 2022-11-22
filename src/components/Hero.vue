<template>
  <div class="hero">
    <HeroInfo
      title="Luxury homeware for people who love timeless design quality"
      description="Shop the new Spring 2022 collection today"
      link="#"
      colorLink="lightgray"
    />
    <img class="hero-info__image" src="/img/hero.jpg" alt="" />
  </div>
</template>

<script setup>
import HeroInfo from "@/components/HeroInfo.vue";
</script>

<style lang="scss">
.hero {
  background: url("/img/hero.jpg");
  height: 704px;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 80px;
  @media screen and (max-width: 767px) {
    display: block;
    height: auto;
    background: transparent;
    padding-right: 0;
  }
  &-info__image {
    width: 100%;
  }
}
</style>
