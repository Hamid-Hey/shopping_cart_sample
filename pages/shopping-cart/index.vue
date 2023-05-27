<template>
  <div class="shopping-cart">
    <div class="shopping-cart__container">
      <div class="shopping-cart__backward-btn-pane">
        <v-btn
          class="shopping-cart__backward-btn"
          outline
          :method="redirectHandler"
          >بازگشت به صفحه محصولات</v-btn
        >
      </div>
    </div>

    <div class="shopping-cart__container">
      <div class="shopping-cart__main">
        <h2 class="shopping-cart__title">سبد خرید شما</h2>
        <span class="shopping-cart__count">{{ cartItems.length }} کالا</span>

        <div class="shopping-cart__items">
          <v-cart
            v-for="item in cartItems"
            :key="item.id"
            :data="item"
          ></v-cart>
        </div>
      </div>

      <div class="shopping-cart__bottomline-wrapper">
        <div>
          <div class="shopping-cart__bottomline">
            <span>قیمت کالاها</span>
            <span>۴۹۵۴۰۰۰ تومان</span>
          </div>

          <div class="shopping-cart__bottomline">
            <span>جمع سبد خرید</span>
            <span>۴۹۲۱۷۵۰ تومان</span>
          </div>
        </div>

        <v-btn>ثبت سفارش</v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShoppingCartPage',

  data() {
    return {
      cartItems: [],
    }
  },

  computed: {
    totalPrice() {
      const total = this.cartItems.map((item) => (item.price += item.price))
      return total
    },
  },

  mounted() {
    const cartData = localStorage.getItem('shoppingCart')
    if (cartData) {
      this.cartItems = JSON.parse(cartData)
    }
  },

  methods: {
    redirectHandler() {
      this.$router.push('/products')
    },
  },
}
</script>

<style lang="scss" scoped>
.shopping-cart {
  direction: rtl;
  font-family: 'IRANYekan';

  &__container {
    display: flex;
    justify-content: flex-end;
    margin: auto;
    width: 80%;
  }

  &__backward-btn-pane {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin: 24px 0px;
  }

  &__backward-btn {
    width: 250px;
  }

  &__main {
    width: 75%;
    padding: 30px;
    border: 1px solid #c1c1c1;
    border-radius: 10px;
  }

  &__items {
    display: flex;
    flex-direction: column;
  }

  &__title {
    font-size: 22px;
    color: #242424;
    margin-bottom: 10px;
  }

  &__count {
    font-weight: 600;
    color: #a7a7a7;
  }

  &__bottomline-wrapper {
    border: 1px solid #c1c1c1;
    border-radius: 10px;
    width: 25%;
    padding: 30px 30px 20px 30px;
    max-height: 130px;
    margin-right: 16px;
  }

  &__bottomline {
    display: flex;
    justify-content: space-between;
    margin-bottom: 24px;
    font-size: 14px;
    font-weight: 600;
    color: #737373;
  }
}
</style>
