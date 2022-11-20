<template>
  <div class="container">
    <Header></Header>
    <Hero />
    <About />
    <Products />
    <Idea />
  </div>
</template>

<script setup>
import Header from "./components/layout/Header.vue";
import Hero from "./components/Hero.vue";
import About from "./components/About.vue";
import Products from "./components/Products.vue";
import Idea from "./components/Idea.vue";
</script>

<style lang="scss">
@import url("https://fonts.cdnfonts.com/css/satoshi");
@import url("https://fonts.cdnfonts.com/css/clash-display");

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  font-family: "Satoshi", sans-serif;
  font-size: 16px;
  color: #22202e;
}

img {
  max-width: 100%;
}

.container {
  max-width: 1440px;
  margin: 0 auto;
}
</style>
