<template>
  <div class="hero">
    <InfoBlock
      pageTitle="Luxury homeware for people who love timeless design
    quality"
      :description="`Shop the new ${season} ${year} collection today`"
      link="/products"
      colorLink="light-gray"
      class="hero_info"
    />
    <div class="hero_image">
      <img src="/img/hero.webp" alt="room" />
    </div>
  </div>
</template>

<script setup>
import InfoBlock from "@/components/InfoBlock.vue";

const date = new Date();
const year = date.getFullYear() || "";
const month = date.getMonth();

let season;

switch (month) {
  case 0:
  case 10:
  case 11:
    season = "Winter";
    break;
  case 1:
  case 2:
  case 3:
    season = "Spring";
    break;
  case 4:
  case 5:
  case 6:
    season = "Summer";
    break;
  case 7:
  case 8:
  case 9:
    season = "Fall";
    break;
  default:
    season = "";
}
</script>

<style lang="scss" scoped>
.hero {
  background: url("/img/hero.webp") 0 0 / cover no-repeat;
  min-height: 704px;
  display: grid;
  align-content: space-around;
  justify-items: end;
  margin-bottom: 80px;
  @media screen and (max-width: 1024px) {
    display: block;
    background: transparent;
    min-height: auto;
    margin: 20px 24px 40px;
  }
  &_info {
    min-height: 440px;
    max-width: none;
    min-width: 640px;
    grid-column: 2;
    @media screen and (max-width: 1024px) {
      position: relative;
      justify-items: center;
      text-align: center;
      min-height: auto;
      min-width: auto;
      width: 100%;
      margin: var(--section-gap-mobile);
    }
    @media screen and (max-width: 768px) {
      margin: 0;
    }
  }
  &_image {
    img {
      display: none;

      @media screen and (max-width: 1024px) {
        display: block;
      }
    }
    @media screen and (max-width: 1024px) {
      position: relative;
    }
  }
}
</style>
