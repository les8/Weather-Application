<template>
  <div class="temperature-scale">
    <p class="temperature-scale__degree">º</p>
    <div class="temperature-scale__toggle">
      <div
        @click="setTemperatureInCelsius"
        class="temperature-scale__items temperature-scale__item-1"
      >
        <input id="celsus" type="radio" name="radio" value="on" checked />
        <label for="celsus">C</label>
      </div>
      <div
        @click="setTemperatureInFahrenheit"
        class="temperature-scale__items temperature-scale__item-2"
      >
        <input id="fahrenheit" type="radio" name="radio" value="off" />
        <label for="fahrenheit">F</label>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "temperature-scale",
  methods: {
    setTemperatureInFahrenheit() {
      this.toggleFahrenheitTemperature(true);
    },
    setTemperatureInCelsius() {
      this.toggleFahrenheitTemperature(false);
    },
    ...mapMutations(["toggleFahrenheitTemperature"]),
  },
};
</script>

<style lang="scss">
@import "/src/styles/variables.scss";

.temperature-scale {
  position: absolute;
  right: 0;
  display: flex;
  font-size: $subtitle-size;

  &__degree {
    margin-right: 12px;
  }

  &__toggle {
    display: inline-block;
    overflow: hidden;
  }

  &__items {
    display: inline-block;

    input[type="radio"] {
      display: none;
    }

    input[type="radio"]:checked + label {
      background: rgba(255, 255, 255, 0.4);
      color: $primary-color;
    }

    label {
      display: flex;
      align-items: center;
      padding: 0px 14px;
      line-height: 34px;
      height: 29px;
      border: 1px solid rgba(255, 255, 255, 0.4);
      border-right: none;
      cursor: pointer;
      user-select: none;
    }
  }

  &__item-1 {
    label {
      border-radius: 6px 0 0 6px;
    }
  }

  &__item-2 {
    label {
      border-radius: 0 6px 6px 0;
      border-right: 1px solid rgba(255, 255, 255, 0.4);
      border-left: none;
    }
  }
}
</style>
