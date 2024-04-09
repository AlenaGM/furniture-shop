<template>
  <div class="products-container">
    <h2>{{ sectionTitle }}</h2>
    <Products :products="productStore.popularProducts" />
    <div class="products-link">
      <ui-button
        class="products-link"
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
import { onMounted } from "vue";
import Products from "@/components/Products.vue";
import uiButton from "@/components/ui/Button.vue";
import { useProductStore } from "../stores/products";

const productStore = useProductStore();

onMounted(async () => {
  productStore.getProducts();
});

const props = defineProps({
  sectionTitle: {
    type: String,
    default: "Our popular products",
  },
});
</script>

<style lang="scss" scoped>
.products {
  &-container {
    display: grid;
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
