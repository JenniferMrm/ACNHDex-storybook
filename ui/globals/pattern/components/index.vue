<template>
  <div class="pattern-tile">
    <div class="pattern-tile__pattern"></div>
    <p class="pattern__name">{{ name }}</p>
  </div>
</template>

<script>
export default {
  name: "PatternTile",
  props: {
    name: {
      type: String,
      required: true,
    },
  },
};
</script>

<style></style>
