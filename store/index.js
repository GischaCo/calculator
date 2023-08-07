export const state = () => ({
  theme: "dark",
});

export const mutations = {
  toggleTheme(state, value) {
    state.theme = value;
  },
};

export const actions = {
  checkThemeMode({ commit }) {
    if (
      localStorage.Gischa_Calculator_Theme === "dark" ||
      !("Gischa_Calculator_Theme" in localStorage)
    ) {
      document.documentElement.classList.add("dark");
      commit("toggleTheme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      commit("toggleTheme", "light");
    }
  },
};
