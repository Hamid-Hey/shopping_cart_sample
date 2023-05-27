<template>
  <div class="v-product" @click="detailHander">
    <h1 class="v-product__title">فروش ویژه</h1>
    <img class="v-product__img" :src="data.image" alt="" />
    <!-- <v-btn icon>+</v-btn> -->
    <button
      @click="
        (e) => {
          addToCart(e)
        }
      "
    >
      click to add
    </button>


    <h2 class="v-product__description">
      {{ data.title }}
    </h2>

    <div class="v-product__rating">{{ data.rate }} ★</div>

    <div>
      <v-chip v-if="data.discountPercent" class="v-product__tag"
        >{{ data.discountPercent }}%</v-chip
      >

      <h3 class="v-product__price">
        <span class="v-product__price--unit">تومان</span>
        {{ data.discountPercent ? discountedPrice : data.price }}
      </h3>

      <span v-if="data.discountPercent" class="v-product__discount">
        {{ data.price }}</span
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'VProduct',

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
  },

  methods: {
    detailHander() {
      this.$emit('show-detail', this.data)
    },

    addToCart(e) {
      e.stopPropagation()

      const existingData = JSON.parse(localStorage.getItem('shoppingCart')) || []
      existingData.unshift(this.data)

      const updatedData = JSON.stringify(existingData)

      localStorage.setItem('shoppingCart', updatedData);

      const notification = JSON.parse(localStorage.getItem('shoppingCart')) || []

      this.$emit('notification', notification.length)
    },

    removeFromCart(e) {
      e.stopPropagation()

      this.$store.dispatch('removeProduct', this.data)
    }
  },
}
</script>

<style lang="scss" scoped>
.v-product {
  padding: 15px 10px;
  direction: rtl;
  border: 1px solid rgb(236, 236, 236);
  max-width: 400px;
  min-height: 463px;
  display: inline-block;
  direction: rtl;
  cursor: pointer;

  &__title {
    color: #f04055;
    font-family: 'IRANYekan';
    font-size: 18px;
    font-weight: 800;
  }

  &__img {
    display: block;
    margin: auto;
    width: 75%;
    margin-bottom: -40px;
  }

  &__description {
    font-family: 'IRANYekan';
    font-size: 14px;
    font-weight: 700;
    color: #666666;
    margin-top: 44px;
    margin-bottom: 34px;
  }

  &__rating {
    display: flex;
    flex-direction: row-reverse;
    font-family: 'IRANYekan';
    font-size: 12px;
    font-weight: 800;
    color: #444444;
    margin-bottom: 26px;
  }

  &__tag {
    float: right;
  }

  &__price {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    flex-direction: row-reverse;
    font-family: 'IRANYekan';
    color: #4f4e4e;
    font-size: 19px;
    margin-bottom: 10px;

    &--unit {
      margin-right: 8px;
      padding-top: 6px;
      font-size: 12px;
    }
  }

  &__discount {
    font-family: 'IRANYekan';
    font-size: 14px;
    font-weight: 100;
    float: left;
    margin-left: 39px;
    color: #9f9f9f;
    text-decoration-line: line-through;
  }
}
</style>
