export const state = () => ({
  theme: "dark",
  display: "",
  history: [],
  calculated: false,
});

export const mutations = {
  // theme setting
  updateThemeMode(state, value) {
    state.theme = value;
  },
  // setting
  toggleCalculated(state) {
    state.calculated = !state.calculated;
  },
  // display
  updateDisplay(state, value) {
    state.display = value;
  },
  clearDisplay(state) {
    state.display = "";
  },
  updateHistory(state, value) {
    state.history.push(value);
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
  calculate({ state, commit }) {
    const operators = ["*", "/", "+", "-", "."];
    const displayLastIndex = state.display[state.display.length - 1];
    if (operators.includes(displayLastIndex)) {
      commit("updateDisplay", state.display.slice(0, -1));
    }

    commit("updateHistory", state.display);

    const result = eval(state.display);
    commit("updateDisplay", String(result));
    commit("toggleCalculated");
  },
  // display
  updateDisplay({ state, commit }, value) {
    let prevDisplay = state.display;
    const operators = ["*", "/", "+", "-", "."];

    if (state.calculated) {
      if (!operators.includes(value)) {
        prevDisplay = "";
        commit("toggleCalculated");
        commit("clearHistory");
      } else {
        commit("toggleCalculated");
      }
    }

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
  clearOne({ state, commit }) {
    const prevDisplay = state.display;
    const newDisplay = prevDisplay.slice(0, -1);

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
