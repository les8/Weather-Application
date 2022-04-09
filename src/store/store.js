import { createStore } from "vuex";

export const store = createStore({
  state() {
    return {
      currentCity: "Kirov",
    };
  },
  getters: {
    getCurrentCity: (state) => state.currentCity,
  },
  mutations: {
    setCurrentCity(state, payload) {
      state.currentCity = payload;
    },
  },
});
