<template>
  <div>{{ cartItems }}</div>
</template>

<script>
export default {
  name: 'ShoppingCartPage',

  computed: {
    cartItems() {
      return this.$store.getters.getProducts
    },
  },
}
</script>
