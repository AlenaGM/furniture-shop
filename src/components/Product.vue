<template>
  <div class="product">
    <router-link to="/">
      <img :src="img" :alt="title" class="product-image" />
    </router-link>
    <router-link to="/" class="product-name">{{ title }}</router-link>
    <span class="product-price">£{{ price }}</span>
  </div>
</template>

<script setup>
const props = defineProps({
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

<style lang="scss">
.product {
  &-image {
    display: block;
    margin-bottom: 24px;
  }
  &-name {
    display: block;
    color: var(--dark-primary);
    font-family: var(--clash);
    font-size: 20px;
    font-weight: 400;
    line-height: 28px;
    text-decoration: none;
    margin-bottom: 8px;
    &:hover {
      text-decoration: underline;
    }
  }
  &-price {
    font-size: 18px;
    font-weight: 400;
    line-height: 27px;
  }
}
</style>
