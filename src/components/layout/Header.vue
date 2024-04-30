<template>
  <header class="header">
    <div class="header_top">
      <div
        class="header_top-left__search search"
        title="search form open and close"
      >
        <img
          src="/svg/header-search.svg"
          alt="search"
          class="search_icon"
          v-if="!isSearchOpen"
          @click="onSearchOpen()"
        />
        <img
          src="/svg/menu-close.svg"
          alt="close"
          class="search_icon"
          v-else
          @click="isSearchOpen = false"
        />
      </div>
      <router-link
        to="/"
        class="header_top-center"
        @click="isMobileMenuOpen = false"
        ><div>Avion</div></router-link
      >
      <div class="header_top-right">
        <div class="header_top-right__user" @click="onUserClick">
          <!--<router-link to="/" @click="onUserClick">
            <img src="/svg/header-user.svg" alt="user" />
          </router-link>-->
          <img src="/svg/header-user.svg" alt="user" />
        </div>
        <div class="header_top-right__cart">
          <router-link to="/cart" @click="isMobileMenuOpen = false">
            <img src="/svg/header-cart.svg" alt="cart" />
            <span
              class="header_top-right__cart-count"
              v-if="cartStore.cart.length"
            >
              {{ cartStore.cartTotalItems }}
            </span>
          </router-link>
        </div>
        <div
          class="header_top-right__mobile-menu"
          title="dropdown menu open and close"
          @click="onMobileMenuClick"
        >
          <img
            src="/svg/menu-open.svg"
            alt="mobile menu"
            v-if="!isMobileMenuOpen"
          />
          <img src="/svg/menu-close.svg" alt="close" v-else />
        </div>
      </div>
      <Transition name="search">
        <div class="header_search__wrapper" v-if="isSearchOpen">
          <div class="header_search__container">
            <form
              class="header_search__form"
              is="searchForm"
              name="searchForm"
              @submit.prevent="handleSearch(searchField)"
            >
              <input
                type="search"
                placeholder="Find product, designer ..."
                name="searchInput"
                maxlength="64"
                class="header_search__input"
                v-model.trim="searchField"
              />
              <button type="submit" class="header_search__btn">
                <img
                  src="/svg/header-search-white.svg"
                  alt="search"
                  class="search_icon"
                />
              </button>
            </form>
          </div>
        </div>
      </Transition>
    </div>
    <div class="header_menu" v-if="!isMobileMenuOpen">
      <router-link
        class="header_menu__link"
        :to="`/products/${element.replace(/ .*/, '').toLowerCase()}`"
        v-for="(element, i) of menu"
        :key="i"
      >
        {{ element }}
      </router-link>
    </div>
  </header>
  <Transition name="dropdown" :duration="1000">
    <div class="header_dropdown__wrapper" v-if="isMobileMenuOpen">
      <div class="header_dropdown__overlay" @click="isMobileMenuOpen = false">
        <div
          class="header_dropdown__container"
          @click.stop
          v-scroll-lock="isMobileMenuOpen"
        >
          <router-link
            class="header_dropdown__link"
            :to="`/products/${element.replace(/ .*/, '').toLowerCase()}`"
            v-for="(element, i) of menu"
            :key="i"
            @click="isMobileMenuOpen = false"
          >
            {{ element }}
          </router-link>
        </div>
      </div>
    </div>
  </Transition>
  <teleport to="body">
    <modal-content
      :open="isModalOpen"
      @close="isModalOpen = false"
      title="Thank you for your interest! "
      >The personal account functionality is still in development.
    </modal-content>
  </teleport>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useCartStore } from "@/stores/cart.js";
import ModalContent from "@/components/ui/Modal.vue";
import { useProductStore } from "../../stores/products";

const cartStore = useCartStore();
const productStore = useProductStore();

const isMobileMenuOpen = ref(false);
const isModalOpen = ref(false);
const isSearchOpen = ref(false);

const searchField = ref("");
const router = useRouter();

const onUserClick = () => {
  isModalOpen.value = true;
  isMobileMenuOpen.value = false;
  isSearchOpen.value = false;
};

const onMobileMenuClick = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
  isSearchOpen.value = false;
  isModalOpen.value = false;
};

const onSearchOpen = () => {
  isSearchOpen.value = true;
  isMobileMenuOpen.value = false;
};

const handleSearch = () => {
  productStore.attributeSearch(searchField);
  router.push("/products/search");
  isSearchOpen.value = false;
  searchField.value = "";
};

