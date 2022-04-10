import { createStore } from "vuex";

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
});
