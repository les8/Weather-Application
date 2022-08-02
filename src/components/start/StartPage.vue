<template>
  <div class="startpage">
    <div class="header">
      <Location />
      <TemperatureScale />
    </div>
    <Main />
    <Footer />
  </div>
</template>

<script>
import Location from "./../header/location/Location.vue";
import TemperatureScale from "./../header/temperature-scale/Temperature-Scale.vue";
import Main from "./../main/Main.vue";
import Footer from "./../footer/Footer.vue";

export default {
  name: "start-page",
  components: {
    Location,
    TemperatureScale,
    Main,
    Footer,
  },
};
</script>

<style lang="scss">
@import "./../../styles/common.scss";
@import "./../../styles/settings.scss";

.header {
  display: flex;
  justify-content: space-between;
  height: 97px;
}
</style>
