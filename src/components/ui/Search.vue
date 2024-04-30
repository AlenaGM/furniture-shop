<template>
  <Transition name="search" :duration="1000">
    <div class="search_wrapper" v-if="open">
      <div
        class="search_overlay"
        @click="
          () => {
            clearSearch();
            $emit('close');
          }
        "
      >
        <div class="search_container" @click.stop v-scroll-lock="open">
          <div class="search_header">
            <div>
              <form
                class="search_form"
                id="searchForm"
                name="searchForm"
                @submit.prevent="
                  () => {
                    productStore.handleSearch(searchField);
                    $emit('close');
                  }
                "
              >
                <input
                  type="search"
                  placeholder="Find product, designer, color ..."
                  name="searchInput"
                  maxlength="64"
                  class="search_form__input input"
                  v-model.trim="searchField"
                />
              </form>
            </div>
            <div
              class="search_header__close"
              @click="
                () => {
                  clearSearch();
                  $emit('close');
                }
              "
            >
              <img src="/svg/menu-close.svg" alt="modal-close" />
            </div>
          </div>
          <!--
          <div class="search_body">
            <h3 class="search_title">
              {{
                searchedProducts.length
                  ? "Search results"
                  : "No results found for your search"
              }}
            </h3>
            <ul class="search_items" v-if="searchedProducts.length">
              <li v-for="(product, i) in searchedProducts" :key="i">
                <a :href="`/products/${product.id}`" class="search_items__link">
                  <img :src="product.img" :alt="product.name" />
                  <div>
                    {{ product.name }}
                  </div>
                </a>
              </li>
            </ul>
          </div>-->
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useProductStore } from "../../stores/products";
import api from "@/api.js";

//const products = ref([]);
const searchField = ref("");
const productStore = useProductStore();

//onMounted(async () => {
//  products.value = await api.getProducts();
//});
//
const props = defineProps({
  open: {
    type: Boolean,
  },
});

//const searchedProducts = computed(() => {
//  return products.value.filter(
//    (product) =>
//      product.category.toLowerCase() ===
//        searchField.value.trim().toLowerCase() ||
//      product.tags.includes(searchField.value.trim().toLowerCase())
//  );
//});
//
//const clearSearch = () => {
//  searchField.value = "";
//};
</script>

<style lang="scss">
.search {
  &_overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: grid;
    grid-template-columns: minmax(1.5rem, 1fr) minmax(auto, 1280px) minmax(
        1.5rem,
        1fr
      );
    justify-content: start;
    align-items: start;
    margin-left: calc(100vw - 100%);
    padding: 64px 0;
    background: rgba(34, 32, 46, 0.6);
    overflow-y: auto;
    z-index: 120;
  }
  &_container {
    position: relative;
    grid-column: 2;
    display: grid;
    gap: 40px;
    max-width: 640px;
    padding: 24px 32px;
    background: var(--white);
    z-index: 130;
    @media screen and (max-width: 768px) {
      width: 100%;
      min-width: auto;
      max-width: none;
      padding: 24px;
      gap: 20px;
    }
  }
  &_header {
    display: grid;
    grid-template-columns: 1fr 24px;
    width: 100%;
    gap: 24px;
    &__close {
      width: 24px;
      cursor: pointer;
    }
  }
  &_form {
    display: flex;
    &__input {
      flex-grow: 1;
      background-color: var(--light-gray);
      margin-bottom: 6px;
    }
  }
  &_body {
    display: grid;
    justify-items: start;
  }
  &_title {
    margin-bottom: 20px;
  }
  &_items {
    display: grid;
    gap: 20px;
    &__link {
      display: inline-flex;
      text-decoration: none;
      align-items: center;
      gap: 20px;
      img {
        height: 40px;
      }
      div {
        text-decoration: none;
        font-family: var(--second-family);
        font-size: 16px;
        color: var(--color-link);
        &::after {
          content: "";
          background: var(--color-link);
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
        @media screen and (max-width: 768px) {
          font-size: 14px;
        }
      }
    }
  }
}

.search_container,
.search_overlay {
  transition: all 0.7s ease;
}

.search-enter-active .search_container,
.search-leave-active .search_overlay {
  transition-delay: 0.3s;
}

.search-enter-from .search_overlay,
.search-leave-to .search_overlay {
  opacity: 0;
}

.search-enter-from .search_container,
.search-leave-to .search_container {
  -webkit-transform: translateY(-30px);
  transform: translateY(-30px);
  opacity: 0;
}
</style>
