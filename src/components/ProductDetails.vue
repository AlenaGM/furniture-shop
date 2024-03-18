<template>
  <div class="details">
    <div class="details-content">
      <div class="details-image">
        <img :src="product.image" :alt="product.name" />
      </div>
      <div>
        <h1 class="details-name">{{ product.name }}</h1>
        <span class="details-price">£{{ product.price }}</span>
        <div class="details-block detailst-description">
          <span class="detailst-block__title">Product description</span>
          <div v-html="product.description"></div>
        </div>
        <div class="details-block">
          <span class="details-block__title">Dimensions</span>
          <span
            class="details-param"
            v-for="(param, i) of product.params"
            :key="i"
          >
            {{ param.title }}: {{ param.value }}
          </span>
        </div>
        <div class="details-block">
          <span class="details-block__title">Quantity</span>
          <div class="details-quantity">
            <span
              class="details-quantity-symbol"
              @click="changeQuantity('minus')"
            >
              -
            </span>
            <span class="details-quantity-value">{{ quantity }}</span>
            <span
              class="details-quantity-symbol"
              @click="changeQuantity('plus')"
            >
              +
            </span>
          </div>
        </div>
        <ui-button
          color="dark-primary"
          @click="cartStore.addToCart(product, quantity)"
        >
          Add to Cart
        </ui-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import uiButton from "@/components/ui/Button.vue";
import { useCartStore } from "@/store/cart.js";

const props = defineProps({
  product: {
    type: Object,
    default: () => {},
    required: true,
  },
});

const quantity = ref(1);
const cartStore = useCartStore();
const changeQuantity = (type) => {
  if (type === "minus") {
    quantity.value === 1 ? (quantity.value = 1) : quantity.value--;
  }
  if (type === "plus") {
    quantity.value === 5 ? (quantity.value = 5) : quantity.value++;
  }
};
</script>

<style lang="scss" scoped>
.details {
  background: var(--light-gray);
  padding: 48px 0;
  margin-bottom: 32px;
  @media screen and (max-width: 1024px) {
    padding: 24px 0;
    margin-bottom: 16px;
  }
  &-content {
    display: grid;
    align-items: start;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 64px;
    @media screen and (max-width: 1024px) {
      column-gap: 40px;
    }
    @media screen and (max-width: 820px) {
      grid-template-columns: 1fr;
    }
  }
  &-image {
    img {
      object-fit: cover;
    }
  }
  &-name {
    margin: 0 0 12px 0;
    font-family: var(--second-family);
    font-size: 36px;
    font-weight: 400;
    line-height: 44px;
    @media screen and (max-width: 820px) {
      margin: 40px 0 12px 0;
    }
  }
  &-price {
    display: block;
    font-size: 24px;
    margin-bottom: 40px;
    font-weight: 400;
    line-height: 32px;
  }
  &-block {
    margin-bottom: 40px;
    &__title {
      display: block;
      font-family: var(--second-family);
      margin-bottom: 14px;
    }
  }
  &-description {
    border-top: 1px solid var(--border-gray);
    padding-top: 24px;
  }
  &-param {
    display: block;
  }
  &-quantity {
    background: var(--white);
    width: 145px;
    height: 46px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
    &-symbol {
      color: var(--border-gray);
      cursor: pointer;
    }
    @media screen and (max-width: 820px) {
      width: 122px;
    }
  }
}
</style>
