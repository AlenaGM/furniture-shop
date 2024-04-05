import { createRouter, createWebHistory } from "vue-router";
import Index from "@/views/Index.vue";
import About from "@/views/About.vue";
import AllProducts from "@/views/AllProducts.vue";
import Product from "@/views/Product.vue";
import Cart from "@/views/Cart.vue";
import Contact from "@/views/Contact.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Index",
      component: Index,
    },
    {
      path: "/products/",
      name: "AllProducts",
      component: AllProducts,
    },
    {
      path: "/products/:category",
      name: "ProductsByCategory",
      component: AllProducts,
    },
    {
      path: "/products/:id",
      name: "Product",
      component: Product,
    },
    {
      path: "/about",
      name: "About",
      component: About,
    },
    {
      path: "/cart",
      name: "Cart",
      component: Cart,
    },
    {
      path: "/contact",
      name: "Contact",
      component: Contact,
    },
  ],
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
