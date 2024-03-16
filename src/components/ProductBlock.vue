<template>
  <div class="product">
    <router-link :to="`/products/${id}`">
      <img :src="img" :alt="title" class="product-image" />
    </router-link>
    <router-link :to="`/products/${id}`" class="product-name"
      ><h4>{{ title }}</h4></router-link
    >
    <span class="product-price text">€{{ price }}</span>
  </div>
</template>

<script setup>
const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.product {
  &-image {
    display: block;
    margin-bottom: 20px;
    object-fit: cover;
  }
  &-name {
    display: inline-block;
    text-decoration: none;
    &::after {
      content: "";
      background: var(--dark-primary);
      position: absolute;
      bottom: 2px;
      left: 0;
      height: 1.5px;
      width: 0;
      transition: width 0.25s ease;
    }
    @media (any-pointer: fine) {
      &:hover {
        cursor: pointer;
        &::after {
          width: 100%;
          transition: width 0.25s ease;
          color: inherit;
        }
      }
    }
  }
  &-price {
    display: block;
  }
}
</style>
