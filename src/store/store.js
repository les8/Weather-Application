import { createStore } from "vuex";
import axios from "axios";

export const store = createStore({
  state() {
    return {
      currentCity: "Kirov",
      currentWeather: null,
      apiKey: null,
    };
  },
  getters: {
    getCurrentCity: (state) => state.currentCity,
    getCurrentWeather: (state) => state.currentWeather,
    getApiKey: (state) => state.apiKey,
  },
  mutations: {
    setCurrentCity(state, payload) {
      state.currentCity = payload;
    },
    setCurrentWeather(state, payload) {
      state.currentWeather = payload;
    },
  },
  actions: {
    async setCurrentWeather(state) {
      const weather = await axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${this.state.currentCity}&appid=${this.state.apiKey}`
        )
        .then((response) => response.data);
      state.commit("setCurrentWeather", weather);
    },
  },
});
