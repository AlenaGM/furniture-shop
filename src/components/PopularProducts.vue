<template>
  <div class="products-container">
    <h2>Our Popular Products</h2>
    <Loader v-if="loading" />
    <Products :products="popularProducts" v-else />
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
import { onMounted, ref } from "vue";
import Products from "@/components/Products.vue";
import uiButton from "@/components/ui/Button.vue";
import Loader from "@/components/ui/Loader.vue";
import api from "@/api";

const popularProducts = ref([]);
const loading = ref(true);

onMounted(async () => {
  popularProducts.value = await api.getPopularProducts();
  loading.value = false;
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
