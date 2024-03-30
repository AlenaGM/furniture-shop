<template>
  <div class="collection">
    <div class="collection__title">
      <h1>All Products</h1>
    </div>
    <div class="products-container">
      <Loader v-if="loading" />
      <Products :products="popularProducts" v-else />
      <div class="products-link" v-if="popularProducts.length > 24">
        <ui-button
          class="products-link"
          type="button"
          color="light-gray"
          :mobileFullWidth="true"
          >Load more
        </ui-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import Products from "@/components/Products.vue";

import Loader from "@/components/ui/Loader.vue";
import uiButton from "@/components/ui/Button.vue";
import api from "@/api";

const popularProducts = ref([]);
const loading = ref(true);

onMounted(async () => {
  popularProducts.value = await api.getPopularProducts();
  loading.value = false;
});
</script>

<style lang="scss" scoped>
.collection {
  display: grid;
  grid-template-rows: minmax(210px, auto) 1fr;
  @media screen and (max-width: 768px) {
    grid-template-rows: minmax(146px, auto) 1fr;
  }
  &__title {
    grid-row: 1;
    display: grid;
    background: url("/img/allproducts.jpg");
    background-size: cover;
    align-items: end;
    padding: 40px 0;
    @media screen and (max-width: 768px) {
      background: url("/img/allproducts-mobile.jpg");
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
      font-family: var(--second-family);
      font-size: 36px;
      font-weight: 400;
      line-height: 140%;
      padding: 0;
      @media screen and (max-width: 768px) {
        font-size: 32px;
        text-align: center;
      }
    }
  }
}

.products {
  &-container {
    grid-row: 2;
    margin: var(--section-gap);
    @media screen and (max-width: 768px) {
      margin: var(--section-gap-mobile);
    }
  }
  &-link {
    text-align: center;
  }
}
</style>
