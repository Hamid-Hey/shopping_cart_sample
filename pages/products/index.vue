<template>
  <div>
    <div class="product-list__filter-wrapper">
      <strong class="product-list__filter-title">مرتب سازی:</strong>
      <span
        :class="[
          'product-list__filter-items',
          { 'product-list__active-filter': mostViewed },
        ]"
        @click="showMostViewed()"
        >پر بازدید‌ترین‌ها</span
      >
      <span
        :class="[
          'product-list__filter-items',
          { 'product-list__active-filter': hasDiscount },
        ]"
        @click="showDiscounted()"
        >فقط کالاهای تخفیف‌دار</span
      >
    </div>

    <div>
      <v-product
        v-for="item in filteredData"
        :key="item.id"
        :data="item"
        @show-detail="productDetails"
      ></v-product>
    </div>
  </div>
</template>

<script>
import Api from '~/service/api.js'

export default {
  name: 'ProductsPage',

  data() {
    return {
      products: [],

      mostViewed: true,
      hasDiscount: false,
    }
  },

  computed: {
    filteredData() {
      if (this.hasDiscount) {
        const data = this.products.filter((item) =>
          item.hasOwnProperty('discountPercent')
        )
        return data
      } else {
        return this.products
      }
    },
  },

  watch: {},

  mounted() {
    Api()
      .get()
      .then((res) => {
        this.products = res.data
      })
  },

  methods: {
    productDetails(data) {
      this.$router.push(`/products/${data.id}`)
    },

    showDiscounted() {
      this.mostViewed = false
      this.hasDiscount = true
    },

    showMostViewed() {
      this.hasDiscount = false
      this.mostViewed = true
    },
  },
}
</script>

<style lang="scss" scoped>
.product-list {
  &__filter-wrapper {
    text-align: right;
    font-family: 'IRANYekan';
    font-size: 12px;
    padding: 20px 5px;
  }

  &__active-filter {
    color: #f04055;
    font-weight: 800;
    margin-left: 8px;
    cursor: pointer;
  }

  &__filter-title {
    margin-left: 16px;
    cursor: pointer;
  }

  &__filter-items {
    margin-left: 8px;
    cursor: pointer;
  }
}
</style>
