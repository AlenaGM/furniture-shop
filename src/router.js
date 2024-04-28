import { createRouter, createWebHistory } from "vue-router";
import {
  About,
  AllProducts,
  Cart,
  Contact,
  Index,
  Product,
  Page404,
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
      path: "/products/search",
      redirect: { name: "AllProducts" },
      component: AllProducts,
    },
    {
      path: "/products/:category",
      name: "Category",
      component: AllProducts,
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
      path: "/notfound",
      name: "Page404",
      component: Page404,
    },
    {
      path: "/shipping",
      redirect: { name: "Page404" },
      component: Page404,
    },
    {
      path: "/returns",
      redirect: { name: "Page404" },
      component: Page404,
    },
    {
      path: "/privacy",
      redirect: { name: "Page404" },
      component: Page404,
    },
  ],
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
