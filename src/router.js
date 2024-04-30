import { createRouter, createWebHistory } from "vue-router";
import {
  About,
  AllProducts,
  Cart,
  Contact,
  Index,
  Product,
  Search,
} from "@/views";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Index",
      component: Index,
    },
    {
      path: "/products",
      name: "AllProducts",
      component: AllProducts,
    },
    {
      path: "/products/all",
      redirect: { name: "AllProducts" },
      component: AllProducts,
    },
    {
      path: "/products/:category",
      name: "Category",
      component: AllProducts,
    },
    {
      path: "/products/:id(\\d+)",
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
    {
      path: "/products/search",
      name: "Search",
      component: Search,
    },
  ],
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
