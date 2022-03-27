<template>
  <svg :class="className" xmlns="http://www.w3.org/2000/svg">
    <use :xlink:href="iconPath" xmlns:xlink="http://www.w3.org/1999/xlink" />
  </svg>
</template>

<script>
export default {
  name: "svg-icon",

  props: {
    name: {
      type: String,
      required: true,
    },
    className: {
      type: String,
      default: null,
    },
  },

  computed: {
    iconPath() {
      let icon = require(`@/assets/svg/${this.name}.svg`);
      if (Object.prototype.hasOwnProperty.call(icon, "default")) {
        icon = icon.default;
      }
      return icon.url;
    },
  },
};
</script>
