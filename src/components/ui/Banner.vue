<template>
  <div class="banner" v-if="isOpenedBanner">
    <div class="banner__message" @click="onBannerClose">
      <img src="/svg/delivery.svg" />Free delivery on orders over 99€
    </div>
    <div class="banner__close"><img src="/svg/close-white.svg" /></div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const isOpenedBanner = ref(true);

const onBannerClose = () => {
  isOpenedBanner.value = false;
  document.querySelector(".banner").style.display = "none";
};
</script>

<style lang="scss" scoped>
.banner {
  background: var(--dark-primary);
  color: var(--white);
  display: grid;
  grid-template-columns: 24px 1fr 24px;
  padding: 6px 24px 6px;
  align-items: center;
  justify-items: center;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 24px;
    justify-items: stretch;
  }
  &__message {
    grid-column: 2;
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 14px;
    color: var(--white);
    img {
      margin-right: 8px;
      margin-top: 4px;
      width: 18px;
    }
    @media screen and (max-width: 768px) {
      grid-column: 1;
    }
  }
  &__close {
    grid-column: 3;
    cursor: pointer;
    img {
      display: block;
    }
    @media screen and (max-width: 768px) {
      grid-column: 2;
    }
  }
}
</style>
