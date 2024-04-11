<template>
  <div class="products">
    <div class="product" v-for="product of products">
      <router-link :to="`/products/${product.id}`">
        <img :src="product.img" :alt="product.name" class="product-image" />
      </router-link>
      <router-link :to="`/products/${product.id}`" class="product-name"
        ><h4>{{ product.name }}</h4></router-link
      >
      <div class="product-price">
        <span class="text price__sale" v-if="product.tags.includes('sale')">
          {{
            FormatToCurrency(Math.round(product.price * cartStore.discount))
          }}</span
        >
        <span
          class="text"
          :class="{ price__strikeout: product.tags.includes('sale') }"
        >
          {{ FormatToCurrency(product.price) }}</span
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from "@/stores/cart.js";
import { FormatToCurrency } from "@/utils/formatter";
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
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 80px;
  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
  }
  @media screen and (max-width: 768px) {
    margin-bottom: 40px;
  }
}

.product {
  &-image {
    display: block;
    margin-bottom: 20px;
    object-fit: cover;
  }
  &-name {
    display: inline-block;
    text-decoration: none;
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
  &-price {
    display: block;
  }
}
</style>
