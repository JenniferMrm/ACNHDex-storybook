<template>
  <div>
    <div class="main-container">
      <h3>Primary colors :</h3>
      <div class="tile-container">
        <color-tile color="primary-color-1" hex="#88C9A1" />
        <color-tile color="primary-color-2" hex="#FF7C69" />
        <color-tile color="primary-color-3" hex="#7CC9C3" />
        <color-tile color="primary-color-4" hex="#FFBC79" />
      </div>
      <span class="separator"></span>
    </div>
    <div class="main-container">
      <h3>Secondary colors :</h3>
      <div class="tile-container">
        <color-tile color="secondary-color-1" hex="#A4D4A2" />
        <color-tile color="secondary-color-2" hex="#FEBDC3" />
        <color-tile color="secondary-color-3" hex="#8ECFCA" />
        <color-tile color="secondary-color-4" hex="#FFD9B3" />
      </div>
      <span class="separator"></span>
    </div>
    <div class="main-container">
      <h3>Tertiary colors :</h3>
      <div class="tile-container">
        <color-tile color="tertiary-color-1" hex="#68B893" />
        <color-tile color="tertiary-color-2" hex="#EF758A" />
        <color-tile color="tertiary-color-3" hex="#017C74" />
        <color-tile color="tertiary-color-4" hex="#FF9831" />
      </div>
      <span class="separator"></span>
    </div>
    <div class="main-container">
      <h3>Neutral colors :</h3>
      <div class="tile-container">
        <color-tile color="neutral-color-00" hex="#FFFFFF" />
        <color-tile color="neutral-color-10" hex="#FFF9E5" />
        <color-tile color="neutral-color-20" hex="#F8EEBC" />
        <color-tile color="neutral-color-30" hex="#F3E5B5" />
        <color-tile color="neutral-color-80" hex="#786951" />
        <color-tile color="neutral-color-90" hex="#2D2D2D" />
        <color-tile color="neutral-color-100" hex="#000000" />
      </div>
      <span class="separator"></span>
    </div>
  </div>
</template>

<script>
import ColorTile from "@ui/globals/colors/component";

export default {
  name: "ColorChart",
  components: {
    ColorTile,
  },
};
</script>
