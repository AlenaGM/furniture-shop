<template>
  <div class="category">
    <div class="category__title">
      <h1>category</h1>
    </div>
    <div class="products-container">
      <Loader v-if="loading" />
      <Products :products="products" v-else />
      <div class="products-link" v-if="products.length > 24">
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
import { onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
import Products from "@/components/Products.vue";
import Loader from "@/components/ui/Loader.vue";
import uiButton from "@/components/ui/Button.vue";
import api from "@/api";

const products = ref([]);
const loading = ref(true);
</script>

<style lang="scss" scoped>
.category {
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
