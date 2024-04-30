import { defineStore } from "pinia";
import { ref } from "vue";

import api from "../api";

export const useProductStore = defineStore("productStore", () => {
  const products = ref([]);
  const product = ref({});
  const suggested = ref([]);
  const search = ref("");

  const getProducts = async () => {
    products.value = await api.getProducts();
  };

  const getProduct = async (id) => {
    product.value = await api.getProduct(id);
  };

  const getSuggested = async () => {
    suggested.value = await api.getSuggested();
  };

  const attributeSearch = (searchField) => {
    search.value = searchField.value.toLowerCase();
  };

  return {
    products,
    product,
    suggested,
    search,
    getProducts,
    getProduct,
    getSuggested,
    attributeSearch,
  };
});
