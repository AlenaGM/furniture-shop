<template>
  <header class="header">
    <div class="header-top" v-click-away="onClickAway">
      <div class="header-top-left">
        <router-link to="/" class="header-top-logo">
          <img src="/favicon/favicon.ico" alt="logo" />
        </router-link>
        <div
          class="header-top-mobile-menu"
          title="dropdown menu open and close"
          @click="onMobileMenuClick"
        >
          <img src="/svg/menu-open.svg" alt="menu" v-if="!isOpenedMobileMenu" />
          <img src="/svg/menu-close.svg" alt="menu" v-else />
        </div>
      </div>
      <router-link to="/" class="header-top-name" @click="onClickAway"
        ><div>Avion</div></router-link
      >
      <div class="header-top-right">
        <div class="header-top-right__user">
          <router-link to="/" @click="onClickAway">
            <img src="/svg/header-user.svg" alt="user" />
          </router-link>
        </div>
        <div class="header-top-right__cart">
          <router-link to="/cart" @click="onClickAway">
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
    <div class="header-dropdown__overlay" v-if="isOpenedMobileMenu">
      <div class="header-dropdown" v-if="isOpenedMobileMenu">
        <router-link
          class="header-dropdown__link"
          :to="element.path"
          v-for="(element, i) of menu"
          :key="i"
          @click="isOpenedMobileMenu = false"
        >
          {{ element.name }}
        </router-link>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, computed } from "vue";
import { useCartStore } from "@/store/cart.js";

const isOpenedMobileMenu = ref(false);

const onClickAway = () => {
  isOpenedMobileMenu.value = false;
  document.body.classList.remove("_lock");
};

const onMobileMenuClick = () => {
  isOpenedMobileMenu.value = !isOpenedMobileMenu.value;
  document.body.classList.toggle("_lock");
};

//document.body.classList.toggle("_lock");

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

const cartStore = useCartStore();

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
  min-height: 128px;
  grid-template-rows: 1fr minmax(1fr, auto);
  background: var(--white);

  @media screen and (max-width: 768px) {
    grid-template-rows: 1fr;
    min-height: 64px;
  }
  &-top {
    z-index: 100;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    background: var(--white);
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);

    @media screen and (max-width: 768px) {
      display: flex;
    }
    &-left {
      display: flex;
      align-items: center;
      @media screen and (max-width: 768px) {
        order: 3;
      }
    }
    &-logo {
      width: 32px;
      height: 32px;
      display: block;
      img {
        position: absolute;
        top: 0;
        left: 0;
        object-fit: cover;
        cursor: pointer;
        transition: all 0.3s ease;
        @media (any-pointer: fine) {
          &:hover {
            transform: scale(1.2);
            transition: all 0.3s ease;
          }
        }
      }
      @media screen and (max-width: 768px) {
        display: none;
      }
    }
    &-mobile-menu {
      display: none;
      margin-left: 16px;
      img {
        width: 24px;
        cursor: pointer;
        transition: all 0.3s ease;
        @media (any-pointer: fine) {
          &:hover {
            transform: scale(1.2);
            transition: all 0.3s ease;
          }
        }
      }
      @media screen and (max-width: 768px) {
        display: block;
      }
    }
    &-name {
      text-align: center;
      div {
        text-decoration: none;
        display: inline-block;
        font-family: var(--second-family);
        font-weight: 400;
        font-size: 24px;
        line-height: 150%;
        color: var(--black);
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
        @media (any-pointer: fine) {
          &:hover {
            cursor: pointer;
            &::after {
              width: 100%;
              transition: width 0.3s ease;
            }
          }
        }
      }
      @media screen and (max-width: 768px) {
        order: 1;
        margin-right: auto;
      }
    }
    &-right {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      @media screen and (max-width: 768px) {
        order: 2;
      }
      &__cart {
        position: relative;
      }
      &__count {
        position: absolute;
        left: -30%;
        bottom: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 16px;
        height: 16px;
        background: var(--black);
        border-radius: 50%;
        font-family: var(--font-family);
        font-size: 10px;
        color: var(--white);
        text-decoration: none;
      }
      &__user {
        margin-right: 16px;
      }
      &__cart,
      &__user a img {
        width: 22px;
        cursor: pointer;
        transition: all 0.3s ease;
        @media (any-pointer: fine) {
          &:hover {
            transform: scale(1.2);
            transition: all 0.3s ease;
          }
        }
      }
    }
  }
  &-menu {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    column-gap: 36px;
    row-gap: 4px;
    @media screen and (max-width: 768px) {
      display: none;
    }
    &__link {
      color: var(--color-link);
      text-decoration: none;
      display: inline-block;
      &::after {
        content: "";
        background: var(--color-link);
        position: absolute;
        bottom: 2px;
        left: 50%;
        height: 1.5px;
        width: 0;
        transform: translateX(-50%);
        transition: width 0.3s ease;
      }
      @media (any-pointer: fine) {
        &:hover {
          cursor: pointer;
          &::after {
            width: 100%;
            transition: width 0.3s ease;
            color: inherit;
          }
        }
      }
    }
  }
  &-dropdown {
    z-index: 90;
    position: fixed;
    top: 0px;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    min-height: 100vh;
    width: 80vw;
    min-width: 240px;
    max-width: 340px;
    padding: 100px 64px 36px;
    background: var(--white);
    border-left: 1px solid rgba(0, 0, 0, 0.1);
    overflow-y: auto;
    &__link {
      display: block;
      color: var(--color-link);
      margin-bottom: 20px;
      text-decoration: none;
      &:last-child {
        margin-bottom: 54px;
      }
    }
    &__overlay {
      background: rgba(34, 32, 46, 0.8);
      height: 100vh;
      width: 100vw;
      position: fixed;
      left: 0;
      top: 0;
      z-index: 80;
    }
    @media screen and (min-width: 768px) {
      min-height: auto;
    }
  }
}
</style>
