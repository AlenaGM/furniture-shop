<template>
  <div class="cart">
    <h1 class="cart_title">Shopping cart</h1>
    <table class="cart_table table" v-if="cartStore.cart.length">
      <thead>
        <tr>
          <th>Product</th>
          <th>Quantity</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, index) in cartStore.cart"
          :key="item.id"
          class="cart_item item"
        >
          <td>
            <router-link :to="`/products/${item.id}`" class="item_image">
              <img :src="item.img" :alt="item.name" />
            </router-link>
          </td>
          <td>
            <router-link :to="`/products/${item.id}`" class="item_name">
              <span>{{ item.name }}</span>
            </router-link>
            <div class="item_price price">
              <span
                class="price__sale"
                v-if="item.tags.includes('sale') && cartStore.discount"
              >
                {{
                  FormatToCurrency(Math.round(item.price * cartStore.discount))
                }}</span
              >
              <span
                :class="{
                  price__strikeout:
                    item.tags.includes('sale') && cartStore.discount,
                }"
              >
                {{ FormatToCurrency(item.price) }}</span
              >
            </div>
          </td>
          <td>
            <div class="item_quantity">
              <span
                class="item_quantity__symbol"
                @click="cartStore.deleteItem(index)"
              >
                -
              </span>
              <span class="item_quantity__value">{{ item.count }}</span>
              <span
                class="item_quantity__symbol"
                @click="cartStore.addItem(index, item.stock)"
              >
                +
              </span>
            </div>
            <div class="item_remove" @click="cartStore.deleteFromCart(index)">
              delete
            </div>
          </td>
          <td>
            <span class="item_total">
              {{
                FormatToCurrency(
                  item.count *
                    Math.round(
                      item.tags.includes("sale") && cartStore.discount
                        ? item.price * cartStore.discount
                        : item.price
                    )
                )
              }}
            </span>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th class="cart_total">
            <span>Subtotal</span>
            {{ FormatToCurrency(cartStore.cartTotalPrice) }}
            <div>Taxes and shipping are calculated at checkout</div>
          </th>
        </tr>
      </tfoot>
    </table>
    <div class="cart_emptyMessage" v-else>Your shopping cart is empty</div>
    <ui-button
      class="cart_order"
      :mobileFullWidth="true"
      v-if="cartStore.cart.length"
      @click="toCheckout"
    >
      Go to checkout
    </ui-button>
    <ui-button
      class="cart_order"
      type="link"
      to="/products"
      :mobileFullWidth="true"
      v-else
    >
      Continue shopping
    </ui-button>
  </div>
  <teleport to="body">
    <modal-content
      :open="isModalOpen"
      @close="isModalOpen = false"
      title="Hello!"
      btn="Say 'No' and close"
      link="Send Postcard"
      to="/contact"
    >
      <div>
        <p>Thank you for checking out my project!</p>
        <p>
          This is a learning project, so I don't actually sell furniture, but I
          would love to send you a postcard from the French Alps if you'd like.
        </p>
        <p>
          Just click on the "send postcard" button and enter your postal
          address. If you'd rather not, just close the window.
        </p>
        <p style="color: #cc0000">
          In any case, I won't keep your information or share it with any third
          parties.
        </p>
      </div>
    </modal-content>
  </teleport>
</template>

<script setup>
import { ref } from "vue";
import { useCartStore } from "@/stores/cart.js";
import { FormatToCurrency } from "@/utils/formatter";
import uiButton from "@/components/ui/Button.vue";
import ModalContent from "@/components/ui/Modal.vue";

const cartStore = useCartStore();
const isModalOpen = ref(false);

const toCheckout = () => {
  isModalOpen.value = true;
  cartStore.emptyCart();
};
</script>

