<template>
  <div>
    <div :class="['v-card', { 'v-card--outline': outline }]">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VCard',

  props: {
    outline: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
.v-card {
  font-family: IRANYekan, 'Segoe UI', tahoma, Verdana, Arial, sans-serif !important;
  padding: 12px 20px;
  background-color: #f8f8f8;
  border: 1px solid #e0e0e6;
  border-radius: 10px;
  min-width: 280px;
  direction: rtl;
  margin-top: 77px;

  &--outline {
    background-color: unset;
    margin: unset;
    min-width: unset;
    padding: 6px 12px;
    font-size: 12px;
    font-weight: 700;
    color: #555555;
  }
}
</style>
