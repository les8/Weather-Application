<template>
  <div class="location">
    <div class="location__search" v-if="isChanged">
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
export default {
  name: "location-block",
  data() {
    return {
      info: null,
      currentCity: "",
      isChanged: false,
    };
  },
  mounted() {
    this.currentCity = this.$store.getters.getCurrentCity;
  },
  components: {
    SvgIcon,
  },
  methods: {
    editCurrentCity() {
      this.currentCity = "";
      this.isChanged = true;
    },
    setCurrentCity() {
      this.$store.commit("setCurrentCity", this.currentCity);
      this.isChanged = false;
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
