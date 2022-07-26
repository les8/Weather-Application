<template>
  <div class="location">
    <div v-if="inChanges" class="location__search">
      <input
        type="search"
        name="city-search"
        placeholder="search for a lovely place..."
        v-model="inputCity"
        @keydown.enter="setCurrentCity"
      />
      <input type="submit" value="OK" @click="setCurrentCity" />
    </div>
    <div v-else class="location__info">
      <h3 class="location__name" @click="editCurrentCity">
        {{ storeCity }}
      </h3>
      <div class="location__managment">
        <h6 class="location__change" @click="editCurrentCity">Change Region</h6>
        <div class="location__mycoordinates">
          <SvgIcon name="location" className="location__icon" />
          <p @click="getLocalWeather">My Location</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SvgIcon from "./../../constructor/SvgIcon.vue";

export default {
  name: "location-block",
  data() {
    return {
      inputCity: "",
      beforeEditCity: this.inputCity,
      inChanges: false,
    };
  },
  computed: {
    storeCity() {
      return this.$store.getters.getCurrentCity;
    },
  },
  components: {
    SvgIcon,
  },
  methods: {
    editCurrentCity() {
      this.beforeEditCity = this.inputCity;
      this.inputCity = "";
      this.inChanges = true;
    },
    setCurrentCity() {
      if (this.inputCity !== "") {
        this.$store.commit("setCurrentCity", this.strBeautify(this.inputCity));
        this.$store.dispatch("setWeatherByName");
      } else this.inputCity = this.beforeEditCity;
      this.inChanges = false;
    },
    getLocalWeather() {
      this.$store.dispatch("setWeatherByCoords");
    },
    strBeautify(str) {
      const str2 = str.toLowerCase();
      const str3 = str2.charAt(0).toUpperCase() + str2.slice(1);
      return str3;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "/src/styles/variables.scss";

.location {
  &__search {
    display: flex;
    width: 579px;
    height: 97px;
    padding: 30px;
    border-radius: 8px;
    background-color: $main-color;
    font-size: $text-search-size;
    color: $secondary-color;

    input[type="search"] {
      flex-grow: 1;
      border: none;
      outline: none;
      -webkit-appearance: none;
      vertical-align: middle;
    }
    input[type="submit"] {
      border: none;
      background: none;
      cursor: pointer;
    }
  }
  &__name {
    margin-bottom: 9px;
    font-size: $title-size;
    cursor: pointer;
  }
  &__managment {
    display: flex;
  }
  &__change {
    margin-right: 29px;
    font-size: $subtitle-size;
    opacity: 0.6;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }
  &__mycoordinates {
    display: flex;
    font-size: $subtitle-size;
    opacity: 0.6;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }
  &__icon {
    width: 19px;
    height: 23px;
    margin-right: 12px;
    fill: $main-color;
  }
}
</style>
