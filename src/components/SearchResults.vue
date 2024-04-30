<template>
  <div class="search-results">
    <h1 class="search-results_title">Search Results</h1>
    <div class="products_container" v-if="searchedProducts.length">
      <Products :products="searchedProducts" />
    </div>
    <div class="fail" v-else>
      <div class="fail__title">No results found for your search</div>
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
import { useRouter } from "vue-router";
import { useProductStore } from "@/stores/products.js";
import { onMounted, computed } from "vue";
import Products from "@/components/Products.vue";
import uiButton from "@/components/ui/Button.vue";

const productStore = useProductStore();
const router = useRouter();

onMounted(async () => {
  !productStore.products.length && productStore.getProducts();
});

const searchedProducts = computed(() => {
  return productStore.search
    ? filterBySearchTerm(productStore.products, productStore.search)
    : "";
});

const filterBySearchTerm = (products, search) => {
  return products.filter(
    (product) =>
      product.category.toLowerCase() === search ||
      product.tags.includes(search) ||
      product.manufacturer.toLowerCase().indexOf(search) != -1 ||
      product.name.toLowerCase().indexOf(search) != -1
  );
};
</script>

<style lang="scss" scoped>
.search-results {
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
