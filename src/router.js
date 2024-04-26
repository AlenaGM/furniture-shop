import { createRouter, createWebHistory } from "vue-router";

import { About, AllProducts, Cart, Contact, Index, Product } from "@/views";

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
      path: "/products/all",
      redirect: { name: "AllProducts" },
      component: AllProducts,
    },
    {
      path: "/products/:id(\\d+)",
      name: "Product",
      component: Product,
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
  ],
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
