<template>
  <header class="header" v-click-away="onClickAway">
    <div class="header-top">
      <div class="header-top-left">
        <router-link to="/" class="header-top-left__logo">
          <img src="/favicon/favicon.ico" alt="logo" />
        </router-link>
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
        <div
          class="header-top-right__mobile-menu"
          title="dropdown menu open and close"
          @click="onMenuToggle"
        >
          <img src="/svg/menu-open.svg" alt="menu" v-if="!isOpenedMobileMenu" />
          <img src="/svg/menu-close.svg" alt="menu" v-else />
        </div>
      </div>
    </div>
    <div class="header-menu" v-if="!isOpenedMobileMenu">
      <router-link
        class="header-menu__link"
        :to="element.path"
        v-for="(element, i) of menu"
        :key="i"
      >
        {{ element.name }}
      </router-link>
    </div>
    <div class="header-dropdown" v-if="isOpenedMobileMenu">
      <router-link
        class="header-dropdown__link"
        :to="element.path"
        v-for="(element, i) of menu"
        :key="i"
        @click="onClickAway"
      >
        {{ element.name }}
      </router-link>
    </div>
  </header>
  <div class="header-dropdown__overlay" v-if="isOpenedMobileMenu"></div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useCartStore } from "@/store/cart.js";

const isOpenedMobileMenu = ref(false);

const onMenuToggle = () => {
  isOpenedMobileMenu.value = !isOpenedMobileMenu.value;
  document.body.classList.toggle("_lock");
};

const onClickAway = () => {
  isOpenedMobileMenu.value = false;
  document.body.classList.remove("_lock");
};

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
  z-index: 90;
  background: var(--white);
  padding: 0 24px;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  @media screen and (max-width: 768px) {
    grid-template-rows: 1fr;
  }
  &-top {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 16px;
    min-height: 64px;
    align-items: center;
    justify-items: stretch;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    background: var(--white);
    z-index: 100;
    @media screen and (max-width: 768px) {
      display: grid;
      grid-template-columns: auto 1fr;
    }
    &-left {
      display: grid;
      align-items: center;
      &__logo {
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
      }
      @media screen and (max-width: 768px) {
        display: none;
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
        margin-right: auto;
      }
    }
    &-right {
      display: inline-flex;
      column-gap: 16px;
      align-items: center;
      justify-content: flex-end;
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
      &__cart a img,
      &__user a img,
      &__mobile-menu img {
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
      &__mobile-menu {
        display: none;
        img {
          width: 24px;
        }
        @media screen and (max-width: 768px) {
          display: block;
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
    min-height: 64px;
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
    z-index: 80;
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    height: 100vh;
    width: 80%;
    max-width: 340px;
    padding: 100px 64px 36px;
    background: var(--white);
    overflow-y: auto;
    transition: right 0.7s ease;
    border-left: 1px solid rgba(0, 0, 0, 0.1);
    @media screen and (min-width: 768px) {
      min-height: auto;
    }
    @media screen and (max-width: 284px) {
      width: 100%;
      padding: 100px 24px 36px;
    }
    &__link {
      display: block;
      font-size: 18px;
      color: var(--color-link);
      margin-bottom: 20px;
      text-decoration: none;
      &:last-child {
        margin-bottom: 0;
      }
    }
    &__overlay {
      background: rgba(34, 32, 46, 0.8);
      height: 100vh;
      width: 100vw;
      position: fixed;
      top: 0;
      opacity: 1;
      z-index: 70;
      @media screen and (max-width: 284px) {
        display: none;
      }
    }
  }
}
</style>
