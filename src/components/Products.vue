<template>
  <div class="products-container">
    <div class="products">
      <Product
        v-for="product of products"
        :key="product.id"
        :img="product.img"
        :title="product.title"
        :price="product.price"
      />
    </div>
    <div class="products-link">
      <ui-button :mobileFullWidth="true" color="lightgray" type="link" to="/">
        View collection
      </ui-button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Product from "@/components/Product.vue";
import uiButton from "@/components/ui/Button.vue";

const products = ref([
  {
    id: 1,
    img: "/img/product-chair.jpg",
    title: "The Dandy chair",
    price: 250,
  },
  {
    id: 2,
    img: "/img/product-vases.jpg",
    title: "Rustic Vase Set",
    price: 155,
  },
  {
    id: 3,
    img: "/img/product-vase.jpg",
    title: "The Silky Vase",
    price: 125,
  },
  {
    id: 4,
    img: "/img/product-lamp.jpg",
    title: "The Lucy Lamp",
    price: 399,
  },
]);
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
  }
  &-container {
    margin-bottom: 56px;
  }
  &-link {
    display: block;
    text-align: center;
  }
}
</style>
