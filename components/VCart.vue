<template>
  <div class="v-cart">
    <div class="v-cart__container">
      <div class="v-cart__item-wrapper">
        <img class="v-cart__img" :src="data.image" alt="" />
        <h3 class="v-cart__offer">فروش ویژه</h3>
      </div>

      <div>
        <h1 class="v-cart__title">{{ data.title }}</h1>

        <ul>
          <li class="v-cart__list-item">
            <img class="v-cart__icon" src="~/static/img/checkmark.svg" alt="" />
            <p class="v-cart__item-text">گارانتی اصالت و سلامت فیزیکی کالا</p>
          </li>

          <li class="v-cart__list-item">
            <img class="v-cart__icon" src="~/static/img/company.svg" alt="" />
            <p class="v-cart__item-text">تیرینک</p>
          </li>

          <li class="v-cart__list-item">
            <img class="v-cart__icon" src="~/static/img/inventory.svg" alt="" />
            <p class="v-cart__item-text">موجود در انبار</p>
          </li>

          <li class="v-cart__list-item">
            <img class="v-cart__icon" src="~/static/img/misle.svg" alt="" />
            <p class="v-cart__item-text">ارسال فوری شهر تهران</p>
          </li>
        </ul>

        <div v-if="discountedPrice">
          <div class="v-cart__discount-wrapper">
            <span class="v-cart__discount">
              {{ discount }}
              تومان تخفیف
            </span>
          </div>

          <div>
            <span class="v-cart__price">
              {{ discountedPrice }}
            </span>
            <img src="~/static/img/tooman.svg" alt="" />
          </div>
        </div>

        <div v-else>
          <div>
            <span class="v-cart__price">
              {{ data.price }}
            </span>
            <img src="~/static/img/tooman.svg" alt="" />
          </div>
        </div>

        <div class="v-cart__remaining" v-if="data.remainingNumber">
          تنها
          {{ data.remainingNumber }}
          عدد در انبار باقی مانده است
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VCart',

  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },

  computed: {
    discountedPrice() {
      return (1 - this.data.discountPercent / 100) * this.data.price
    },

    discount() {
      return (this.data.price * this.data.discountPercent) / 100
    },
  },

  methods: {
    removeFromCart(e) {
      e.stopPropagation()

      this.$store.dispatch('removeProduct', this.data)
    },
  },
}
</script>

<style lang="scss" scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
.v-cart {
  &__offer {
    color: #f04055;
    font-family: 'IRANYekan';
    font-size: 18px;
    font-weight: 800;
  }

  &__img {
    max-width: 170px;
  }

  &__item-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 40px;
  }

  &__container {
    display: flex;
    flex-direction: row;
    margin: 50px 40px;
    padding-bottom: 40px;
    border-bottom: 1px solid #c1c1c1;
    margin-right: -30px;
    margin-left: -30px;

    &:last-child {
      border-bottom: unset;
      padding-bottom: unset;
    }
  }

  &__title {
    font-weight: 800;
    font-size: 17px;
    color: #575757;
  }

  &__icon {
    max-height: 24px;
    margin-left: 8px;
  }

  &__list-item {
    display: flex;
    align-items: center;
  }

  &__item-text {
    font-size: 14px;
    color: gray;
    margin: 8px 0px;
  }

  &__discount {
    font-size: 11px;
    font-weight: 700;
    color: #f04055;
  }

  &__discount-wrapper {
    margin-top: 20px;
  }

  &__price {
    font-size: 20px;
    font-weight: 600;
  }

  &__remaining {
    margin-top: 17px;
    font-size: 13px;
    font-weight: 600;
    color: #f04055;
  }
}
</style>
