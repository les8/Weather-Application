import { createStore } from "vuex";
import axios from "axios";
import { kelvinToFahrenheit } from "@/js/formules";

export const store = createStore({
  state() {
    return {
      currentCity: "",
      currentWeather: {},
      apiKey: "",
      currentPosition: {},
      inFahrenheit: false,
      fahrenheitTemperature: "",
    };
  },
  mutations: {
    setCurrentCity(state, payload) {
      state.currentCity = payload;
    },
    setCurrentWeather(state, payload) {
      state.currentWeather = payload;
    },
    setCurrentPosition(state, payload) {
      state.currentPosition = payload;
    },
    toggleFahrenheitTemperature(state, payload) {
      state.inFahrenheit = payload;
    },
    setFahrenheitTemperature(state, payload) {
      state.fahrenheitTemperature = payload;
    },
  },
  actions: {
    async setWeatherByName(state) {
      const weatherByName = await axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${this.state.currentCity}&appid=${this.state.apiKey}`
        )
        .then((response) => response.data);
      state.commit("setCurrentWeather", weatherByName);
      state.commit(
        "setFahrenheitTemperature",
        kelvinToFahrenheit(weatherByName.main.temp).toFixed(0)
      );
    },
    async setWeatherByCoords(state) {
      function getCoordinates() {
        return new Promise(function (resolve, reject) {
          navigator.geolocation.getCurrentPosition(resolve, reject);
        });
      }
      await getCoordinates().then((pos) =>
        state.commit("setCurrentPosition", pos.coords)
      );
      const weatherByCoords = await axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${this.state.currentPosition.latitude}&lon=${this.state.currentPosition.longitude}&appid=${this.state.apiKey}`
        )
        .then((response) => response.data);
      state.commit("setCurrentWeather", weatherByCoords);
      state.commit("setCurrentCity", weatherByCoords.name);
      state.commit(
        "setFahrenheitTemperature",
        kelvinToFahrenheit(weatherByCoords.main.temp).toFixed(0)
      );
    },
  },
});
