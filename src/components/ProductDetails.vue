<template>
  <div class="details">
    <div class="details_container">
      <div class="details_image">
        <img :src="product.img" :alt="product.name" />
      </div>
      <div>
        <h1 class="details_name">{{ product.name }}</h1>
        <div class="details_price price" v-if="product.price">
          <span
            class="price__sale"
            v-if="product.tags.includes('sale') && discount"
          >
            {{ FormatToCurrency(Math.round(product.price * discount)) }}</span
          >
          <span
            :class="{
              price__strikeout: product.tags.includes('sale') && discount,
            }"
          >
            {{ FormatToCurrency(product.price) }}</span
          >
        </div>
        <div
          class="details_block detailst_description"
          v-if="product.description"
        >
          <span class="details_block__title">Product description</span>
          <div v-html="product.description"></div>
        </div>
        <div class="details_block" v-if="product.params">
          <span class="details_block__title">Product details</span>
          <span
            class="details_param"
            v-for="(param, i) of product.params"
            :key="i"
          >
            {{ param.title }}: {{ param.value }}
          </span>
        </div>
        <div class="details_block">
          <span class="details_block__title">Quantity</span>
          <div class="details_quantity">
            <span class="details_quantity__symbol" @click="decreaseCounter()">
              −
            </span>
            <span class="details_quantity__value">{{ counter || 1 }}</span>
            <span
              class="details_quantity__symbol"
              @click="increaseCounter(product)"
              >+
            </span>
          </div>
          <div v-if="counterMsg" class="details_quantity__msg text-sm">
            {{ counterMsg }}
          </div>
        </div>
        <ui-button color="dark-primary" type="button" @click="addToCart(product, counter)">
          Add to Cart
        </ui-button>
      </div>
    </div>
  </div>
  <teleport to="body">
    <modal-content
      :open="isModalOpen && product.stock != 0"
      @close="
        {
          isModalOpen = false;
          counter = 1;
        }
      "
      title="Item has been added to your cart"
      btn="Continue shopping"
      link="Go to cart"
      to="/cart"
    >
      <div>
        <img :src="product.img" alt="added item" width="240px" />
      </div>
      <div>
        <h4>{{ product.name }}</h4>
        <div>Added Quantity: {{ counter }}</div>
        <div>
          Unit Price:
          <span
            class="price__sale"
            v-if="product.tags.includes('sale') && discount"
          >
            {{ FormatToCurrency(Math.round(product.price * discount)) }}</span
          >
          <span
            :class="{
              price__strikeout: product.tags.includes('sale') && discount,
            }"
          >
            {{ FormatToCurrency(product.price) }}</span
          >
        </div>
        <div>
          Total Cart:
          {{ FormatToCurrency(cartTotalPrice) }}
        </div>
      </div>
    </modal-content>
  </teleport>
</template>

<script setup>
import { watch } from "vue";
import { useRoute } from "vue-router";
import { storeToRefs } from "pinia";
import { useProductStore } from "@/stores/products.js";
import { useCartStore } from "@/stores/cart.js";
import { FormatToCurrency } from "@/helpers/formatter";
import uiButton from "@/components/ui/Button.vue";
import ModalContent from "@/components/ui/Modal.vue";

const productStore = useProductStore();
const cartStore = useCartStore();

const { product } = storeToRefs(productStore);

const { counter, counterMsg, discount, isModalOpen, cartTotalPrice } =
  storeToRefs(cartStore);
const { decreaseCounter, increaseCounter, updateCounter, addToCart } =
  cartStore;

const route = useRoute();

watch(
  () => route.params.id,
  () => {
    productStore.getProduct(route.params.id);
    updateCounter();
    isModalOpen.value = false;
  },
  { immediate: true, deep: true }
);
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
  &_container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 64px;
    align-items: start;
    justify-items: center;
    @media screen and (max-width: 1024px) {
      column-gap: 40px;
    }
    @media screen and (max-width: 820px) {
      grid-template-columns: 1fr;
    }
  }
  &_image {
    max-width: 608px;
    img {
      object-fit: cover;
    }
  }
  &_name {
    margin: 0 0 12px 0;
    font-family: var(--second-family);
    font-size: 36px;
    font-weight: 400;
    line-height: 140%;
    @media screen and (max-width: 820px) {
      margin: 40px 0 12px 0;
      text-align: center;
    }
    @media screen and (max-width: 560px) {
      text-align: left;
    }
  }
  &_price {
    display: block;
    font-size: 24px;
    margin-bottom: 40px;
    font-weight: 400;
    line-height: 32px;
    @media screen and (max-width: 820px) and (min-width: 561px) {
      text-align: center;
    }
  }
  &_block {
    margin-bottom: 40px;
    &__title {
      display: block;
      font-family: var(--second-family);
      margin-bottom: 12px;
    }
    @media screen and (max-width: 768px) {
      margin-bottom: 24px;
    }
  }
  &_description {
    border-top: 1px solid var(--border-gray);
    padding-top: 24px;
  }
  &_param {
    display: block;
  }
  &_quantity {
    background: var(--white);
    width: 146px;
    height: 46px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
    &__symbol {
      color: var(--border-gray);
      transition: all 0.3s ease;
      cursor: pointer;
      @media (any-pointer: fine) {
        &:hover {
          cursor: pointer;
          color: var(--dark-primary);
          transform: scale(1.2);
          transition: all 0.3s ease;
        }
      }
    }
    &__msg {
      padding-top: 6px;
      font-style: italic;
      color: var(--color-text);
    }
    @media screen and (max-width: 820px) {
      width: 122px;
    }
  }
}
</style>
