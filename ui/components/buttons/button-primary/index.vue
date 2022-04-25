<template>
  <div class="button-primary">
    <button class="button-primary__content">{{ content }}</button>
  </div>
</template>

<script>
export default {
  name: "ButtonPrimary",
  props: {
    content: {
      type: String,
      default: "Back to Home",
    },
  },
};
</script>
