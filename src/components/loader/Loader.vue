<template>
  <div class="loader" />
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "loader-block",
  created() {
    this.setWeatherByCoords();
  },
  methods: mapActions(["setWeatherByCoords"]),
};
</script>
