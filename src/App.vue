<template>
  <div class="wrapper">
    <div class="header">
      <Location />
      <TemperatureScale />
    </div>
    <div class="main"></div>
    <div class="footer"></div>
  </div>
</template>

<script>
import Location from "./components/header/location/Location.vue";
import TemperatureScale from "./components/header/temperature-scale/Temperature-Scale.vue";
export default {
  name: "App",
  components: {
    Location,
    TemperatureScale,
  },
};
</script>
