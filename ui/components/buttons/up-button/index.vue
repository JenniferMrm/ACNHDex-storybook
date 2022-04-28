<template>
  <div class="up-button">
    <div class="up-button__container">
      <icon-chevron :size="18" />
    </div>
  </div>
</template>

<script>
import IconChevron from "@ui/components/icons/icon-chevron";

export default {
  name: "UpButton",
  components: {
    IconChevron,
  },
};
</script>

<style></style>
