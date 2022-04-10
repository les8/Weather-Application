<template>
  <div class="location">
    <div class="location__search" v-if="inChanges">
      <input
        type="search"
        name="city-search"
        v-model="currentCity"
        v-on:keyup.enter="setCurrentCity"
      />
      <input type="submit" value="OK" v-on:click="setCurrentCity" />
    </div>
    <div class="location__info" v-else>
      <h3 class="location__name" v-on:click="editCurrentCity">
        {{ this.currentCity }}
      </h3>
      <div class="location__managment">
        <h6 class="location__change" v-on:click="editCurrentCity">
          Сменить город
        </h6>
        <div class="location__mycoordinates">
          <SvgIcon name="location" className="location__icon" />
          <p>Мое местоположение</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SvgIcon from "./../../constructor/SvgIcon.vue";
import axios from "axios";

export default {
  name: "location-block",
  data() {
    return {
      currentCity: "",
      apiKey: "",
      inChanges: false,
    };
  },
  mounted() {
    this.currentCity = this.$store.getters.getCurrentCity;
    this.apiKey = this.$store.getters.getApiKey;
    this.getData();
  },
  updated() {
    if (!this.inChanges) {
      this.getData();
    }
  },
  components: {
    SvgIcon,
  },
  methods: {
    editCurrentCity() {
      this.currentCity = "";
      this.inChanges = true;
    },
    setCurrentCity() {
      this.$store.commit("setCurrentCity", this.currentCity);
      this.inChanges = false;
    },
    getData() {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${this.currentCity}&appid=${this.apiKey}`
        )
        .then((response) =>
          this.$store.commit("setCurrentWeather", response.data)
        );
    },
  },
};
</script>

<style lang="scss" scoped>
.location {
  &__search {
    width: 579px;
    height: 97px;
    border-radius: 8px;

    input[type="search"] {
      border: none;
      outline: none;
      -webkit-appearance: none;
      vertical-align: middle;
    }
    input[type="submit"] {
      border: none;
      background: none;
    }
  }
  &__icon {
    width: 24px;
    height: 24px;
    transform: scale(-1, 1);
  }
}
</style>
