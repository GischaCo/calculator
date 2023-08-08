export const state = () => ({
  theme: "dark",
  display: "1",
  history: [],
});

export const mutations = {
  // theme setting
  updateThemeMode(state, value) {
    state.theme = value;
  },
  // display
  clearDisplay(state) {
    state.display = "0";
  },
  clearHistory(state) {
    state.history = [];
  },
};

export const actions = {
  // theme setting
  checkThemeMode({ commit }) {
    if (
      localStorage.Gischa_Calculator_Theme === "dark" ||
      !("Gischa_Calculator_Theme" in localStorage)
    ) {
      document.documentElement.classList.add("dark");
      commit("updateThemeMode", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      commit("updateThemeMode", "light");
    }
  },
  updateThemeMode({ commit }, value) {
    localStorage.Gischa_Calculator_Theme = value;
    commit("updateThemeMode", value);

    if (value === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  },
  // calculate
  // ...

  // display
  clearAll({ commit }) {
    commit("clearDisplay");
    commit("clearHistory");
  },
};
