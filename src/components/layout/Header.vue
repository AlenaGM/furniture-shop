<template>
  <header class="header">
    <div class="header-top">
      <div class="header-top-left">
        <div class="header-top-search">
          <img
            src="/svg/header-search.svg"
            alt="search"
            class="header-top__icon"
          />
        </div>
        <div
          class="header-top-mobile-menu"
          @click="isOpenedMobileMenu = !isOpenedMobileMenu"
        >
          <img src="/svg/menu.svg" alt="menu" class="header-top__icon" />
        </div>
      </div>
      <router-link to="/" class="header-logo"
        ><h1 class="header-logo__title">Avion</h1></router-link
      >
      <div class="header-top-right">
        <div class="header-top-right__user">
          <router-link to="/">
            <img src="/svg/header-user.svg" alt="user" />
          </router-link>
        </div>
        <div class="header-top-right__cart">
          <router-link to="/cart">
            <img src="/svg/header-cart.svg" alt="cart" />
            <span class="header-top-right__count" v-if="cartStore.cart.length">
              {{ cartItems }}
            </span>
          </router-link>
        </div>
      </div>
    </div>
    <div class="header-menu">
      <router-link
        class="header-menu__link"
        :to="element.path"
        v-for="(element, i) of menu"
        :key="i"
      >
        {{ element.name }}
      </router-link>
    </div>
    <div class="header-menu-mobile" v-if="isOpenedMobileMenu">
      <router-link
        class="header-menu-mobile__link"
        :to="element.path"
        v-for="(element, i) of menu"
        :key="i"
      >
        {{ element.name }}
      </router-link>
    </div>
  </header>
</template>

<script setup>
import { ref, computed } from "vue";
import { useCartStore } from "@/store/cart.js";

const isOpenedMobileMenu = ref(false);
const cartStore = useCartStore();

const menu = [
  {
    name: "All products",
    path: "/products/",
  },
  {
    name: "New arrivals",
    path: "/products/",
  },
  {
    name: "Furniture",
    path: "/products/",
  },
  {
    name: "Lighting",
    path: "/products/",
  },
  {
    name: "Decoration",
    path: "/products/",
  },
  {
    name: "Tableware",
    path: "/products/",
  },
  {
    name: "Textiles",
    path: "/products/",
  },
];

const cartItems = computed(() => {
  let totalItems = 0;

  for (let item of cartStore.cart) {
    totalItems += item.count;
  }
  return totalItems;
});
</script>

<style lang="scss" scoped>
.header {
  height: 132px;
  background: var(--white);
  @media screen and (max-width: 767px) {
    height: auto;
  }
  &-top {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    padding: 20px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    @media screen and (max-width: 767px) {
      border: none;
      height: auto;
      display: flex;
    }
    &-search {
      @media screen and (max-width: 767px) {
        display: none;
      }
    }
    &__icon {
      display: block;
    }
    &-left {
      display: flex;
      align-items: center;
      @media screen and (max-width: 767px) {
        order: 3;
      }
    }
    &-mobile-menu {
      display: none;
      margin-left: 16px;
      @media screen and (max-width: 767px) {
        display: block;
      }
    }
    &-right {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      @media screen and (max-width: 767px) {
        order: 2;
      }
      &__cart {
        position: relative;
      }
      &__count {
        position: absolute;
        width: 15px;
        height: 15px;
        background: #000;
        border-radius: 50%;
        color: var(--white);
        font-size: 10px;
        text-decoration: none;
        display: flex;
        justify-content: center;
        align-items: center;
        left: -50%;
        bottom: 0;
      }
      &__user {
        margin-right: 16px;
      }
      &__cart,
      &__user a img {
        cursor: pointer;
        transition: all 0.3s ease;
        &:hover {
          transform: scale(1.3);
          transition: all 0.3s ease;
        }
      }
    }
  }
  &-logo {
    text-align: center;
    &__title {
      text-decoration: none;
      display: inline-block;
      &::after {
        content: "";
        background: var(--black);
        position: absolute;
        bottom: 2px;
        left: 50%;
        height: 1.7px;
        width: 0;
        transform: translateX(-50%);
        transition: width 0.3s ease;
      }
      &:hover {
        cursor: pointer;
        &::after {
          width: 100%;
          transition: width 0.3s ease;
        }
      }
    }
    @media screen and (max-width: 767px) {
      order: 1;
      margin-right: auto;
    }
  }
  &-menu {
    height: 62px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 767px) {
      display: none;
    }
    &__link {
      color: var(--light-primary);
      text-decoration: none;
      &:not(:last-of-type) {
        margin: 0 40px 0 0;
      }
      text-decoration: none;
      display: inline-block;
      &::after {
        content: "";
        background: var(--light-primary);
        position: absolute;
        bottom: 2px;
        left: 50%;
        height: 1.5px;
        width: 0;
        transform: translateX(-50%);
        transition: width 0.3s ease;
      }
      &:hover {
        cursor: pointer;
        &::after {
          width: 100%;
          transition: width 0.3s ease;
          color: inherit;
        }
      }
    }
    &-mobile {
      position: absolute;
      background: var(--white);
      padding: 40px 24px;
      top: 60px;
      border: 1px solid;
      width: 100%;
      padding: 10px;
      &__link {
        display: block;
        margin-bottom: 20px;
        color: var(--black);
        text-decoration: none;
        &:last-child {
          margin-bottom: 0;
        }
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
}
</style>
