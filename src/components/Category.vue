<template>
  <div class="category">
    <h1 class="category_title">
      {{
        category === "new"
          ? category + " arrivals"
          : category === "popular"
          ? category + " products"
          : category
      }}
    </h1>
    <div class="products_container">
      <Products :products="categoryProducts" />
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useProductStore } from "../stores/products";
import Products from "@/components/Products.vue";

const productStore = useProductStore();
const { category, categoryProducts } = storeToRefs(productStore);

onMounted(() => {
  productStore.getCategoryProducts();
});
</script>

<style lang="scss" scoped>
.category {
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
