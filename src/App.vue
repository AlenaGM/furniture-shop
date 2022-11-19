<script setup>
import Header from "./components/layout/Header.vue";
</script>

<template>
  <div class="container">
    <Header></Header>
  </div>
</template>

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
}

.container {
  max-width: 1440px;
  margin: 0 auto;
}
</style>
