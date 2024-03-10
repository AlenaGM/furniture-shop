import { createRouter, createWebHistory } from "vue-router";
import Index from "@/views/Index.vue";
import About from "@/views/About.vue";
import AllProducts from "@/views/AllProducts.vue";
import Product from "@/views/Product.vue";
import Cart from "@/views/Cart.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/furniture-shop/",
      name: "Index",
      component: Index,
    },
    {
      path: "/furniture-shop/products/",
      name: "AllProducts",
      component: AllProducts,
    },
    {
      path: "/furniture-shop/products/:id",
      name: "Product",
      component: Product,
    },
    {
      path: "/furniture-shop/about",
      name: "About",
      component: About,
    },
    {
      path: "/furniture-shop/cart",
      name: "Cart",
      component: Cart,
    },
  ],
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
