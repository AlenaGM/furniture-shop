<template>
  <ProductDetails />
  <SuggestedProducts sectionTitle="You may also like" />
  <Difference />
  <Subscribe />
</template>

<script setup>
import ProductDetails from "@/components/ProductDetails.vue";
import SuggestedProducts from "@/components/SuggestedProducts.vue";
import Difference from "@/components/Difference.vue";
import Subscribe from "@/components/Subscribe.vue";
</script>
