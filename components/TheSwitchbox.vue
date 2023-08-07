<template>
  <label class="switch">
    <input
      class="switch__input"
      type="checkbox"
      role="switch"
      v-model="themeMode"
      @change="updateThemeMode"
    />
    <svg
      class="switch__icon switch__icon--light"
      viewBox="0 0 12 12"
      width="12px"
      height="12px"
      aria-hidden="true"
    >
      <g fill="none" stroke="#fff" stroke-width="1" stroke-linecap="round">
        <circle cx="6" cy="6" r="2" />
        <g stroke-dasharray="1.5 1.5">
          <polyline points="6 10,6 11.5" transform="rotate(0,6,6)" />
          <polyline points="6 10,6 11.5" transform="rotate(45,6,6)" />
          <polyline points="6 10,6 11.5" transform="rotate(90,6,6)" />
          <polyline points="6 10,6 11.5" transform="rotate(135,6,6)" />
          <polyline points="6 10,6 11.5" transform="rotate(180,6,6)" />
          <polyline points="6 10,6 11.5" transform="rotate(225,6,6)" />
          <polyline points="6 10,6 11.5" transform="rotate(270,6,6)" />
          <polyline points="6 10,6 11.5" transform="rotate(315,6,6)" />
        </g>
      </g>
    </svg>
    <svg
      class="switch__icon switch__icon--dark"
      viewBox="0 0 12 12"
      width="12px"
      height="12px"
      aria-hidden="true"
    >
      <g
        fill="none"
        stroke="#fff"
        stroke-width="1"
        stroke-linejoin="round"
        transform="rotate(-45,6,6)"
      >
        <path
          d="m9,10c-2.209,0-4-1.791-4-4s1.791-4,4-4c.304,0,.598.041.883.105-.995-.992-2.367-1.605-3.883-1.605C2.962.5.5,2.962.5,6s2.462,5.5,5.5,5.5c1.516,0,2.888-.613,3.883-1.605-.285.064-.578.105-.883.105Z"
        />
      </g>
    </svg>
  </label>
</template>

<script>
export default {
  name: "TheSwitchbox",
};
</script>

<script setup>
import { onMounted, ref, useStore } from "@nuxtjs/composition-api";

// variables
const store = useStore();
const themeMode = ref(false); // false:light true:dark

// methods
const updateThemeMode = () => {
  if (themeMode.value) {
    store.dispatch("updateThemeMode", "dark");
  } else {
    store.dispatch("updateThemeMode", "light");
  }
};

// lifecycles
onMounted(() => {
  // checkh theme on first mount
  themeMode.value = store.state.theme === "dark";
});
</script>

<style scoped>
* {
  border: 0;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  background-color: #e3e4e8;
  display: flex;
  height: 100vh;
  transition: background 0.3s, color 0.3s;
}
body:has(.switch__input:checked) {
  background-color: #17181c;
  color: #e3e4e8;
}
.switch {
  margin: auto;
  position: absolute;
  top: 1rem;
  left: 1rem;
}
.switch__icon,
.switch__input {
  display: block;
}
.switch__icon {
  position: absolute;
  top: 0.375em;
  right: 0.375em;
  width: 0.75em;
  height: 0.75em;
  transition: opacity calc(0.3s / 2), transform calc(0.3s / 2);
}
.switch__icon polyline {
  transition: stroke-dashoffset calc(0.3s / 2);
}
.switch__icon--light,
.switch__icon--light polyline {
  transition-delay: calc(0.3s / 2);
  transition-timing-function: cubic-bezier(0.05, 0.76, 0.06, 0.86);
}
.switch__icon--dark {
  opacity: 0;
  transform: translateX(-0.75em) rotate(30deg) scale(0.75);
  transition-timing-function: cubic-bezier(0.76, 0.05, 0.86, 0.06);
}
.switch__input {
  background-color: hsl(210, 90%, 70%);
  border-radius: 0.75em;
  box-shadow: 0 0 0 0.125em hsla(223, 90%, 50%, 0),
    0.125em 0.125em 0.25em hsla(223, 90%, 10%, 0.2);
  outline: transparent;
  position: relative;
  width: 3em;
  height: 1.5em;
  -webkit-appearance: none;
  appearance: none;
  -webkit-tap-highlight-color: transparent;
  transition: background 0.3s cubic-bezier(0.76, 0.05, 0.24, 0.95),
    box-shadow 0.15s linear;
}
.switch__input:focus-visible {
  box-shadow: 0 0 0 0.125em hsl(223, 90%, 50%),
    0.125em 0.125em 0.25em hsla(223, 90%, 10%, 0.2);
}
.switch__input:before,
.switch__input:after {
  content: "";
  display: block;
  position: absolute;
}
.switch__input:before {
  background-color: hsl(50, 90%, 50%);
  border-radius: inherit;
  mask-image: linear-gradient(
    120deg,
    hsl(0, 0%, 0%) 20%,
    hsla(0, 0%, 0%, 0) 80%
  );
  -webkit-mask-image: linear-gradient(
    120deg,
    hsl(0, 0%, 0%) 20%,
    hsla(0, 0%, 0%, 0) 80%
  );
  inset: 0;
  transition: background 0.3s cubic-bezier(0.76, 0.05, 0.24, 0.95);
}
.switch__input:after {
  background-color: hsl(0, 0%, 100%);
  border-radius: 50%;
  box-shadow: 0.05em 0.05em 0.05em hsla(223, 90%, 10%, 0.1);
  top: 0.125em;
  left: 0.125em;
  width: 1.25em;
  height: 1.25em;
  transition: background 0.3s cubic-bezier(0.76, 0.05, 0.24, 0.95),
    transform 0.3s cubic-bezier(0.76, 0.05, 0.24, 0.95);
  z-index: 1;
}
.switch__input:checked {
  background-color: hsl(290, 90%, 40%);
}
.switch__input:checked:before {
  background-color: hsl(220, 90%, 40%);
}
.switch__input:checked:after {
  background-color: hsl(0, 0%, 0%);
  transform: translateX(1.5em);
}
.switch__input:checked ~ .switch__icon--light,
.switch__input:checked ~ .switch__icon--light polyline {
  transition-delay: 0s;
  transition-timing-function: cubic-bezier(0.76, 0.05, 0.86, 0.06);
}
.switch__input:checked ~ .switch__icon--light {
  opacity: 0;
  transform: translateX(-0.75em) rotate(-30deg) scale(0.75);
}
.switch__input:checked ~ .switch__icon--light polyline {
  stroke-dashoffset: 1.5;
}
.switch__input:checked ~ .switch__icon--dark {
  opacity: 1;
  transform: translateX(-1.5em);
  transition-delay: calc(0.3s / 2);
  transition-timing-function: cubic-bezier(0.05, 0.76, 0.06, 0.86);
}
</style>
