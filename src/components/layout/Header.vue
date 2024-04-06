<template>
  <header class="header">
    <div class="header-top">
      <div class="header-top-left">
        <router-link to="/" class="header-top-left__logo">
          <img src="/favicon/favicon.ico" alt="logo" />
        </router-link>
      </div>
      <router-link
        to="/"
        class="header-top-name"
        @click="isMobileMenuOpen = false"
        ><div>Avion</div></router-link
      >
      <div class="header-top-right">
        <div class="header-top-right__user" @click="onUserClick">
          <!--<router-link to="/" @click="onUserClick">
            <img src="/svg/header-user.svg" alt="user" />
          </router-link>-->
          <img src="/svg/header-user.svg" alt="user" />
        </div>
        <div class="header-top-right__cart">
          <router-link to="/cart" @click="isMobileMenuOpen = false">
            <img src="/svg/header-cart.svg" alt="cart" />
            <span class="header-top-right__count" v-if="cartStore.cart.length">
              {{ cartItems }}
            </span>
          </router-link>
        </div>
        <div
          class="header-top-right__mobile-menu"
          title="dropdown menu open and close"
          @click="isMobileMenuOpen = !isMobileMenuOpen"
        >
          <img src="/svg/menu-open.svg" alt="menu" v-if="!isMobileMenuOpen" />
          <img src="/svg/menu-close.svg" alt="menu" v-else />
        </div>
      </div>
    </div>
    <div class="header-menu" v-if="!isMobileMenuOpen">
      <router-link
        class="header-menu__link"
        :to="`/products/${element.name.replace(/ .*/, '').toLowerCase()}`"
        v-for="(element, i) of menu"
        :key="i"
      >
        {{ element.name }}
      </router-link>
    </div>
    <Transition name="dropdown" :duration="1000">
      <div class="header-dropdown__wrapper" v-if="isMobileMenuOpen">
        <div class="header-dropdown__overlay" @click="isMobileMenuOpen = false">
          <div
            class="header-dropdown__container"
            @click.stop
            v-scroll-lock="isMobileMenuOpen"
          >
            <router-link
              class="header-dropdown__link"
              :to="element.path"
              v-for="(element, i) of menu"
              :key="i"
              @click="isMobileMenuOpen = false"
            >
              {{ element.name }}
            </router-link>
          </div>
        </div>
      </div>
    </Transition>
  </header>
  <teleport to="body">
    <modal-content
      :open="isModalOpen"
      @close="isModalOpen = false"
      title="Thank you for your interest. The personal account functionality is still in development."
    >
    </modal-content>
  </teleport>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useCartStore } from "@/store/cart.js";
import { useRoute } from "vue-router";
import api from "@/api.js";
const isMobileMenuOpen = ref(false);
import ModalContent from "@/components/ui/Modal.vue";

const isModalOpen = ref(false);

const onUserClick = () => {
  console.log("Click on user");
  isModalOpen.value = true;
};

const menu = [
  {
    name: "New arrivals",
  },
  {
    name: "Furniture",
  },
  {
    name: "Lighting",
  },
  {
    name: "Decoration",
  },
  {
    name: "Tableware",
  },
  {
    name: "Textiles",
  },
  {
    name: "All products",
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
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: 1.5rem 1fr 1.5rem;
  @media screen and (max-width: 768px) {
    grid-template-rows: 1fr;
  }
  &-top {
    grid-column: 2;
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
      grid-column: 1/4;
      padding: 0 24px;
      display: grid;
      grid-template-columns: auto 1fr;
    }
    &-left {
      display: grid;
      align-items: center;
      &__logo {
        width: 28px;
        height: 28px;
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
    grid-column: 2;
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
    &__overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100%;
      display: flex;
      justify-content: flex-end;
      background: rgba(34, 32, 46, 0.8);
      z-index: 70;
    }
    &__container {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      height: 100vh;
      width: 80%;
      max-width: 340px;
      padding: 100px 64px 36px;
      background: var(--white);
      overflow-y: auto;
      border-left: 1px solid rgba(0, 0, 0, 0.1);
      z-index: 80;
      @media screen and (min-width: 768px) {
        min-height: auto;
      }
      @media screen and (max-width: 284px) {
        width: 100%;
        padding: 100px 24px 36px;
      }
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
  }
}

.header-dropdown__container,
.header-dropdown__overlay {
  transition: all 0.7s ease;
}

.dropdown-enter-active .header-dropdown__container,
.dropdown-leave-active .header-dropdown__overlay {
  transition-delay: 0.3s;
}

.dropdown-enter-from .header-dropdown__overlay,
.dropdown-leave-to .header-dropdown__overlay {
  opacity: 0;
}

.dropdown-enter-from .header-dropdown__container,
.dropdown-leave-to .header-dropdown__container {
  -webkit-transform: translateX(100px);
  transform: translateX(100px);
  opacity: 0;
}
</style>
