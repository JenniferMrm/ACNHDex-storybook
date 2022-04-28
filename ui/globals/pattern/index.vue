<template>
  <div class="pattern">
    <pattern-tile class="pattern__tile pattern__tile--main" name="main-pattern" />
    <pattern-tile class="pattern__tile pattern__tile--modal" name="modal-pattern" />
    <pattern-tile class="pattern__tile pattern__tile--birthday" name="birthday-card-pattern" />
    <pattern-tile class="pattern__tile pattern__tile--available" name="available-card-pattern" />
  </div>
</template>

<script>
import PatternTile from "@ui/globals/pattern/components";

export default {
  name: "PatternGlobals",
  components: {
    PatternTile,
  },
};
</script>

<style></style>
