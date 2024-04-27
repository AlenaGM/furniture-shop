import { defineStore } from "pinia";
import { ref } from "vue";
import api from "../api";

export const useProductStore = defineStore("productStore", () => {
  const products = ref([]);
  const product = ref({});
  const suggested = ref([]);

  const getProducts = async () => {
    products.value = await api.getProducts();
    console.log("getProducts");
  };

  const getProduct = async (id) => {
    product.value = await api.getProduct(id);
    console.log("getProduct");
  };

  const getSuggested = async () => {
    suggested.value = await api.getSuggested();
    console.log("getSuggested");
  };

  return {
    products,
    product,
    suggested,
    getProducts,
    getProduct,
    getSuggested,
  };
});
