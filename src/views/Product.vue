<template>
  <ProductDetail :product="currentProduct" v-if="currentProduct" />
  <PopularProducts />
  <Difference />
  <Subscribe />
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import api from "@/api.js";
import ProductDetail from "@/components/ProductDetail.vue";
import Difference from "@/components/Difference.vue";
import Subscribe from "@/components/Subscribe.vue";
import PopularProducts from "@/components/PopularProducts.vue";

const route = useRoute();
const router = useRouter();
const productId = ref("");
const currentProduct = ref({});

onMounted(async () => {
  productId.value = route.params.id;
  currentProduct.value = await api.getProduct(productId.value);
});
</script>
