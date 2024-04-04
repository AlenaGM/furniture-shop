import { defineStore } from "pinia";
import { ref, computed, watch } from "vue";

export const useCartStore = defineStore("cartStore", () => {
  const cart = ref([]);
  const counter = ref(1);
  const isModalOpen = ref(false);

  const cartInLocalStorage = localStorage.getItem("cart");
  if (cartInLocalStorage) {
    cart.value = JSON.parse(cartInLocalStorage)._value;
  }

  const cartTotalItems = computed(() => {
    let totalItems = 0;
    for (let item of cart.value) {
      totalItems += item.count;
    }
    return totalItems;
  });

  const cartTotalPrice = computed(() => {
    let totalPrice = 0;
    for (let item of cart.value) {
      totalPrice += item.price * item.count;
    }
    return totalPrice;
  });

  const addToCart = (product, count) => {
    const cartIndex = cart.value.findIndex((el) => el.id === product.id);
    if (cartIndex === -1) {
      cart.value.push({ ...product, count });
      isModalOpen.value = true;
    } else if (cart.value[cartIndex].count + count <= product.stock) {
      cart.value[cartIndex].count += count;
      isModalOpen.value = true;
    }
  };

  const addItem = (index, stock) => {
    cart.value[index].count >= stock
      ? (cart.value[index].count = stock)
      : cart.value[index].count++;
  };

  const deleteItem = (index) => {
    cart.value[index].count === 1
      ? cart.value.splice(index, 1)
      : cart.value[index].count--;
  };

  const deleteFromCart = (index) => {
    cart.value.splice(index, 1);
  };

  watch(
    () => cart,
    (state) => {
      localStorage.setItem("cart", JSON.stringify(state));
    },
    { deep: true }
  );

  return {
    cart,
    counter,
    isModalOpen,
    cartTotalItems,
    cartTotalPrice,
    addToCart,
    addItem,
    deleteItem,
    deleteFromCart,
  };
});

//export const useCartStore = defineStore("cartStore", {
//  state: () => ({
//    cart: [],
//  }),
//  actions: {
//    addToCart(product, count) {
//      const cartIndex = this.cart.findIndex((el) => el.id === product.id);
//      if (cartIndex === -1) {
//        this.cart.push({ ...product, count });
//      } else if (this.cart[cartIndex].count + count <= product.stock) {
//        this.cart[cartIndex].count += count;
//      }
//    },
//    addItem(index, stock) {
//      this.cart[index].count >= stock
//        ? (this.cart[index].count = stock)
//        : this.cart[index].count++;
//    },
//    deleteItem(index) {
//      this.cart[index].count === 1
//        ? this.cart.splice(index, 1)
//        : this.cart[index].count--;
//    },
//    deleteFromCart(index) {
//      this.cart.splice(index, 1);
//    },
//  },
//});
