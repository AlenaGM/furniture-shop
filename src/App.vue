<template>
  <div class="container">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script setup>
import Header from "@/components/layout/Header.vue";
import Footer from "@/components/layout/Footer.vue";
</script>

<style lang="scss">
@import "./assets/styles/global.scss";
</style>
