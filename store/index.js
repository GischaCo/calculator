export const state = () => ({
  theme: "dark", // app theme mode (can be switched or be taken from localStorage) [default => 'dark']
  display: "", // the phrase or result value
  history: [], // it holds previous operations that made you approach this result
  calculated: false, // uses for when you calculate sth and clicked on the '=' button, to clear everything (display & history) on the next step
});

export const mutations = {
  // ---- theme
  updateThemeMode(state, value) {
    state.theme = value; // update app theme to the new value (accepting 'light' & 'dark')
  },
  // ---- setting
  toggleCalculated(state) {
    state.calculated = !state.calculated; // toggle the calculated boolean to know what to do in next step
  },
  // ---- display
  updateDisplay(state, value) {
    state.display = value; // update the display-box to new value
  },
  clearDisplay(state) {
    state.display = ""; // clear anything user wrote using number & operator buttons
  },
  updateHistory(state, value) {
    state.history.push(value); // add new operation and store in the history array
  },
  clearHistory(state) {
    state.history = []; // clear anything stored in history array
  },
};

export const actions = {
  // theme setting
  checkThemeMode({ commit }) {
    if (
      // check if the stored theme-mode in localStorage is dark or even there's nothing stored, set the theme to 'dark-mode' (default mode is 'dark')
      localStorage.Gischa_Calculator_Theme === "dark" ||
      !("Gischa_Calculator_Theme" in localStorage)
    ) {
      document.documentElement.classList.add("dark"); // add dark class to html tag (tailwind)
      commit("updateThemeMode", "dark"); // update theme to 'dark' in state
    } else {
      document.documentElement.classList.remove("dark"); // remove dark class from html tag (tailwind)
      commit("updateThemeMode", "light"); // update theme to 'light' in state
    }
  },
  updateThemeMode({ commit }, value) {
    localStorage.Gischa_Calculator_Theme = value; // on each theme-switch (dom), update the stored value in localStorage
    commit("updateThemeMode", value); // also update the value stored in vuex state

    // set the new theme mode and add/remove 'dark' class to/from html tag (tailwind)
    if (value === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  },
  // calculate
  calculate({ state, commit }) {
    const operators = ["*", "/", "+", "-", "."]; // the operation characters

    // when user wants to calculate the inserted phrase but 'the last character' is an operating character, remove it (otherwise, you'll give some errors :D)
    const displayLastIndex = state.display[state.display.length - 1];
    if (operators.includes(displayLastIndex)) {
      commit("updateDisplay", state.display.slice(0, -1));
    }

    // store the complete operation used to be calculate in 'history' array on state
    commit("updateHistory", state.display);

    // finally, calculate the result :)
    const result = eval(state.display); // calculate using javascript itself, not an external package or sth
    commit("updateDisplay", String(result)); // update the display-box value to show the result
    commit("toggleCalculated"); // set the 'calculated' key to 'true', because an calculation got done right now
  },
  // display
  updateDisplay({ state, commit }, value) {
    let prevDisplay = state.display; // get previous display-box value to use later
    const operators = ["*", "/", "+", "-", "."]; // the operation characters

    if (state.calculated) {
      /*
      Summary of this part:
      When user calculated something and saw the result, then if
      the new inserted value is an operator character, the operation will
      going to be continued and we'll save the previous operation
      in history as usual;
      -- BUT --
      If the new inserted character is a number (not a character),
      then the history will be refreshed (completely clear), and the
      display-box value will be 0. Cause we're gonna start a new
      operation & calculating story. Hope I explained as well :D

      For a better POV, you can take a quick look at your smartphone calculator
      */
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
    const newDisplay = prevDisplay.slice(0, -1); // remove the last inserted character

    commit("updateDisplay", newDisplay);
  },
  clearAll({ commit }) {
    // resfresh anything inc. display-box value & history
    commit("clearDisplay");
    commit("clearHistory");
  },
};

export const getters = {
  history(state) {
    return state.history;
  },
};
