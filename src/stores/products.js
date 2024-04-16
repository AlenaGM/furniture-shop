import axios from "axios";
import config from "@/config.js";
import { defineStore } from "pinia";
import { ref, computed, watch } from "vue";
import { useRoute } from "vue-router";

export const HTTP = axios.create({
  baseURL: config.MOCK,
});

export const useProductStore = defineStore("productStore", () => {
  const products = ref([]);

  const product = ref({});
  const productId = ref("");
  const productStock = ref("");

  const route = useRoute();
  const category = ref("");
  const categoryProducts = ref([]);

  const getProducts = async () => {
    try {
      const response = await HTTP.get("/products", {
        headers: {
          Accept: "application/json",
        },
      });
      products.value = response.data;
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const getProduct = async (id) => {
    try {
      const response = await HTTP.get(`/products/${id}`, {
        headers: {
          Accept: "application/json",
          Prefer: `code=200, example=Get Product ${id}`,
        },
      });
      product.value = response.data;
      productId.value = response.data.id;
      productStock.value = response.data.stock;
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };

  const getCategoryProducts = async () => {
    try {
      await getProducts();
      filterByCategory();
    } catch (error) {
      console.error("Error fetching category products:", error);
    }
  };

  const filterByCategory = () => {
    category.value = route.params.category || "not set";
    categoryProducts.value = products.value.filter(
      (product) =>
        product.category === category.value ||
        product.tags.includes(category.value)
    );
  };

  const popularProducts = computed(() => {
    return products.value
      .filter((product) => product.tags.includes("popular"))
      .slice(0, 4);
  });

  watch(
    () => route.params.category,
    () => filterByCategory(),
    { immediate: true, deep: true }
  );

  return {
    products,
    product,
    productId,
    productStock,
    category,
    categoryProducts,
    popularProducts,
    getProducts,
    getProduct,
    getCategoryProducts,
  };
});
