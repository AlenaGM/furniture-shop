<template>
  <div class="cart">
    <h1 class="cart__title">Shopping cart</h1>
    <table class="cart__table table" v-if="cartStore.cart.length">
      <thead>
        <tr>
          <th>Product</th>
          <th>Quantity</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in cartStore.cart" :key="item.id">
          <td>
            <router-link :to="`/products/${item.id}`">
              <img :src="item.image" :alt="item.name" />
            </router-link>
          </td>
          <td>
            <router-link :to="`/products/${item.id}`">
              <span class="cart__item_name">{{ item.name }}</span>
            </router-link>
            {{
              new Intl.NumberFormat("fr-FR", {
                style: "currency",
                currency: "EUR",
                minimumFractionDigits: 0,
              }).format(item.price || 0)
            }}
          </td>
          <td>
            <div class="cart-quantity">
              <span
                class="cart-quantity-symbol"
                @click="cartStore.deleteItem(index)"
              >
                -
              </span>
              <span class="cart-quantity-value">{{ item.count }}</span>
              <span
                class="cart-quantity-symbol"
                @click="cartStore.addItem(index)"
              >
                +
              </span>
            </div>
            <div class="cart-delete" @click="cartStore.deleteFromCart(index)">
              delete
            </div>
          </td>
          <td>
            <span>
              {{
                new Intl.NumberFormat("fr-FR", {
                  style: "currency",
                  currency: "EUR",
                  minimumFractionDigits: 0,
                }).format(item.count * item.price || 0)
              }}
            </span>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th class="table__total">
            <span>Subtotal</span>
            {{
              new Intl.NumberFormat("fr-FR", {
                style: "currency",
                currency: "EUR",
                minimumFractionDigits: 0,
              }).format(cartTotal || 0)
            }}
            <div>Taxes and shipping are calculated at checkout</div>
          </th>
        </tr>
      </tfoot>
    </table>
    <div class="cart__emptyMessage" v-else>Your shopping cart is empty</div>
    <ui-button
      class="cart__order"
      :mobileFullWidth="true"
      v-if="cartStore.cart.length"
      @click="toCheckout"
    >
      Go to checkout
    </ui-button>
    <ui-button
      class="cart__order"
      type="link"
      to="/products"
      :mobileFullWidth="true"
      v-else
    >
      Continue shopping
    </ui-button>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useCartStore } from "@/store/cart.js";
import uiButton from "@/components/ui/Button.vue";

const cartStore = useCartStore();

const cartTotal = computed(() => {
  let totalPrice = 0;

  for (let item of cartStore.cart) {
    totalPrice += item.price * item.count;
  }
  return totalPrice;
});

const toCheckout = () => {
  console.log("place order");
};
</script>

