<template>
  <div class="collection">
    <h1 class="collection_title">All Products</h1>
    <div class="products_container">
      <Products :products="productStore.products" />
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import Products from "@/components/Products.vue";
import { useProductStore } from "../stores/products";

const productStore = useProductStore();

onMounted(() => {
  productStore.getProducts();
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
  }
}
</style>
