<template>
  <div class="collection">
    <h1 class="collection_title">{{ title }}</h1>
    <div class="products_container" v-if="selectedProducts.length">
      <Products :products="selectedProducts" />
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useProductStore } from "@/stores/products.js";
import Products from "@/components/Products.vue";

onMounted(async () => {
  !productStore.products.length && productStore.getProducts();
});

const productStore = useProductStore();
const route = useRoute();

const selectedProducts = computed(() => {
  return route.params.category
    ? filterByCategory(productStore.products, route.params.category)
    : productStore.products;
});

const filterByCategory = (products, category) => {
  return products.filter(
    (product) =>
      product.category === category || product.tags.includes(category)
  );
};

const title = computed(() => {
  return route.params.category
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
  grid-template-rows: auto 1fr;
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

.fail {
  grid-column: 2;
  grid-row: 2;
  display: grid;
  padding: 48px 64px;
  background-color: var(--white);
  margin-bottom: 80px;
  width: 100%;
  justify-items: center;
  align-content: center;
  gap: 48px;
  @media screen and (max-width: 768px) {
    padding: 24px;
    margin-bottom: 40px;
    gap: 24px;
  }
  @media screen and (max-width: 350px) {
    padding: 0;
  }
  &__title {
    text-align: center;
    font-family: var(--second-family);
    font-weight: 400;
    font-size: 20px;
    line-height: 140%;
    color: var(--dark-primary);
    @media screen and (max-width: 768px) {
      padding: 40px 0 16px;
      font-size: 18px;
    }
  }
}
</style>
