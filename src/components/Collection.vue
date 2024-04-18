<template>
  <div class="collection">
    <div class="collection_title">
      <h1>All Products</h1>
    </div>
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
  display: grid;
  grid-template-rows: minmax(210px, auto) 1fr;
  @media screen and (max-width: 768px) {
    grid-template-rows: minmax(146px, auto) 1fr;
  }
  &_title {
    grid-row: 1;
    display: grid;
    background: url("/img/allproducts.webp");
    background-size: cover;
    align-items: end;
    padding: 40px 0;
    @media screen and (max-width: 768px) {
      background: url("/img/allproducts-mobile.webp");
      background-size: cover;
      padding: 36px 24px;
      align-items: center;
      justify-content: center;
    }
    h1 {
      grid-column: 2;
      margin: 0;
      text-align: left;
      color: var(--white);
      padding: 0;
      @media screen and (max-width: 768px) {
        font-size: 32px;
        text-align: center;
      }
    }
  }
}

.products {
  &_container {
    grid-row: 2;
    margin: var(--section-gap);
    @media screen and (max-width: 768px) {
      margin: var(--section-gap-mobile);
    }
  }
}
</style>
