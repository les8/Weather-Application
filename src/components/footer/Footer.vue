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
      <div class="footer__subtitle">Chance of rain</div>
      <div class="footer__info">{{ this.chanceOfRain }} %</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "footer-weather",
  data() {
    return {
      wind: "5",
      windDirection: "west",
      pressure: "752",
      humidity: "50",
      chanceOfRain: "20",
    };
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
