<template>
  <div class="subscribe">
    <div class="subscribe-content">
      <h2 class="subscribe-title">Join the club and get the benefits</h2>
      <span class="subscribe-description text"
        >Sign up for our newsletter and receive exclusive offers on new ranges,
        sales, pop up stores and more</span
      >
      <div class="subscribe-checks">
        <div class="subscribe-check">
          <img
            src="/svg/check.svg"
            alt="checkbox"
            class="subscribe-check__icon"
          />
          <span class="subscribe-check__name text-sm">Exclusive offers</span>
        </div>
        <div class="subscribe-check">
          <img
            src="/svg/check.svg"
            alt="checkbox"
            class="subscribe-check__icon"
          />
          <span class="subscribe-check__name text-sm">Free events</span>
        </div>
        <div class="subscribe-check">
          <img
            src="/svg/check.svg"
            alt="checkbox"
            class="subscribe-check__icon"
          />
          <span class="subscribe-check__name text-sm">Large discounts</span>
        </div>
      </div>
      <SubscribeForm />
    </div>
  </div>
</template>

<script setup>
import SubscribeForm from "@/components/SubscribeForm.vue";
</script>

<style lang="scss" scoped>
.subscribe {
  background: url("/img/subscribe.jpg");
  background-size: cover;
  padding: 40px 0 80px;
  @media screen and (max-width: 768px) {
    background-image: url("/img/subscribe-mobile.jpg");
    padding: 20px 0 40px;
  }
  &-content {
    max-width: 560px;
    margin: auto;
    text-align: center;
    color: var(--white);
    @media screen and (max-width: 768px) {
      text-align: left;
    }
  }
  &-title {
    display: block;
    color: var(--white);
  }
  &-description {
    display: block;
    color: var(--white);
    margin-bottom: 30px;
    @media screen and (max-width: 768px) {
      margin-bottom: 20px;
    }
  }
  &-checks {
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
    @media screen and (max-width: 768px) {
      display: block;
    }
  }
  &-check {
    display: flex;
    align-items: center;
    &:nth-child(2) {
      margin: 0 36px;
      @media screen and (max-width: 768px) {
        margin: 0 0 8px 0;
      }
    }
    @media screen and (max-width: 768px) {
      margin-bottom: 8px;
    }
    &__icon {
      margin-right: 9px;
    }
    &__name {
      color: var(--white);
    }
  }
}
</style>
