<template>
  <div class="details">
    <div class="details-content">
      <div class="details-image">
        <img :src="product.img" :alt="product.name" />
      </div>
      <div>
        <h1 class="details-name">{{ product.name }}</h1>
        <div class="details-price" v-if="product.price">
          <span class="price__sale" v-if="product.tags.includes('sale')">
            {{
              new Intl.NumberFormat("fr-FR", {
                style: "currency",
                currency: "EUR",
                minimumFractionDigits: 0,
              }).format(Math.round(product.price * cartStore.discount))
            }}</span
          >
          <span
            :class="{
              price__strikeout: product.tags.includes('sale'),
            }"
          >
            {{
              new Intl.NumberFormat("fr-FR", {
                style: "currency",
                currency: "EUR",
                minimumFractionDigits: 0,
              }).format(product.price)
            }}</span
          >
        </div>
        <div
          class="details-block detailst-description"
          v-if="product.description"
        >
          <span class="details-block__title">Product description</span>
          <div v-html="product.description"></div>
        </div>
        <div class="details-block" v-if="product.params">
          <span class="details-block__title">Product details</span>
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
              @click="cartStore.decreaseCounter()"
            >
              -
            </span>
            <span class="details-quantity-value">{{
              cartStore.counter || 1
            }}</span>
            <span
              class="details-quantity-symbol"
              @click="cartStore.increaseCounter(product)"
            >
              +
            </span>
          </div>
          <div v-if="cartStore.counterMsg" class="details-quantity-msg text-sm">
            {{ cartStore.counterMsg }}
          </div>
        </div>
        <ui-button
          color="dark-primary"
          @click="cartStore.addToCart(product, cartStore.counter)"
        >
          Add to Cart
        </ui-button>
      </div>
    </div>
  </div>
  <teleport to="body">
    <modal-content
      :open="cartStore.isModalOpen && product.stock != 0"
      @close="
        {
          cartStore.isModalOpen = false;
          cartStore.counter = 1;
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
        <div>Quantity: {{ cartStore.counter }}</div>
        <div>
          Unit Price:
          <span v-if="product.tags.includes('sale')">
            {{
              new Intl.NumberFormat("fr-FR", {
                style: "currency",
                currency: "EUR",
                minimumFractionDigits: 0,
              }).format(Math.round(product.price * cartStore.discount))
            }}</span
          >
          <span v-else>
            {{
              new Intl.NumberFormat("fr-FR", {
                style: "currency",
                currency: "EUR",
                minimumFractionDigits: 0,
              }).format(product.price)
            }}</span
          >
        </div>
        <div>
          Total Cart:
          {{
            new Intl.NumberFormat("fr-FR", {
              style: "currency",
              currency: "EUR",
              minimumFractionDigits: 0,
            }).format(cartStore.cartTotalPrice)
          }}
        </div>
      </div>
    </modal-content>
  </teleport>
</template>

<script setup>
import uiButton from "@/components/ui/Button.vue";
import { useCartStore } from "@/stores/cart.js";
import { useProductStore } from "@/stores/products.js";
import { useRoute } from "vue-router";
import ModalContent from "@/components/ui/Modal.vue";
import { onMounted, watch, ref } from "vue";
import { storeToRefs } from "pinia";

const productStore = useProductStore();
const cartStore = useCartStore();

const { product } = storeToRefs(productStore);
const { getProduct } = productStore;

const route = useRoute();

onMounted(() => {
  updateCounter();
  getProduct(route.params.id);
});

watch(
  () => route.params.id,
  () => {
    getProduct(route.params.id);
    updateCounter();
  },
  { immediate: true, deep: true }
);

function updateCounter() {
  cartStore.counterMsg = "";
  cartStore.counter = 1;
  cartStore.isModalOpen = false;
}
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
    @media screen and (max-width: 768px) {
      margin-bottom: 24px;
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
    &-msg {
      padding-top: 6px;
      font-style: italic;
      color: var(--color-text);
    }
    @media screen and (max-width: 820px) {
      width: 122px;
    }
  }
}

.details-content {
  transition: opacity 0.3s ease;
}

.details-enter-from .details-content,
.details-leave-to .details-content {
  opacity: 0;
}
</style>
