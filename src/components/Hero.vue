<template>
  <div class="hero">
    <InfoBlock
      title="Luxury homeware for people who love timeless design quality"
      description="Shop the new Spring 2022 collection today"
      link="/products"
      colorLink="light-gray"
      class="hero-info"
    />
    <div class="hero-image">
      <img src="/img/hero.jpg" alt="room" />
    </div>
  </div>
</template>

<script setup>
import InfoBlock from "@/components/InfoBlock.vue";
</script>

<style lang="scss" scoped>
.hero {
  background: url("/img/hero.jpg");
  height: 704px;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 80px;
  @media screen and (max-width: 767px) {
    display: block;
    height: auto;
    background: transparent;
    padding: 0;
  }
  &-info {
    @media screen and (max-width: 767px) {
      position: relative;
      margin: 0 24px;
    }
  }
  &-image {
    img {
      max-width: 100%;
      display: none;
      @media screen and (max-width: 767px) {
        display: block;
        width: 100%;
      }
    }
    @media screen and (max-width: 767px) {
      position: relative;
    }
  }
}
</style>
