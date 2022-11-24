<template>
  <div>
    <Hero />
    <About />
    <Loader v-if="loading" />
    <Products :products="popularProducts" v-else />
    <Idea />
    <Subscribe />
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import api from "@/api";

import Loader from "@/components/ui/Loader.vue";
import Hero from "@/components/Hero.vue";
import About from "@/components/About.vue";
import Products from "@/components/Products.vue";
import Idea from "@/components/Idea.vue";
import Subscribe from "@/components/Subscribe.vue";

const popularProducts = ref([]);
const loading = ref(true);

onMounted(async () => {
  popularProducts.value = await api.getPopularProducts();
  loading.value = false;
});
</script>
