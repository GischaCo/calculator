<template>
  <div
    class="w-[21rem] h-[40rem] p-4 bg-gradient-to-b from-neutral-700 to-neutral-900 shadow-xl shadow-neutral-950 rounded-3xl flex flex-col items-center justify-end gap-8 overflow-hidden"
  >
    <!-- previous operations -->
    <the-operations></the-operations>

    <!-- result -->
    <the-result></the-result>

    <!-- buttons -->
    <the-buttons></the-buttons>
  </div>
</template>

<script>
export default {
  name: "TheCalculator",
};
</script>
