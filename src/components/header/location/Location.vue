<template>
  <div class="location">
    <div class="location__search" v-if="inChanges">
      <input
        type="search"
        name="city-search"
        placeholder="search for a lovely place..."
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
          Change Region
        </h6>
        <div class="location__mycoordinates">
          <SvgIcon name="location" className="location__icon" />
          <p>My Location</p>
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
      currentCity: "",
      inChanges: false,
    };
  },
  mounted() {
    this.currentCity = this.$store.getters.getCurrentCity;
  },
  updated() {
    this.$store.dispatch("setCurrentWeather");
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
