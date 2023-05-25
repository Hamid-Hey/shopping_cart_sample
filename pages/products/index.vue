<template>
  <div>
    <div>
      <v-product
        v-for="item in products"
        :key="item.id"
        :data="item"
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
    }
  },

  mounted() {
    Api()
      .get()
      .then((res) => {
        this.products = res.data
      })
  },
}
</script>

<style lang="scss" scoped></style>
