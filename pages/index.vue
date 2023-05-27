<template>
  <div>
    <h1 class="home">پروژه سمپل فروشگاه اینترنتی</h1>

    <div class="home__btn-pane">
      <v-btn :method="showProductPage">ورود به صفحه محصولات</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',

  methods: {
    showProductPage() {
      this.$router.push('/products')
    },
  },
}
</script>

<style lang="scss" scoped>
.home {
  font-family: IranYekan;
  display: flex;
  justify-content: center;
  margin-top: 200px;

  &__btn-pane {
    display: flex;
    justify-content: center;
  }
}
</style>
