<template>
  <div class="hero">
    <HeroInfo
      title="Luxury homeware for people who love timeless design quality"
      link="#"
    />
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
}
</style>
