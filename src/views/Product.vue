<template>
  <ProductDetails />
  <PopularProducts sectionTitle="You may also like" />
  <Difference />
  <Subscribe />
</template>

<script setup>
import ProductDetails from "@/components/ProductDetails.vue";
import Difference from "@/components/Difference.vue";
import Subscribe from "@/components/Subscribe.vue";
import PopularProducts from "@/components/PopularProducts.vue";
</script>
