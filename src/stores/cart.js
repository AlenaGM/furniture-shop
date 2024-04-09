import { defineStore } from "pinia";
import { ref, computed, watch } from "vue";

export const useCartStore = defineStore("cartStore", () => {
  const cart = ref([]);
  const counter = ref(1);
  const counterMsg = ref("");
  const discount = ref(0.7);
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
      totalPrice +=
        item.count *
        Math.round(
          item.tags.includes("sale") ? item.price * discount.value : item.price
        );
    }
    return totalPrice;
  });

  const addToCart = (product, count) => {
    const cartIndex = cart.value.findIndex((el) => el.id === product.id);
    let itemsInCart = cart.value[cartIndex]?.count || 0;
    const itemsRest = product.stock - itemsInCart;

    if (!itemsRest) {
      isModalOpen.value = false;
      counterMsg.value = "This item is out of stock";
    } else if (cartIndex === -1) {
      cart.value.push({ ...product, count });
      isModalOpen.value = true;
      counterMsg.value = "";
    } else {
      cart.value[cartIndex].count += count;
      isModalOpen.value = true;
      counterMsg.value = "";
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

  const decreaseCounter = () => {
    counter.value <= 1 ? (counter.value = 1) : counter.value--;
  };

  const increaseCounter = (product) => {
    const cartIndex = cart.value.findIndex((el) => el.id === product.id);
    const itemsInCart = cart.value[cartIndex]?.count || 0;
    const itemsRest = product.stock - itemsInCart;

    if (counter.value >= itemsRest) {
      counter.value = itemsRest;
      counterMsg.value = `${itemsRest} item(s) left in stock`;
    } else counter.value++;
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
    counterMsg,
    discount,
    isModalOpen,
    cartTotalItems,
    cartTotalPrice,
    addToCart,
    addItem,
    deleteItem,
    deleteFromCart,
    decreaseCounter,
    increaseCounter,
  };
});
