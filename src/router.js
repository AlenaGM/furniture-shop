import { createRouter, createWebHistory } from "vue-router";
import Index from "@/views/Index.vue";
import Product from "@/views/Product.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/furniture-shop/",
      name: "Index",
      component: Index,
    },
    {
      path: "/furniture-shop/products/:id",
      name: "Product",
      component: Product,
    },
  ],
});

export default router;
