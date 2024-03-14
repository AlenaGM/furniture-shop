<template>
  <div class="hero">
    <InfoBlock
      pageTitle="Luxury homeware for people who love timeless design
    quality"
      :description="`Shop the new ${season} ${year} collection today`"
      link="/products"
      colorLink="light-gray"
      mobilePadding
      class="hero-info"
    />
    <div class="hero-image">
      <img src="/img/hero.jpg" alt="room" />
    </div>
  </div>
</template>

<script setup>
import InfoBlock from "@/components/InfoBlock.vue";

const date = new Date();
const year = date.getFullYear() || "";
const month = date.getMonth();

let season;

if (month === (11 || 0 || 1)) season = "Spring";
else if (month === (2 || 3 || 4)) season = "Spring";
else if (month === (5 || 6 || 7)) season = "Summer";
else if (month === (8 || 9 || 10)) season = "Fall";
else season = "";
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
  @media screen and (max-width: 768px) {
    display: block;
    height: auto;
    background: transparent;
    padding: 0;
  }
  &-info {
    min-height: 444px;
    @media screen and (max-width: 768px) {
      position: relative;
      min-height: auto;
      text-align: center;
    }
  }
  &-image {
    img {
      max-width: 100%;
      display: none;
      @media screen and (max-width: 768px) {
        display: block;
      }
    }
    @media screen and (max-width: 768px) {
      position: relative;
    }
  }
}
</style>
