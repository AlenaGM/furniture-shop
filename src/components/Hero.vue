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
  background: url("/img/hero.jpg") 0 0 / cover no-repeat;
  min-height: calc(100vh - 168px);
  height: 744px;
  display: grid;
  align-content: space-around;
  justify-items: end;
  margin-bottom: 40px;
  grid-template-columns: repeat(2, 1fr);
  padding: 40px 80px 80px;
  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
  @media screen and (max-width: 768px) {
    display: block;
    min-height: auto;
    height: auto;
    background: transparent;
    padding: 20px 24px 40px;
  }
  &-info {
    min-height: 440px;
    max-width: none;
    width: 100%;
    grid-column: 2;
    @media screen and (max-width: 1024px) {
      grid-column: 1;
    }
    @media screen and (max-width: 768px) {
      position: relative;
      text-align: center;
      min-height: auto;
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
