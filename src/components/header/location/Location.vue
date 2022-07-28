<template>
  <div class="location">
    <div v-if="inChanges" class="location__search">
      <input
        type="search"
        name="city-search"
        placeholder="search for a lovely place..."
        v-model="inputCity"
        @keydown.enter="submitCurrentCity"
      />
      <input type="submit" value="OK" @click="submitCurrentCity" />
    </div>
    <div v-else class="location__info">
      <h3 class="location__name" @click="editCurrentCity">
        {{ currentCity }}
      </h3>
      <div class="location__managment">
        <h6 class="location__change" @click="editCurrentCity">Change Region</h6>
        <div class="location__mycoordinates">
          <SvgIcon name="location" className="location__icon" />
          <p @click="setWeatherByCoords">My Location</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SvgIcon from "./../../constructor/SvgIcon.vue";
import { mapState, mapActions, mapMutations } from "vuex";

export default {
  name: "location-block",
  data() {
    return {
      inputCity: "",
      beforeEditCity: this.inputCity,
      inChanges: false,
    };
  },
  computed: mapState(["currentCity"]),
  components: {
    SvgIcon,
  },
  methods: {
    editCurrentCity() {
      this.beforeEditCity = this.inputCity;
      this.inputCity = "";
      this.inChanges = true;
    },
    submitCurrentCity() {
      if (this.inputCity !== "") {
        this.setCurrentCity(this.strBeautify(this.inputCity));
        this.setWeatherByName();
      } else this.inputCity = this.beforeEditCity;
      this.inChanges = false;
    },
    strBeautify(str) {
      const str2 = str.toLowerCase();
      const str3 = str2.charAt(0).toUpperCase() + str2.slice(1);
      return str3;
    },
    ...mapMutations(["setCurrentCity"]),
    ...mapActions(["setWeatherByCoords", "setWeatherByName"]),
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
    background-color: $primary-color;
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
    fill: $primary-color;
  }
}
</style>
