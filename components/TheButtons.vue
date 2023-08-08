<template>
  <div class="w-full flex flex-col gap-3.5">
    <div class="w-full flex justify-end gap-3.5">
      <the-button color="orange" @click="clearAll">C</the-button>
      <the-button orange>(</the-button>
      <the-button orange>)</the-button>
      <the-button purple>*</the-button>
    </div>

    <div class="w-full flex justify-end gap-3.5">
      <the-button>7</the-button>
      <the-button>8</the-button>
      <the-button>9</the-button>
      <the-button purple>/</the-button>
    </div>

    <div class="w-full flex justify-end gap-3.5">
      <the-button>4</the-button>
      <the-button>5</the-button>
      <the-button>6</the-button>
      <the-button purple>-</the-button>
    </div>

    <div class="w-full flex justify-end gap-3.5">
      <the-button>1</the-button>
      <the-button>2</the-button>
      <the-button>3</the-button>
      <the-button purple>+</the-button>
    </div>

    <div class="w-full flex justify-end gap-3.5">
      <the-button>.</the-button>
      <the-button>0</the-button>
      <the-button>AC</the-button>
      <the-button color="purple">=</the-button>
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
</script>
