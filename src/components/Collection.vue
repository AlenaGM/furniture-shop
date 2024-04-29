<template>
  <div class="collection">
    <h1 class="collection_title">{{ title }}</h1>
    <div class="products_container" v-if="selectedProducts.length">
      <Products :products="selectedProducts" />
    </div>
    <div class="fail" v-else>
      <div class="fail__title">{{ failTitle }}</div>
      <ui-button
        class="fail__back"
        @click="router.back()"
        :mobileFullWidth="true"
      >
        Back
      </ui-button>
    </div>
  </div>
</template>

<script setup>
import { computed, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { storeToRefs } from "pinia";

import { useProductStore } from "@/stores/products.js";
import Products from "@/components/Products.vue";
import uiButton from "@/components/ui/Button.vue";

const route = useRoute();
const router = useRouter();

const productStore = useProductStore();
const { products } = storeToRefs(productStore);

const selectedProducts = computed(() => {
  return productStore.search
    ? filterBySearchTerm(productStore.search)
    : route.params.category
    ? filterByCategory(route.params.category)
    : products.value;
});

const filterByCategory = (category) => {
  return products.value.filter(
    (product) =>
      product.category === category || product.tags.includes(category)
  );
};

const filterBySearchTerm = (search) => {
  return products.value.filter(
    (product) => product.category === search || product.tags.includes(search)
  );
};

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

const failTitle = productStore.search
  ? "No results found for your search"
  : "No items in this category";

watch(
  () => route.params.category,
  () => {
    productStore.getProducts();
  },
  { immediate: true, deep: true }
);
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
