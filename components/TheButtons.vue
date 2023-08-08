<template>
  <div class="w-full flex flex-col gap-3.5">
    <div class="w-full flex justify-end gap-3.5">
      <the-button @click="clearAll" color="orange">C</the-button>
      <the-button @click="inputChar($event)" orange>(</the-button>
      <the-button @click="inputChar($event)" orange>)</the-button>
      <the-button @click="inputChar($event)" purple>*</the-button>
    </div>

    <div class="w-full flex justify-end gap-3.5">
      <the-button @click="inputChar($event)">7</the-button>
      <the-button @click="inputChar($event)">8</the-button>
      <the-button @click="inputChar($event)">9</the-button>
      <the-button @click="inputChar($event)" purple>/</the-button>
    </div>

    <div class="w-full flex justify-end gap-3.5">
      <the-button @click="inputChar($event)">4</the-button>
      <the-button @click="inputChar($event)">5</the-button>
      <the-button @click="inputChar($event)">6</the-button>
      <the-button @click="inputChar($event)" purple>-</the-button>
    </div>

    <div class="w-full flex justify-end gap-3.5">
      <the-button @click="inputChar($event)">1</the-button>
      <the-button @click="inputChar($event)">2</the-button>
      <the-button @click="inputChar($event)">3</the-button>
      <the-button @click="inputChar($event)" purple>+</the-button>
    </div>

    <div class="w-full flex justify-end gap-3.5">
      <the-button @click="inputChar($event)">.</the-button>
      <the-button @click="inputChar($event)">0</the-button>
      <the-button @click="inputChar($event)">AC</the-button>
      <the-button @click="result" color="purple">=</the-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheButtons",
};
</script>

<script setup>
import { useStore } from "@nuxtjs/composition-api";
// variables
const store = useStore();

// methods
const clearAll = () => {
  store.dispatch("clearAll");
};
const inputChar = (e) => {
  const char = e.target.innerText;
  store.dispatch("updateDisplay", char);
};
const result = () => {
  store.dispatch("calculate");
};
</script>
