<template>
  <div class="products_container">
    <h2>{{ sectionTitle }}</h2>
    <Products :products="productStore.suggested" />
    <div class="products_link">
      <ui-button
        type="link"
        to="/products"
        color="light-gray"
        :mobileFullWidth="true"
        >View collection
      </ui-button>
    </div>
  </div>
</template>

<script setup>
import { watch } from "vue";
import { useRoute } from "vue-router";
import { useProductStore } from "@/stores/products.js";
import Products from "@/components/Products.vue";
import uiButton from "@/components/ui/Button.vue";

const productStore = useProductStore();

const route = useRoute();

const props = defineProps({
  sectionTitle: {
    type: String,
    default: "Our popular products",
  },
});

watch(
  () => route.params.id,
  () => {
    productStore.getSuggested();
  },
  { immediate: true, deep: true }
);
</script>

<style lang="scss" scoped>
.products {
  &_container {
    display: grid;
    margin: var(--section-gap);
    @media screen and (max-width: 768px) {
      margin: var(--section-gap-mobile);
    }
  }
  &_link {
    text-align: center;
  }
}
</style>
