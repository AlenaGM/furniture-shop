import axios from "axios";
import config from "@/config.js";

export const HTTP = axios.create({
  baseURL: config.MOCK,
});

export default {
  async getProducts() {
    try {
      const response = await HTTP.get("/products");
      return response.data;
    } catch (e) {
      console.log(e);
    }
  },
  async getPopularProducts() {
    try {
      const response = await HTTP.get("/products");
      return response.data
        .filter((el) => el.tags.includes("popular"))
        .slice(0, 4);
    } catch (e) {
      console.log(e);
    }
  },
  async getProduct(id) {
    try {
      const response = await HTTP.get(`/products/${id}`, {
        headers: {
          Prefer: `code=200, example=Get Product ${id}`,
        },
      });
      return response.data;
    } catch (e) {
      console.log(e);
    }
  },
};
