<template>
  <div class="search-results">
    <h1 class="search-results_title">Search Results</h1>
    <div class="products_container" v-if="productStore.searchedProducts.length">
      <div class="search-results_stats">
        <span class="text-sm">Search term: "hihihi"</span>
        <span class="text-sm">
          {{ productStore.searchedProducts.length }} products
        </span>
      </div>
      <Products :products="productStore.searchedProducts" />
    </div>
    <div class="search-results_fail" v-else>
      No results found for your search
    </div>
    <ui-button
      class="search-results_back"
      @click="router.go(-1)"
      :mobileFullWidth="true"
    >
      Back
    </ui-button>
  </div>
</template>

<script setup>
import Products from "@/components/Products.vue";
import uiButton from "@/components/ui/Button.vue";
import { useRouter } from "vue-router";
import { useProductStore } from "../stores/products";

const router = useRouter();
const productStore = useProductStore();
</script>

<style lang="scss" scoped>
.search-results {
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
  &_stats {
    display: flex;
    flex-direction: column;
    margin-bottom: 48px;
    span {
      color: var(--color-link);
    }
    @media screen and (max-width: 768px) {
      margin-bottom: 24px;
    }
  }
  &_fail {
    grid-column: 2;
    grid-row: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: var(--second-family);
    font-weight: 400;
    font-size: 20px;
    line-height: 140%;
    color: var(--dark-primary);
    margin: var(--section-gap);
    @media screen and (max-width: 768px) {
      font-size: 18px;
      margin: var(--section-gap-mobile);
    }
  }
  &_back {
    grid-column: 2;
    grid-row: 3;
    margin: var(--section-gap);
    justify-self: center;
    @media screen and (max-width: 560px) {
      margin: var(--section-gap-mobile);
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
