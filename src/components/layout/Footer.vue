<template>
  <div class="footer">
    <div class="footer-content">
      <div class="footer-top">
        <div class="footer-menu">
          <div class="footer-menu-column">
            <span class="footer-menu__title">Menu</span>
            <ul>
              <li>
                <router-link to="/products" class="footer-menu__link"
                  >All products</router-link
                >
              </li>
              <li>
                <router-link to="/" class="footer-menu__link"
                  >New arrivals</router-link
                >
              </li>
              <li>
                <router-link to="/" class="footer-menu__link"
                  >Best sellers</router-link
                >
              </li>
              <li>
                <router-link to="/" class="footer-menu__link"
                  >Last chance</router-link
                >
              </li>
              <li>
                <router-link to="/" class="footer-menu__link"
                  >Gift cards</router-link
                >
              </li>
            </ul>
          </div>
          <div class="footer-menu-column">
            <span class="footer-menu__title">Categories</span>
            <ul>
              <li>
                <router-link to="/products" class="footer-menu__link"
                  >Furniture</router-link
                >
              </li>
              <li>
                <router-link to="/products" class="footer-menu__link"
                  >Lighting</router-link
                >
              </li>
              <li>
                <router-link to="/products" class="footer-menu__link"
                  >Decoration</router-link
                >
              </li>
              <li>
                <router-link to="/products" class="footer-menu__link"
                  >Tableware</router-link
                >
              </li>
              <li>
                <router-link to="/products" class="footer-menu__link"
                  >Textiles</router-link
                >
              </li>
            </ul>
          </div>
          <div class="footer-menu-column">
            <span class="footer-menu__title">About us</span>
            <ul>
              <li>
                <router-link to="/about" class="footer-menu__link"
                  >Our story</router-link
                >
              </li>
              <li>
                <router-link to="/" class="footer-menu__link"
                  >Get in touch</router-link
                >
              </li>
              <li>
                <router-link to="/" class="footer-menu__link"
                  >Shipping information</router-link
                >
              </li>
              <li>
                <router-link to="/" class="footer-menu__link"
                  >Returns & exchanges</router-link
                >
              </li>
              <li>
                <router-link to="/" class="footer-menu__link"
                  >Privacy policy</router-link
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="footer-subscribe">
          <SubscribeForm
            colorButton="white"
            bgInput="rgba(255, 255, 255, 0.15)"
            colorText="#fff"
          />
        </div>
      </div>
      <div class="footer-bottom">
        <span class="footer-bottom__copyright">Copyright 2024 Avion LTD</span>
        <span class="footer-bottom-socials">
          <a href="#" class="footer-bottom-socials__link">
            <img src="/svg/linkedin.svg" alt="linkedin" />
          </a>
          <a href="#" class="footer-bottom-socials__link">
            <img src="/svg/facebook.svg" alt="facebook" />
          </a>
          <a href="#" class="footer-bottom-socials__link">
            <img src="/svg/instagram.svg" alt="instagram" />
          </a>
          <a href="#" class="footer-bottom-socials__link">
            <img src="/svg/skype.svg" alt="skype" />
          </a>
          <a href="#" class="footer-bottom-socials__link">
            <img src="/svg/twitter.svg" alt="twitter" />
          </a>
          <a href="#" class="footer-bottom-socials__link">
            <img src="/svg/pinterest.svg" alt="pinterest" />
          </a>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import SubscribeForm from "@/components/SubscribeForm.vue";
</script>

<style lang="scss" scoped>
.footer {
  background: var(--dark-primary);
  color: var(--white);
  &-content {
    padding: 58px 82px 25px 82px;
    @media screen and (max-width: 1024px) {
      padding: 58px 30px 25px 30px;
    }
    @media screen and (max-width: 767px) {
      padding: 40px 25px;
    }
  }
  &-top {
    display: grid;
    grid-template-columns: 540px 1fr;
    column-gap: 110px;
    border-bottom: 1px solid var(--primary);
    padding-bottom: 48px;
    @media screen and (max-width: 1150px) {
      column-gap: 10px;
      grid-template-columns: 450px 1fr;
    }
    @media screen and (max-width: 1024px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 767px) {
      grid-template-columns: 1fr;
      padding-bottom: 24px;
    }
  }
  &-menu {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    @media screen and (max-width: 1024px) {
      grid-template-columns: repeat(2, 1fr);
    }
    &__title {
      display: block;
      font-family: var(--second-family);
      font-size: 16px;
      font-weight: 400;
      line-height: 20px;
      margin-bottom: 12px;
    }
    &__link {
      color: var(--white);
      font-family: var(--font-family);
      font-size: 14px;
      font-weight: 400;
      line-height: 19px;
      text-decoration: none;
      display: inline-block;
      &::after {
        content: "";
        background: var(--white);
        position: absolute;
        bottom: -1px;
        left: 50%;
        height: 1px;
        width: 0;
        transform: translateX(-50%);
        transition: width 0.3s ease;
      }
      &:hover {
        cursor: pointer;
        &::after {
          width: 100%;
          transition: width 0.3s ease;
        }
      }
    }
    &-column {
      @media screen and (max-width: 767px) {
        margin-bottom: 40px;
      }
      li {
        margin-bottom: 12px;
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
  &-bottom {
    padding-top: 22px;
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 767px) {
      display: block;
      text-align: center;
    }
    &__copyright {
      font-size: 14px;
      font-weight: 400;
      line-height: 19px;
      @media screen and (max-width: 767px) {
        display: block;
        margin-bottom: 24px;
      }
    }
    &-socials {
      display: flex;
      align-items: center;
      justify-content: center;
      &__link {
        margin: 0 12px;
        &:hover {
          opacity: 0.8;
        }
      }
    }
  }
}
</style>
