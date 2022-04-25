<template>
  <div class="color-tile">
    <div :class="className"></div>
    <p>{{ color }}</p>
    <p v-if="hex">HEX : {{ hex }}</p>
    <p v-else>rgba{{ rgba }}</p>
  </div>
</template>

<script>
export default {
  name: "ColorTile",
  props: {
    color: {
      type: String,
      required: true,
    },
    hex: {
      type: String,
      default: null,
    },
    rgba: {
      type: String,
      default: "(0,0,0,0)",
    },
  },
  computed: {
    className() {
      return `color-container color-container--${this.color}`;
    },
  },
};
</script>
