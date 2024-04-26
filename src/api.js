import axios from "axios";
import config from "@/config.js";

export const HTTP = axios.create({
  baseURL: config.MOCK,
});

export default {
  async getProducts() {
    try {
      const response = await HTTP.get("/products", {
        headers: {
          Accept: "application/json",
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  },
  async getProduct(id) {
    try {
      const response = await HTTP.get(`/products/${id}`, {
        headers: {
          Accept: "application/json",
          Prefer: `code=200, example=Get Product ${id}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  },
};
