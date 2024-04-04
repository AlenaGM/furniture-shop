import { defineStore } from "pinia";

export const useCartStore = defineStore("cartStore", {
  state: () => ({
    cart: [],
  }),
  actions: {
    addToCart(product, count) {
      const cartIndex = this.cart.findIndex((el) => el.id === product.id);
      if (cartIndex === -1) {
        this.cart.push({ ...product, count });
      } else if (this.cart[cartIndex].count + count <= product.stock) {
        this.cart[cartIndex].count += count;
      }
    },
    addItem(index, stock) {
      this.cart[index].count >= stock
        ? (this.cart[index].count = stock)
        : this.cart[index].count++;
    },
    deleteItem(index) {
      this.cart[index].count === 1
        ? this.cart.splice(index, 1)
        : this.cart[index].count--;
    },
    deleteFromCart(index) {
      this.cart.splice(index, 1);
    },
  },
});
