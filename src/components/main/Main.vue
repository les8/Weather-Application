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
import SvgIcon from "./../constructor/SvgIcon.vue";
import { kelvinToСelsius } from "@/js/formules";
import { mapState } from "vuex";

export default {
  name: "main-weather",
  components: {
    SvgIcon,
  },
  computed: {
    celsiusTemperature() {
      const temperature = this.currentWeather.main.temp;
      return Math.round(kelvinToСelsius(parseInt(temperature, 10)));
    },
    weatherInfo() {
      return this.currentWeather.weather[0].description;
    },
    addWeatherIcon() {
      return this.choseWeatherIcon();
    },
    ...mapState(["currentWeather", "inFahrenheit", "fahrenheitTemperature"]),
  },
  methods: {
    choseWeatherIcon() {
      if (this.currentWeather.weather[0].main === "Clear") {
        return "sun";
      } else if (this.currentWeather.weather[0].main === "Rain") {
        return "rain";
      } else if (this.currentWeather.weather[0].main === "Snow") {
        return "snow";
      } else if (
        this.currentWeather.weather[0].description === "overcast clouds"
      ) {
        return "cloud";
      } else if (this.currentWeather.weather[0].main === "Clouds") {
        return "partly";
      } else if (this.currentWeather.weather[0].main === "Mist") {
        return "cloud";
      } else return "location"; //for catch errors, becouse api docs have some problems:)
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

  &__head {
    display: flex;
    align-items: center;
  }

  &__temperature {
    font-size: 180px;
    line-height: 216px;

    @media (max-width: $phone-max) {
      font-size: 120px;
      line-height: 140px;
    }
  }

  &__icon {
    width: 200px;
    height: 200px;
    margin-right: 15px;
    fill: rgb(209, 236, 87);

    @media (max-width: $phone-max) {
      width: 120px;
      height: 120px;
    }
  }

  &__info {
    font-size: $text-size;
  }

  &__info::first-letter {
    text-transform: capitalize;
  }
}
</style>
