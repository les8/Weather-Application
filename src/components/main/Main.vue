<template>
  <div class="main">
    <div class="main__head">
      <SvgIcon className="main__icon" :name="addWeatherIcon" />
      <div class="main__temperature">
        {{ inFahrenheit ? fahrenheitTemperature : celsiusTemperature }}º
      </div>
    </div>
    <div class="main__info">{{ weatherInfo }}</div>
  </div>
</template>

<script>
import SvgIcon from "../constructor/SvgIcon.vue";
import { kelvinToСelsius } from "@/js/formules";

export default {
  name: "main-weather",
  components: {
    SvgIcon,
  },
  computed: {
    apiData() {
      return this.$store.getters.getCurrentWeather;
    },
    inFahrenheit() {
      return this.$store.getters.getFahrenheitBoolean;
    },
    fahrenheitTemperature() {
      return this.$store.getters.getFahrenheitTemperature;
    },
    celsiusTemperature() {
      if (this.apiData) {
        const temperature = this.apiData.main.temp;
        return Math.round(kelvinToСelsius(parseInt(temperature, 10)));
      } else return "no data";
    },
    weatherInfo() {
      if (this.apiData) {
        return this.apiData.weather[0].description;
      } else return "no data";
    },
    addWeatherIcon() {
      if (this.apiData) {
        return this.choseWeatherIcon();
      } else return "location";
    },
  },
  methods: {
    choseWeatherIcon() {
      if (this.apiData.weather[0].main === "Clear") {
        return "sun";
      } else if (this.apiData.weather[0].main === "Rain") {
        return "rain";
      } else if (this.apiData.weather[0].main === "Snow") {
        return "snow";
      } else if (this.apiData.weather[0].description === "overcast clouds") {
        return "cloud";
      } else if (this.apiData.weather[0].main === "Clouds") {
        return "partly";
      } else if (this.apiData.weather[0].main === "Mist") {
        return "cloud";
      } else return "location"; //for catch errors, becouse api docs is shit
    },
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
    width: 200px;
    height: 200px;
    margin-right: 15px;
    fill: rgb(209, 236, 87);
  }

  &__info {
    font-size: $text-size;
  }

  &__info::first-letter {
    text-transform: capitalize;
  }
}
</style>
