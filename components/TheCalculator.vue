<template>
  <div
    class="relative w-[21rem] h-[40rem] p-4 bg-gradient-to-b from-zinc-100 to-zinc-300 dark:from-neutral-700 dark:to-neutral-900 shadow-xl shadow-slate-400/60 dark:shadow-neutral-950 rounded-3xl flex flex-col items-center justify-end gap-8 overflow-hidden"
  >
    <!-- theme switchbox -->
    <the-switchbox></the-switchbox>

    <!-- previous operations -->
    <the-operations></the-operations>

    <!-- result -->
    <display-box></display-box>

    <!-- buttons -->
    <the-buttons></the-buttons>
  </div>
</template>

<script>
export default {
  name: "TheCalculator",
};
</script>
