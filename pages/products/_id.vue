<template>
  <section class="container">
    <div class="product-detail">
      <div>
        <img class="product-detail__img" :src="model.image" alt="" />
      </div>

      <div
        class="product-detail__content product-detail__content--extra-margin"
      >
        <h1 class="product-detail__title">{{ model.title }}</h1>

        <hr />

        <p class="product-detail__description">
          درخواست مرجوع کردن کالا در گروه دمنوش با دلیل «انصراف از خرید» تنها در
          صورتی قابل تأیید است که کالا در شرایط اولیه باشد (در صورت پلمپ بودن،
          کالا نباید باز شده باشد).
        </p>

        <v-card class="product-detail__content-card" outline>
          <div>
            <span></span>
            <p>ارسال رایگان سفارش‌ها برای اعضای دیجی‌پلاس</p>
          </div>
          <p>
            ۳۹ هزار تومان هزینه ارسال به سراسر ایران برای کاربران غیر دیجی‌پلاس
          </p>
        </v-card>

        <v-card class="product-detail__content-card" outline>
          <div>
            <span></span>
            <p>الان بخر،‌ بعدا پرداخت کن!</p>
          </div>
          <p>با اعتبار دیجی‌پی الان بخرید، ابتدای ماهِ بعد بپردازید</p>
        </v-card>

        <v-card class="product-detail__content-card" outline>
          <p>ویژه اعضای دیجی‌پلاس</p>
          <h3>ارسال رایگان</h3>
        </v-card>
      </div>

      <div>
        <v-card class="product-detail__card">
          <div class="product-detail__card-title">فروشنده</div>
          <div class="product-detail__seller-wrapper">
            <img
              class="product-detail__seller-icon"
              src="~/static/img/company.svg"
              alt=""
            />
            <span class="product-detail__seller">تیرینک</span>
            <span class="product-detail__label">رسمی</span>
          </div>

          <div class="product-detail__quality-description">
            <strong class="product-detail__quality-description--light"
              >۸۳٪</strong
            >
            <span>رضایت از کالا</span>
            <span>|</span>
            <span>عملکرد</span>
            <strong class="product-detail__quality-description--light2"
              >عالی</strong
            >
          </div>

          <hr />
          <div class="product-detail__guarantee">
            گارانتی اصالت و سلامت فیزیکی کالا
          </div>
          <hr />

          <div class="product-detail__price-container">
            <div class="product-detail__price-title-wrapper">
              <img
                class="product-detail__price-title-icon"
                src="~/static/img/info.svg"
                alt=""
              />
              <span class="product-detail__price-title">قیمت فروشنده</span>
            </div>

            <div class="product-detail__price-wrapper">
              <div class="product-detail__price-original">
                <span class="product-detail__price">۱۰۷۰۰۰</span>
                <v-chip>۱۵٪</v-chip>
              </div>

              <div>
                <span class="product-detail__price-discounted">۹۰۹۵۰</span>
                <span class="product-detail__price-unit">تومان</span>
              </div>
            </div>
          </div>

          <div class="product-detail__btn-wrapper">
            <v-btn>افزودن به سبد خرید</v-btn>
          </div>
        </v-card>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProductDetailPage',

  async asyncData({ params, $axios }) {
    const data = await $axios.get(
      `https://mocki.io/v1/a03f4c39-409c-4302-9b5e-e5078ed44434`
    )

    return data
  },

  computed: {
    model() {
      return this.data.find((item) => item.id === this.$route.params.id)
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  margin-top: 150px;
}
.product-detail {
  display: flex;
  flex-direction: row-reverse;

  &__img {
    min-width: 430px;
  }

  &__title {
    font-family: 'IRANYekan';
    font-size: 20px;
    text-align: right;
  }

  &__content {
    max-width: 660px;
    margin-left: 20px;

    &--extra-margin {
      margin-top: 16px;
    }
  }

  &__content-card {
    max-width: unset;
    margin-top: 12px;
  }

  &__description {
    font-family: 'IRANYekan';
    font-size: 12px;
    line-height: 26px;
    font-weight: 600;
    color: #9b9b9b;
    text-align: right;
    direction: rtl;
    margin-bottom: 30px;
  }

  &__card-title {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 32px;
    margin-top: 10px;
  }

  &__btn-wrapper {
    margin-bottom: 10px;
  }

  &__guarantee {
    font-size: 14px;
    font-weight: 700;
    margin: 20px 0;
    color: #5a5a5a;
  }

  &__price-title {
    font-size: 13px;
    font-weight: 800;
    margin: 20px 0;
    color: #7c7c7c;
    line-height: 90px;
  }

  &__backward-btn-wrapper {
    padding: 15px 40px 15px 0;
    display: flex;
    flex-direction: row;
  }

  &__backward-btn {
  }

  &__label {
    font-size: 12px;
    color: #0593d1;
    background-color: #deebf3;
    padding: 3px 8px;
    border-radius: 13px;
    margin-right: 8px;
  }

  &__seller-wrapper {
    display: flex;
    align-items: center;
    margin-bottom: 14px;
  }

  &__seller-icon {
    margin-left: 4px;
  }

  &__quality-description {
    font-size: 14px;
    color: gray;

    &--light {
      color: rgb(38, 168, 38);
    }

    &--light2 {
      color: rgb(0, 129, 90);
    }
  }

  &__price-container {
    display: flex;
    justify-content: space-between;
  }

  &__price-title-wrapper {
    display: flex;
    align-items: center;
  }

  &__price-title-icon {
    margin-left: 4px;
  }

  &__price-wrapper {
    margin-top: 35px;
  }

  &__price-original {
    display: flex;
  }

  &__price {
    margin-left: 8px;
    text-decoration: line-through;
    color: gray;
  }

  &__price-discounted {
    font-size: 26px;
    font-weight: 600;
  }

  &__price-unit {
    font-size: 10px;
  }
}
</style>
