<template>
  <div class="main__info">{{ this.currentTemperature }}</div>
</template>

<script>
export default {
  name: "main-weather",
  data() {
    return {
      currentTemperature: "",
      weatherInfo: "",
    };
  },
};
</script>

<style lang="scss" scoped>
@import "/src/styles/variables.scss";
</style>
