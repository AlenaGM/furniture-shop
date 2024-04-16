<template>
  <footer class="footer">
    <div class="footer_container">
      <div class="footer_top">
        <div class="footer_menu">
          <div class="footer_menu__column">
            <span class="footer_menu__title">Menu</span>
            <ul>
              <li>
                <router-link to="/products" class="footer_menu__link"
                  >All products</router-link
                >
              </li>
              <li>
                <router-link to="/products/new" class="footer_menu__link"
                  >New arrivals</router-link
                >
              </li>
              <li>
                <router-link to="/products/popular" class="footer_menu__link"
                  >Best sellers</router-link
                >
              </li>
              <li>
                <router-link to="/products/sale" class="footer_menu__link"
                  >Last chance</router-link
                >
              </li>
              <li>
                <router-link to="/" class="footer_menu__link"
                  >Gift cards</router-link
                >
              </li>
            </ul>
          </div>
          <div class="footer_menu__column">
            <span class="footer_menu__title">Categories</span>
            <ul>
              <li>
                <router-link to="/products/furniture" class="footer_menu__link"
                  >Furniture</router-link
                >
              </li>
              <li>
                <router-link to="/products/lighting" class="footer_menu__link"
                  >Lighting</router-link
                >
              </li>
              <li>
                <router-link to="/products/decoration" class="footer_menu__link"
                  >Decoration</router-link
                >
              </li>
              <li>
                <router-link to="/products/tableware" class="footer_menu__link"
                  >Tableware</router-link
                >
              </li>
              <li>
                <router-link to="/products/textiles" class="footer_menu__link"
                  >Textiles</router-link
                >
              </li>
            </ul>
          </div>
          <div class="footer_menu__column">
            <span class="footer_menu__title">About us</span>
            <ul>
              <li>
                <router-link to="/about" class="footer_menu__link"
                  >Our story</router-link
                >
              </li>
              <li>
                <router-link to="/contact" class="footer_menu__link"
                  >Get in touch</router-link
                >
              </li>
              <li>
                <router-link to="/" class="footer_menu__link"
                  >Shipping information</router-link
                >
              </li>
              <li>
                <router-link to="/" class="footer_menu__link"
                  >Returns & exchanges</router-link
                >
              </li>
              <li>
                <router-link to="/" class="footer_menu__link"
                  >Privacy policy</router-link
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="footer_subscribe">
          <span class="footer_menu__title">Join our mailing list</span>
          <SubscribeForm
            colorButton="white"
            bgInput="rgba(255, 255, 255, 0.15)"
            colorText="#fff"
          />
        </div>
      </div>
      <div class="footer_bottom">
        <span class="footer_bottom__copyright"
          >Copyright {{ year }} Avion LTD</span
        >
        <span class="footer_bottom__socials">
          <a href="#">
            <img src="/svg/linkedin.svg" alt="linkedin" />
          </a>
          <a href="#">
            <img src="/svg/facebook.svg" alt="facebook" />
          </a>
          <a href="#">
            <img src="/svg/instagram.svg" alt="instagram" />
          </a>
          <a href="#">
            <img src="/svg/skype.svg" alt="skype" />
          </a>
          <a href="#">
            <img src="/svg/twitter.svg" alt="twitter" />
          </a>
          <a href="#">
            <img src="/svg/pinterest.svg" alt="pinterest" />
          </a>
        </span>
      </div>
    </div>
  </footer>
</template>

<script setup>
import SubscribeForm from "@/components/SubscribeForm.vue";

const date = new Date();
const year = date.getFullYear() || "2024";
</script>

<style lang="scss" scoped>
.footer {
  background: var(--dark-primary);
  color: var(--white);
  &_container {
    padding: 40px 0 20px;
    @media screen and (max-width: 768px) {
      padding: 20px 0;
    }
  }
  &_top {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 20px;
    border-bottom: 1px solid var(--primary);
    padding-bottom: 40px;
    @media screen and (max-width: 960px) {
      grid-template-columns: 1fr;
      padding-bottom: 20px;
    }
  }
  &_menu {
    display: grid;
    column-gap: 20px;
    row-gap: 40px;
    grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
    grid-auto-rows: 1fr;
    @media screen and (max-width: 1024px) {
      margin-bottom: 40px;
    }
    &__title {
      display: block;
      font-family: var(--second-family);
      font-size: 18px;
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
    &__column {
      li {
        margin-bottom: 12px;
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
  &_subscribe {
    display: flex;
    flex-direction: column;
  }
  &_bottom {
    padding-top: 20px;
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 768px) {
      display: block;
      text-align: center;
    }
    &__copyright {
      font-size: 14px;
      font-weight: 400;
      line-height: 19px;
      @media screen and (max-width: 768px) {
        display: block;
        margin-bottom: 20px;
      }
    }
    &__socials {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px 20px;
      flex-wrap: wrap;
      a {
        transition: all 0.3s ease;
        @media (any-pointer: fine) {
          &:hover {
            opacity: 0.6;
            transform: scale(1.2);
            transition: all 0.3s ease;
          }
        }
        img {
          width: 24px;
          height: 24px;
        }
      }
    }
  }
}
</style>
