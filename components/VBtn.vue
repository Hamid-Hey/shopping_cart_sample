<template>
  <div>
    <button :class="['v-btn', { 'v-btn--icon': icon }]">
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  name: 'VBtn',

  props: {
    icon: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
.v-btn {
  font-family: IRANYekan, 'Segoe UI', tahoma, Verdana, Arial, sans-serif !important;
  cursor: pointer;
  overflow: hidden;
  white-space: nowrap;
  position: relative;
  text-align: center;
  display: block;
  width: 100%;
  // vertical-align: middle;
  background: #f04055;
  padding: 10px 30px;
  border: none;
  border-radius: 8px;
  color: #fff;
  font-size: 16px;
  font-weight: 400;
  // margin: 8px;

  &--icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    padding: 0;
    margin: 0;
    border-radius: 50%;
    vertical-align: middle;
    background: none;
    border: 1px solid #f04055;
    color: #f04055;
    font-size: 27px;
    padding-top: 2px;
  }
}
</style>
