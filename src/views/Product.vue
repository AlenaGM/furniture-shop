<template>
  <ProductDetails :product="currentProduct" v-if="currentProduct" />
  <PopularProducts
    @click="fetchProductDetails"
    sectionTitle="You may also like"
  />
  <Difference />
  <Subscribe />
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import api from "@/api.js";
import ProductDetails from "@/components/ProductDetails.vue";
import Difference from "@/components/Difference.vue";
import Subscribe from "@/components/Subscribe.vue";
import PopularProducts from "@/components/PopularProducts.vue";

const route = useRoute();
const productId = ref("");
const currentProduct = ref({});

onMounted(async () => {
  fetchProductDetails();
});

const fetchProductDetails = async () => {
  productId.value = route.params.id;
  currentProduct.value = await api.getProduct(productId.value);
};
</script>
