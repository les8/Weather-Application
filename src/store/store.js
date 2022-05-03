import { createStore } from "vuex";
import axios from "axios";

export const store = createStore({
  state() {
    return {
      currentCity: "Moscow",
      currentWeather: null,
      apiKey: null,
      currentPosition: null,
    };
  },
  getters: {
    getCurrentCity: (state) => state.currentCity,
    getCurrentWeather: (state) => state.currentWeather,
    getApiKey: (state) => state.apiKey,
    getCurrentPosition: (state) => state.currentPosition,
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
  },
  actions: {
    async setCurrentPosition(state) {
      navigator.geolocation.getCurrentPosition((pos) => {
        state.commit("setCurrentPosition", pos.coords);
      });
    },
    async setWeatherByName(state) {
      const weatherByName = await axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${this.state.currentCity}&appid=${this.state.apiKey}`
        )
        .then((response) => response.data);
      state.commit("setCurrentWeather", weatherByName);
    },
    async setWeatherByCoords(state) {
      const weatherByCoords = await axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${this.state.currentPosition.latitude}&lon=${this.state.currentPosition.longitude}&appid=${this.state.apiKey}`
        )
        .then((response) => response.data);
      state.commit("setCurrentWeather", weatherByCoords);
      state.commit("setCurrentCity", weatherByCoords.name);
    },
  },
});
