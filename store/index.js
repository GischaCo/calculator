export const state = () => ({
  theme: "dark",
  display: "",
  history: [],
});

export const mutations = {
  // theme setting
  updateThemeMode(state, value) {
    state.theme = value;
  },
  // display
  updateDisplay(state, value) {
    state.display = value;
  },
  clearDisplay(state) {
    state.display = "";
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
  //
  // display
  updateDisplay({ state, commit }, value) {
    let prevDisplay = state.display;
    const operators = ["*", "/", "+", "-", "."];

    if (operators.includes(value)) {
      // prevent putting an operator at first
      if (!prevDisplay.length) {
        prevDisplay = "0";
      }
      // prevent putting multiple operator after each other
      else if (operators.includes(prevDisplay[prevDisplay.length - 1])) {
        prevDisplay = prevDisplay.slice(0, -1);
      }
    }

    // update display
    const newDisplay = `${prevDisplay}${value}`;
    commit("updateDisplay", newDisplay);
  },
  clearAll({ commit }) {
    commit("clearDisplay");
    commit("clearHistory");
  },
};

export const getters = {
  history(state) {
    return state.history;
  },
};
