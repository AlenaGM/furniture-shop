<template>
  <div class="products-container">
    <div class="products">
      <Product
        v-for="product of products"
        :id="product.id"
        :key="product.id"
        :img="product.img"
        :title="product.title"
        :price="product.price"
      />
    </div>
    <div class="products-link">
      <ui-button
        :mobileFullWidth="true"
        color="light-gray"
        type="link"
        to="/"
        class="products-link"
      >
        View collection
      </ui-button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Product from "@/components/Product.vue";
import uiButton from "@/components/ui/Button.vue";

const props = defineProps({
  products: {
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.products {
  display: grid;
  padding: 0 80px;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  margin-bottom: 64px;
  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 20px;
    justify-items: center;
  }
  @media screen and (max-width: 767px) {
    padding: 0;
    margin-bottom: 40px;
  }
  &-container {
    margin-bottom: 56px;
  }
  &-link {
    text-align: center;
  }
}
</style>
