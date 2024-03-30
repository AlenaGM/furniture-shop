<template>
  <Transition name="banner">
    <div class="banner-wrapper" v-if="shown">
      <div class="banner-container">
        <div class="banner-message">
          <slot>
            <img src="/svg/delivery.svg" />{{
              "Free delivery on orders over 99€"
            }}</slot
          >
        </div>
        <div class="banner-close" @click="$emit('close')">
          <img src="/svg/close-white.svg" />
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  shown: {
    type: Boolean,
  },
});
</script>

<style lang="scss">
.banner {
  &-wrapper {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 110;
  }
  &-container {
    background: var(--dark-primary);
    color: var(--white);
    display: grid;
    grid-template-columns: 24px 1fr 24px;
    padding: 6px 24px 6px;
    align-items: center;
    justify-items: center;
    max-width: 1440px;
    margin: 0 auto;
    @media screen and (max-width: 768px) {
      grid-template-columns: 1fr 24px;
      justify-items: stretch;
    }
  }
  &-message {
    grid-column: 2;
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 14px;
    color: var(--white);
    img {
      margin-right: 8px;
      margin-top: 4px;
      width: 18px;
    }
    @media screen and (max-width: 768px) {
      grid-column: 1;
    }
  }
  &-close {
    grid-column: 3;
    cursor: pointer;
    img {
      display: block;
    }
    @media screen and (max-width: 768px) {
      grid-column: 2;
    }
  }
}
</style>

<!-- Add to child component

<template>
  <teleport to="body">
    <banner-content
      :open="isBannerShown"
      @close="isBannerShown = false"
      msg="XXX"
    >
    </banner-content>
  </teleport>
</template>

<script setup>
import BannerContent from "@/components/ui/Banner.vue";
import { ref } from "vue";

const isBannerShown = ref(true);
</script>
-->
