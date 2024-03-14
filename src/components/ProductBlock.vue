<template>
  <div class="product">
    <router-link :to="`/products/${id}`">
      <img :src="img" :alt="title" class="product-image" />
    </router-link>
    <router-link :to="`/products/${id}`" class="product-name">{{
      title
    }}</router-link>
    <span class="product-price">£{{ price }}</span>
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
    margin-bottom: 24px;
    object-fit: cover;
  }
  &-name {
    display: block;
    color: var(--dark-primary);
    font-family: var(--second-family);
    font-size: 20px;
    font-weight: 400;
    line-height: 28px;
    text-decoration: none;
    margin-bottom: 8px;
    display: inline-block;
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
    @media screen and (max-width: 768px) {
      font-size: 18px;
    }
  }
  &-price {
    display: block;
    font-size: 18px;
    font-weight: 400;
    line-height: 27px;
    color: var(--dark-primary);
    @media screen and (max-width: 768px) {
      font-size: 16px;
    }
  }
}
</style>
