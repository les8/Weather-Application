<template>
  <div class="wrapper">
    <div class="header">
      <Location />
      <TemperatureScale />
    </div>
    <Main />
    <Footer />
  </div>
</template>

<script>
import Location from "./components/header/location/Location.vue";
import TemperatureScale from "./components/header/temperature-scale/Temperature-Scale.vue";
import Main from "./components/main/Main.vue";
import Footer from "./components/footer/Footer.vue";
export default {
  name: "App",
  components: {
    Location,
    TemperatureScale,
    Main,
    Footer,
  },
  mounted() {
    this.$store.dispatch("setWeatherByCoords");
  },
};
</script>

<style lang="scss">
@import "./styles/common.scss";
@import "./styles/settings.scss";

.wrapper {
  padding: 100px 200px;
}

.header {
  display: flex;
  justify-content: space-between;
  height: 97px;
}
</style>
