<template>
  <the-calculator></the-calculator>
</template>

<script setup>
import { useStore } from "@nuxtjs/composition-api";

// variables
const store = useStore();

// setup app theme on first load
store.dispatch("checkThemeMode");
</script>
