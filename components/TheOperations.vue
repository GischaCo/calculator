<template>
  <div class="w-full flex flex-col items-end overflow-hidden">
    <the-operation v-for="(item, i) in history" :key="i">{{
      item
    }}</the-operation>
  </div>
</template>

<script>
export default {
  name: "TheOperations",
};
</script>

<script setup>
import { computed, useStore } from "@nuxtjs/composition-api";

// variables
const store = useStore();

// computed
const history = computed(() => {
  return store.getters.history;
});
</script>
