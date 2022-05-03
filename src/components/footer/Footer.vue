<template>
  <div class="footer">
    <div class="footer__item">
      <div class="footer__subtitle">Wind</div>
      <div class="footer__info">
        {{ this.wind }} m/s, {{ this.windDirection }}
      </div>
    </div>
    <div class="footer__item">
      <div class="footer__subtitle">Pressure</div>
      <div class="footer__info">{{ this.pressure }} mmHg</div>
    </div>
    <div class="footer__item">
      <div class="footer__subtitle">Humidity</div>
      <div class="footer__info">{{ this.humidity }} %</div>
    </div>
    <div class="footer__item">
      <div class="footer__subtitle">Visibility</div>
      <div class="footer__info">{{ this.visibility }} m</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "footer-weather",
  computed: {
    apiData() {
      return this.$store.getters.getCurrentWeather;
    },
    wind() {
      if (this.apiData) {
        return this.apiData.wind.speed.toFixed(1);
      } else return "no data";
    },
    windDirection() {
      if (this.apiData) {
        return this.convertWindDirection(this.apiData.wind.deg);
      } else return "no direction";
    },
    pressure() {
      if (this.apiData) {
        const hectopascalPressure = this.apiData.main.pressure;
        return Math.round(
          this.hectopascalToMillimetersMercury(
            parseInt(hectopascalPressure, 10)
          )
        );
      } else return "no data";
    },
    humidity() {
      if (this.apiData) {
        return this.apiData.main.humidity;
      } else return "no data";
    },
    visibility() {
      if (this.apiData) {
        return this.apiData.visibility;
      } else return "no data";
    },
  },
  methods: {
    hectopascalToMillimetersMercury(num) {
      return num * 0.75006;
    },
    convertWindDirection(num) {
      if (num > 338 || num <= 23) {
        return "north";
      } else if (num > 23 && num <= 68) {
        return "north-east";
      } else if (num > 68 && num <= 113) {
        return "east";
      } else if (num > 113 && num <= 158) {
        return "south-east";
      } else if (num > 158 && num <= 203) {
        return "south";
      } else if (num > 203 && num <= 248) {
        return "south-west";
      } else if (num > 248 && num <= 293) {
        return "west";
      } else if (num > 293 && num <= 338) {
        return "north-west";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "/src/styles/variables.scss";

.footer {
  display: flex;
  justify-content: space-between;
  margin: 0 auto;

  &__subtitle {
    font-size: $subtitle-size;
    margin-bottom: 10px;
  }

  &__info {
    font-size: $text-size;
  }
}
</style>