<style lang="scss" scoped>
.cart {
  background: var(--light-gray);
  line-height: 140%;
  &_title {
    grid-column: 2;
    grid-row: 1;
    padding: 80px 0 32px;
    text-align: center;
    @media screen and (max-width: 768px) {
      padding: 40px 0 16px;
    }
  }
  &_table {
    grid-column: 2;
    grid-row: 2;
    width: 100%;
    padding: 48px 64px;
    background-color: var(--white);
    font-family: var(--second-family);
    font-weight: 400;
    font-size: 18px;
    text-decoration: none;
    color: var(--dark-primary);
    @media screen and (max-width: 768px) {
      padding: 0 24px;
    }
    @media screen and (max-width: 540px) {
      font-size: 16px;
    }
  }
  &_total {
    font-family: var(--font-family);
    font-size: 24px;
    span {
      font-family: var(--second-family);
    }
    @media screen and (max-width: 768px) {
      font-size: 20px;
    }
  }
  &_emptyMessage {
    grid-column: 2;
    grid-row: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: var(--second-family);
    font-weight: 400;
    font-size: 20px;
    line-height: 140%;
    color: var(--dark-primary);
    margin: var(--section-gap);
    @media screen and (max-width: 768px) {
      font-size: 18px;
      margin: var(--section-gap-mobile);
    }
  }
  &_order {
    grid-column: 2;
    grid-row: 3;
    margin: var(--section-gap);
    justify-self: center;
    @media screen and (max-width: 560px) {
      margin: var(--section-gap-mobile);
    }
  }
}

.table {
  tr {
    display: grid;
    grid-template: 1fr / repeat(5, 1fr);
    column-gap: 20px;
    padding: 20px 0;
    align-items: center;
    @media screen and (max-width: 768px) {
      grid-template-columns: 1fr 2fr;
      row-gap: 20px;
    }
    @media screen and (max-width: 540px) {
      grid-template-columns: 1fr;
    }
  }
  thead {
    tr {
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      line-height: 140%;
      font-size: 20px;
    }
    th {
      &:first-of-type {
        grid-column: span 3;
        justify-self: start;
      }
      &:last-of-type {
        justify-self: end;
      }
    }
    @media screen and (max-width: 768px) {
      display: none;
    }
  }
  tbody {
    tr {
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    }
    td {
      &:first-of-type {
        display: flex;
      }
      &:nth-of-type(2) {
        grid-column: span 2;
        text-align: left;
        display: flex;
        flex-direction: column;
        row-gap: 6px;
        @media screen and (max-width: 768px) {
          grid-column: span 1;
          flex-direction: row;
          flex-wrap: wrap;
          align-items: baseline;
          justify-content: space-between;
        }
        @media screen and (max-width: 450px) {
          flex-direction: column;
        }
      }
      &:nth-of-type(3) {
        display: flex;
        flex-direction: column;
        row-gap: 12px;
        align-items: center;
        @media screen and (max-width: 540px) {
          align-items: flex-start;
        }
      }
      &:last-of-type {
        display: inline-flex;
        justify-self: end;
      }
    }
  }
  tfoot {
    th {
      grid-column: span 5;
      justify-self: end;
      align-self: start;
      line-height: 140%;
      text-decoration: none;
      text-align: right;
      div {
        font-family: var(--font-family);
        font-weight: 400;
        font-size: 16px;
        color: var(--color-text);
        @media screen and (max-width: 768px) {
          font-size: 14px;
        }
      }
    }
  }
}

.item {
  align-items: center;
  &_image {
    img {
      max-width: 180px;
      width: 100%;
      height: 100%;
      object-fit: cover;
      cursor: pointer;
    }
  }
  &_name {
    text-decoration: none;
    color: var(--dark-primary);
    span {
      font-size: 24px;
      line-height: 140%;
      margin-right: 6px;
      @media screen and (max-width: 900px) {
        font-size: 20px;
      }
      &::after {
        content: "";
        background: var(--dark-primary);
        position: absolute;
        bottom: 0;
        left: 50%;
        height: 1.5px;
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
  }
  &_price {
    span {
      font-family: var(--font-family);
    }
  }
  &_quantity {
    background: var(--light-gray);
    width: 122px;
    height: 46px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
    font-family: var(--font-family);
    &__symbol {
      color: var(--border-gray);
      cursor: pointer;
    }
  }
  &_remove {
    display: block;
    font-family: var(--font-family);
    font-size: 16px;
    &::after {
      content: "";
      background: var(--dark-primary);
      position: absolute;
      bottom: 2px;
      left: 50%;
      height: 1.5px;
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
    @media screen and (max-width: 540px) {
      display: none;
    }
  }
  &_total {
    font-family: var(--font-family);
  }
}
</style>
