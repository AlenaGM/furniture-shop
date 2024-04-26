<template>
  <div class="products_container">
    <h2>{{ sectionTitle }}</h2>
    <Products :products="popularProducts" />
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
import { ref, computed, onMounted } from "vue";
import Products from "@/components/Products.vue";
import uiButton from "@/components/ui/Button.vue";
import api from "../api";

const products = ref([]);

onMounted(async () => {
  products.value = await api.getProducts();
});

const props = defineProps({
  sectionTitle: {
    type: String,
    default: "Our popular products",
  },
});

const popularProducts = computed(() => {
  return products.value
    .filter((product) => product.tags.includes("popular"))
    .slice(0, 4);
});
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
