import axios from "axios";
import config from "@/config.js";

export const HTTP = axios.create({
  baseURL: config.MOCK,
});

export default {
  async getAllProducts() {
    try {
      const response = await HTTP.get("/products/popular");
      return response.data;
    } catch (e) {
      console.log(e);
    }
  },
  async getPopularProducts() {
    try {
      const response = await HTTP.get("/products/popular");
      return response.data;
    } catch (e) {
      console.log(e);
    }
  },
  async getProduct(id) {
    try {
      const response = await HTTP.get(`/products/${id}`, {
        headers: {
          Prefer: `code=200, example=Example ${id}`,
        },
      });
      return response.data;
    } catch (e) {
      console.log(e);
    }
  },
};
