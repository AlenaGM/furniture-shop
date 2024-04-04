<template>
  <div class="products">
    <ProductBlock
      v-for="product of products"
      :id="product.id"
      :key="product.id"
      :img="product.img"
      :name="product.name"
      :price="product.price"
    />
  </div>
</template>

<script setup>
import ProductBlock from "@/components/ProductBlock.vue";

const props = defineProps({
  products: {
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.products {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 80px;
  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
  }
  @media screen and (max-width: 768px) {
    margin-bottom: 40px;
  }
}
</style>
