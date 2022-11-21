<template>
  <header class="header">
    <div class="header-top">
      <div class="header-top-search">
        <img src="/svg/header-search.svg" alt="search" />
      </div>
      <a href="#" class="header-logo">Avion</a>
      <div class="header-top-right">
        <div href="#" class="header-top-right__cart">
          <a href="#">
            <img src="/svg/header-cart.svg" alt="cart" />
          </a>
        </div>
        <div href="#" class="header-top-right__user">
          <a href="#">
            <img src="/svg/header-user.svg" alt="usert" />
          </a>
        </div>
      </div>
    </div>
    <div class="header-menu">
      <a
        class="header-menu__link"
        href="element.path"
        v-for="(element, i) of menu"
        :key="i"
      >
        {{ element.name }}
      </a>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";

const menu = [
  {
    name: "Plant pots",
    path: "/plantpots",
  },
  {
    name: "Ceramics",
    path: "/ceramics",
  },
  {
    name: "Tables",
    path: "/tables",
  },
  {
    name: "Chairs",
    path: "/chairs",
  },
  {
    name: "Crockery",
    path: "/crockery",
  },
  {
    name: "Tableware",
    path: "/tableware",
  },
  {
    name: "Cutlery",
    path: "/cutlery",
  },
];
</script>

<style lang="scss" scoped>
.header {
  height: 132px;
  background: var(--white);
  &-top {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    height: 70px;
    align-items: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    margin: 0 28px;
    &-right {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      &__cart {
        margin-right: 16px;
      }
    }
  }
  &-logo {
    color: var(--black);
    font-size: 24px;
    text-decoration: none;
    font-family: var(--clash);
    text-align: center;
    &:hover {
      text-decoration: underline;
    }
  }
  &-menu {
    height: 62px;
    display: flex;
    justify-content: center;
    align-items: center;
    &__link {
      margin: 0 22px;
      color: var(--lilac);
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
