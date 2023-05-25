<template>
    <div>
      <div class="v-chip">
        <slot></slot>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'VChip',
  
    props: {
    //   icon: {
    //     type: Boolean,
    //     default: false,
    //   },
    },
  }
  </script>
  
  <style lang="scss" scoped>
  .v-chip {
    font-family: IRANYekan, 'Segoe UI', tahoma, Verdana, Arial, sans-serif !important;
    // cursor: pointer;
    // overflow: hidden;
    white-space: nowrap;
    display: flex;
    justify-content: center;
    padding-bottom: 4px;
    padding-top: 2px;
    width: 40px;
    height: 20px;
    position: relative;
    background: #f04055;
    /* padding: 10px 30px; */
    border: none;
    border-radius: 15px;
    color: #fff;
    font-size: 14px;
    font-weight: 400;
    // margin: 8px;
  
    // &--icon {
    //   display: flex;
    //   justify-content: center;
    //   align-items: center;
    //   width: 32px;
    //   height: 32px;
    //   padding: 0;
    //   margin: 0;
    //   border-radius: 50%;
    //   vertical-align: middle;
    // }
  }
  </style>
  