const menu = [
  "New arrivals",
  "Furniture",
  "Lighting",
  "Decoration",
  "Tableware",
  "Textiles",
  "All products",
  "Sale",
];
</script>

<style lang="scss" scoped>
.header {
  z-index: 90;
  background: var(--white);
  &_top {
    grid-column: 2;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 16px;
    min-height: 64px;
    align-items: center;
    justify-items: stretch;
    padding-top: 8px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    background: var(--white);
    z-index: 100;
    @media screen and (max-width: 768px) {
      grid-template-columns: auto 1fr auto;
    }
    &-left__search {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      @media screen and (max-width: 768px) {
        order: 2;
        justify-content: flex-end;
      }
      .search_icon {
        width: 22px;
        height: 22px;
        margin-bottom: 4px;
        cursor: pointer;
        @media (any-pointer: fine) {
          &:hover {
            transform: scale(1.2);
            transition: all 0.3s ease;
          }
        }
      }
    }
    &-center {
      text-align: center;
      @media screen and (max-width: 768px) {
        order: 1;
      }
      div {
        text-decoration: none;
        display: inline-block;
        font-family: var(--second-family);
        font-weight: 400;
        font-size: 24px;
        line-height: 140%;
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
    }
    &-right {
      display: inline-flex;
      column-gap: 16px;
      align-items: center;
      justify-content: flex-end;
      @media screen and (max-width: 768px) {
        order: 3;
      }
      &__cart {
        position: relative;
        &-count {
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
      }
      &__user img,
      &__cart a img,
      &__mobile-menu img {
        width: 22px;
        height: 22px;
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
        @media screen and (max-width: 768px) {
          display: block;
        }
        img {
          width: 24px;
        }
      }
    }
  }
  &_menu {
    grid-column: 2;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    column-gap: 28px;
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
      &:last-of-type {
        color: var(--red);
        &::after {
          background: var(--red);
        }
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
  &_dropdown {
    &__overlay {
      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: flex-end;
      background: rgba(34, 32, 46, 0.6);
      z-index: 70;
    }
    &__container {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      height: 100%;
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
      @media screen and (max-width: 365px) {
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
  &_search {
    &__wrapper {
      width: 100%;
      max-width: 480px;
      position: absolute;
      top: 64px;
      @media screen and (max-width: 768px) {
        max-width: none;
      }
    }
    &__container {
      position: relative;
      min-height: 64px;
      background: var(--white);
      display: flex;
      padding: 24px;
      box-shadow: 0 4px 5px -1px rgba(0, 0, 0, 0.1);
      @media screen and (max-width: 768px) {
        padding: 18px;
      }
    }
    &__form {
      display: flex;
      flex-grow: 1;
      min-height: 36px;
    }
    &__input {
      display: flex;
      flex-grow: 1;
      background-color: var(--light-gray);
      font-family: var(--font-family);
      font-weight: 400;
      font-size: 16px;
      line-height: 140%;
      padding: 6px 14px;
      border: none;
      outline: none;
      @media screen and (max-width: 768px) {
        font-size: 14px;
        padding: 0 16px;
      }
    }
    &__btn {
      background: var(--dark-primary);
      position: relative;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      height: 36px;
      width: 36px;
      padding: 6px;
      border: none;
      cursor: pointer;
      transition: opacity 0.3s ease;
      @media (any-pointer: fine) {
        &:hover {
          opacity: 0.6;
          transition: opacity 0.3s ease;
        }
      }
      img {
        width: 100%;
      }
    }
  }
}

.header_dropdown__container,
.header_dropdown__overlay {
  transition: all 0.7s ease;
}

.dropdown-enter-active .header_dropdown__container,
.dropdown-leave-active .header_dropdown__overlay {
  transition-delay: 0.3s;
}

.dropdown-enter-from .header_dropdown__overlay,
.dropdown-leave-to .header_dropdown__overlay {
  opacity: 0;
}

.dropdown-enter-from .header_dropdown__container,
.dropdown-leave-to .header_dropdown__container {
  -webkit-transform: translateX(100px);
  transform: translateX(100px);
  opacity: 0;
}

.search-enter-active,
.search-leave-active {
  transition: all 0.7s ease;
}

.search-enter-from,
.search-leave-to {
  -webkit-transform: translateY(-30px);
  transform: translateY(-30px);
  opacity: 0;
}
</style>
