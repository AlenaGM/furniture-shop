<template>
  <div class="product">
    <router-link :to="`/products/${id}`">
      <img :src="img" :alt="name" class="product-image" />
    </router-link>
    <router-link :to="`/products/${id}`" class="product-name"
      ><h4>{{ name }}</h4></router-link
    >
    <div class="product-price">
      <span class="text price__sale" v-if="tags.includes('sale')">
        {{
          new Intl.NumberFormat("fr-FR", {
            style: "currency",
            currency: "EUR",
            minimumFractionDigits: 0,
          }).format(Math.round(price * cartStore.discount))
        }}</span
      >
      <span class="text" :class="{ price__strikeout: tags.includes('sale') }">
        {{
          new Intl.NumberFormat("fr-FR", {
            style: "currency",
            currency: "EUR",
            minimumFractionDigits: 0,
          }).format(price)
        }}</span
      >
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from "@/store/cart.js";
const cartStore = useCartStore();

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  tags: {
    type: Array,
    required: false,
  },
});
</script>

<style lang="scss" scoped>
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
