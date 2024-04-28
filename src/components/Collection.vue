<template>
  <div class="collection">
    <h1 class="collection_title">{{ title }}</h1>
    <div class="products_container">
      <Products :products="categoryProducts" />
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import { storeToRefs } from "pinia";
import { useProductStore } from "@/stores/products.js";
import Products from "@/components/Products.vue";

const productStore = useProductStore();
const { products } = storeToRefs(productStore);
const route = useRoute();

onMounted(async () => {
  productStore.getProducts();
});

const categoryProducts = computed(() => {
  return route.params.category
    ? products.value.filter(
        (product) =>
          product.category === route.params.category ||
          product.tags.includes(route.params.category)
      )
    : productStore.search
    ? products.value.filter(
        (product) =>
          product.category === productStore.search ||
          product.tags.includes(productStore.search)
      )
    : products.value;
});

const title = computed(() => {
  return productStore.search
    ? "Search Results"
    : route.params.category
    ? route.params.category === "new"
      ? route.params.category + " arrivals"
      : route.params.category === "popular"
      ? route.params.category + " products"
      : route.params.category
    : "All Products";
});
</script>

<style lang="scss" scoped>
.collection {
  background: var(--light-gray);
  line-height: 140%;
  &_title {
    grid-column: 2;
    grid-row: 1;
    padding: 80px 0 32px;
    text-align: center;
    text-transform: capitalize;
    @media screen and (max-width: 768px) {
      padding: 40px 0 16px;
    }
  }
}

.products {
  &_container {
    grid-column: 2;
    grid-row: 2;
    width: 100%;
    padding: 48px 64px;
    background-color: var(--white);
    margin-bottom: 80px;
    @media screen and (max-width: 768px) {
      padding: 24px;
      margin-bottom: 40px;
    }
    @media screen and (max-width: 350px) {
      padding: 0;
    }
  }
}
</style>
