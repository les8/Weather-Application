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

<style lang="scss">
@import "./styles/common.scss";
@import "./styles/settings.scss";

.wrapper {
  padding: 75px 75px 122px 100px;
}

.header {
  display: flex;
  justify-content: space-between;
}
</style>
