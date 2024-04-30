<template>
  <div class="products">
    <div class="product" v-for="product of products">
      <router-link :to="`/products/${product.id}`" class="product_image">
        <img :src="product.img" :alt="product.name" />
      </router-link>

      <router-link :to="`/products/${product.id}`" class="product_name">
        <span>{{ product.manufacturer }}</span>
        <h4>{{ product.name }}</h4></router-link
      >
      <div class="product_price price">
        <span
          class="price__sale"
          v-if="product.tags.includes('sale') && cartStore.discount"
        >
          {{
            FormatToCurrency(Math.round(product.price * cartStore.discount))
          }}</span
        >
        <span
          :class="{
            price__strikeout:
              product.tags.includes('sale') && cartStore.discount,
          }"
        >
          {{ FormatToCurrency(product.price) }}</span
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from "@/stores/cart.js";
import { FormatToCurrency } from "@/helpers/formatter";

const cartStore = useCartStore();

const props = defineProps({
  products: {
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.products {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(252px, 1fr));
  grid-auto-rows: 1fr;
  gap: 80px 20px;
  justify-items: center;
  margin: 20px 0 60px;
  @media screen and (max-width: 768px) {
    margin: 20px 0;
  }
}

.product {
  display: grid;
  grid-auto-flow: row;
  grid-template: auto 1fr minmax(24px, auto) / 1fr;
  justify-items: center;
  max-width: 250px;
  &_image {
    position: relative;
    margin: 0px auto 12px;
    width: 210px;
    height: 216px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  &_name {
    display: inline-block;
    text-decoration: none;
    text-align: center;
    span {
      color: var(--color-link);
      text-decoration: none;
    }
    &::after {
      content: "";
      background: var(--dark-primary);
      position: absolute;
      bottom: 2px;
      left: 50%;
      height: 1.7px;
      width: 0;
      transform: translateX(-50%);
      transition: width 0.3s ease;
    }
    @media (any-pointer: fine) {
      &:hover {
        cursor: pointer;
        &::after {
          width: 100%;
          transition: width 0.3s ease;
        }
      }
    }
  }
  &_price {
    display: block;
  }
}
</style>