<style lang="scss" scoped>
.cart {
  background: var(--light-gray);
  @media screen and (max-width: 768px) {
  }
  &__title {
    grid-column: 2;
    grid-row: 1;
    padding: 80px 0 32px;
    text-align: center;
    @media screen and (max-width: 768px) {
      padding: 40px 0 16px;
    }
  }
  &__emptyMessage {
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
  &__table {
    grid-column: 2;
    padding: 48px 64px;
    background-color: var(--white);
    grid-row: 2;
    width: 100%;
    font-family: var(--second-family);
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
    text-decoration: none;
    color: var(--dark-primary);
    @media screen and (max-width: 768px) {
      font-size: 16px;
      padding: 0 24px;
    }
  }
  &__order {
    grid-column: 2;
    grid-row: 3;
    margin: var(--section-gap);
    justify-self: center;
    @media screen and (max-width: 560px) {
      margin: var(--section-gap-mobile);
    }
  }
  &-quantity {
    background: var(--light-gray);
    width: 122px;
    height: 46px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
    &-symbol {
      color: var(--border-gray);
      cursor: pointer;
    }
  }
  &-delete {
    display: block;
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
  }
}

.table {
  color: var(--dark-primary);
  span {
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
    color: var(--dark-primary);
    @media screen and (max-width: 768px) {
      font-size: 14px;
    }
  }
  tr {
    display: grid;
    grid-template: 1fr / repeat(5, 1fr);
    column-gap: 20px;
    padding: 20px 0;
    align-items: center;
    @media screen and (max-width: 768px) {
      font-size: 16px;
      grid-template-columns: 1fr 2fr;
      row-gap: 20px;
    }
    @media screen and (max-width: 420px) {
      grid-template-columns: 1fr;
      row-gap: 20px;
    }
  }
  thead {
    tr {
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      font-family: var(--second-family);
      font-size: 18px;
      line-height: 140%;
      color: var(--dark-primary);
      padding: 20px 0;
      @media screen and (max-width: 768px) {
        font-size: 16px;
      }
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
      font-family: var(--font-family);
      font-weight: 400;
      font-size: 16px;
      line-height: 150%;
      color: var(--dark-primary);
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      @media screen and (max-width: 768px) {
        font-size: 14px;
      }
    }
    td {
      &:first-of-type {
        img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          cursor: pointer;
        }
      }
      &:nth-of-type(2) {
        grid-column: span 2;
        text-align: left;
        display: flex;
        flex-direction: column;
        row-gap: 6px;
        font-size: 18px;
        @media screen and (max-width: 768px) {
          grid-column: span 1;
          flex-direction: row;
          flex-wrap: wrap;
          align-items: baseline;
          justify-content: space-between;
        }
        a {
          text-decoration: none;
          color: var(--dark-primary);
          span {
            font-family: var(--second-family);
            font-size: 24px;
            line-height: 140%;
            color: var(--dark-primary);
            margin-right: 6px;
            @media screen and (max-width: 768px) {
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
        div:nth-of-type(2) {
          font-size: 14px;
        }
      }
      &:nth-of-type(3) {
        display: flex;
        flex-direction: column;
        row-gap: 12px;
        align-items: center;
        @media screen and (max-width: 420px) {
          align-items: flex-start;
          .cart-delete {
            display: none;
          }
        }
      }
      &:last-of-type {
        display: inline-flex;
        justify-self: end;
        span {
          font-size: 18px;
        }
      }
    }
  }
  tfoot {
    th {
      grid-column: span 5;
      justify-self: end;
      align-self: start;
      font-family: var(--font-family);
      font-weight: 400;
      font-size: 24px;
      line-height: 140%;
      color: var(--dark-primary);
      text-decoration: none;
      text-align: right;
      @media screen and (max-width: 768px) {
        font-size: 20px;
      }
      span {
        padding-right: 10px;
        font-size: 24px;
        font-family: var(--second-family);
        @media screen and (max-width: 768px) {
          font-size: 20px;
        }
      }
      div {
        font-family: var(--font-family);
        font-weight: 400;
        font-size: 16px;
        line-height: 150%;
        color: var(--color-text);
        @media screen and (max-width: 768px) {
          font-size: 14px;
        }
      }
    }
  }
}

/*
.table {

  tr {
    display: grid;
    grid-template: 1fr/ 160px minmax(250px, 1fr) 120px 140px;
    column-gap: 40px;
    padding: 20px 0;
    border-bottom: 1px solid var(--third-black);
    align-items: center;
    justify-items: start;
  }
  td {
    &:first-of-type {
      img {
        width: 100%;
        max-width: 160px;
        cursor: pointer;
      }
    }
    &:nth-of-type(2) {
      a {
        display: block;
        text-decoration: none;
        color: var(--dark-primary);
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
      }
      div:nth-of-type(2) {
        font-size: 14px;
      }
    }
    &:nth-of-type(3) {
      display: inline-flex;
      justify-self: center;
    }
    &:last-of-type {
      display: inline-flex;
      justify-self: center;
      display: block;
      text-decoration: none;
      color: var(--dark-primary);
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
    }
  }
  th {
    &:nth-of-type(3) {
      display: inline-flex;
      justify-self: center;
    }
    &:last-of-type {
      display: inline-flex;
      justify-self: center;
    }
  }
  thead,
  tfoot {
    border: 2px solid red;
  }
  thead {
    tr {
      padding: 8px 0;
    }
  }
  tfoot {
    span {
      font-size: 18px;
      font-weight: 600;
    }
    tr {
      grid-template-columns: 160px minmax(250px, 1fr) 120px 140px;
      grid-template-areas: ". total-label total-sum .";
      th {
        &:first-of-type {
          grid-area: total-label;
          display: inline-flex;
          justify-self: flex-end;
        }
        &:last-of-type {
          grid-area: total-sum;
        }
      }
    }
  }

  @media screen and (max-width: 850px) {
    thead {
      display: none;
    }
    tbody {
      tr {
        grid-template-columns: 160px minmax(120px, 1fr) minmax(140px, 1fr);
        grid-template-areas:
          "item-img item-info item-info"
          "item-img item-price item-del";
        gap: 20px;
        &:first-of-type {
          border-top: 1px solid var(--third-black);
        }
      }
      td {
        &:first-of-type {
          grid-area: item-img;
        }
        &:nth-of-type(2) {
          grid-area: item-info;
        }
        &:nth-of-type(3) {
          grid-area: item-price;
          display: inline-flex;
          justify-self: flex-start;
        }
        &:last-of-type {
          grid-area: item-del;
          display: inline-flex;
          justify-self: flex-end;
        }
      }
    }
    tfoot {
      tr {
        grid-template-columns: minmax(280px, 1fr) minmax(140px, 1fr);
        grid-template-areas: "total-label total-sum";
        gap: 20px;
        th:last-of-type {
          display: inline-flex;
          justify-self: flex-start;
        }
      }
    }
  }

  @media screen and (max-width: 560px) {
    tbody {
      tr {
        grid-template-columns: 1fr 1fr;
        grid-template-areas:
          "item-img item-img"
          "item-info item-info"
          "item-price item-del";
      }
    }
    tfoot {
      tr {
        grid-template-columns: 1fr;
        grid-template-areas:
          "total-label"
          "total-sum";
        gap: 0px;
        th:first-of-type {
          justify-self: flex-start;
        }
      }
    }
  }
}*/
</style>
