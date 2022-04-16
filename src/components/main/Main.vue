<template>
  <div class="main">
    <div class="main__head">
      <SvgIcon name="sun" className="main__icon" />
      <div class="main__temperature">{{ this.currentTemperature }}º</div>
    </div>
    <div class="main__info">{{ this.weatherInfo }}</div>
  </div>
</template>

<script>
import SvgIcon from "../constructor/SvgIcon.vue";

export default {
  name: "main-weather",
  data() {
    return {
      currentTemperature: "30",
      weatherInfo: "Mostly sunny",
    };
  },
  components: {
    SvgIcon,
  },
};
</script>

<style lang="scss" scoped>
@import "/src/styles/variables.scss";
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 130px;
  margin-bottom: 200px;

  &__head {
    display: flex;
    align-items: center;
  }

  &__temperature {
    font-size: 180px;
    line-height: 216px;
  }

  &__icon {
    width: 140px;
    height: 140px;
    margin-right: 15px;
    fill: rgb(209, 236, 87);
  }

  &__info {
    font-size: $text-size;
  }
}
</style>
