<template>
  <p
    class="w-full font-bold text-zinc-600 dark:text-zinc-400 text-5xl tracking-wide text-end"
  >
    {{ store.state.display }}
  </p>
</template>

<script>
export default {
  name: "TheResult",
};
</script>

<script setup>
import { useStore } from "@nuxtjs/composition-api";

// variables
const store = useStore();
</script>
