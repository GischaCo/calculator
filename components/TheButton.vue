<template>
  <button
    v-on="$listeners"
    :class="[overlayStyle, solidColor, themeMode]"
    class="w-16 h-14 rounded-full focus:outline-none overflow-hidden"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "TheButton",
};
</script>

<script setup>
import { computed, useStore } from "@nuxtjs/composition-api";

// props
const props = defineProps({
  purple: {
    type: Boolean,
    required: false,
    default: false,
  },
  orange: {
    type: Boolean,
    required: false,
    default: false,
  },
  color: {
    type: String,
    required: false,
    default: "default",
  },
});

// variables
const store = useStore();

// computed
const overlayStyle = computed(() => {
  const style = {
    orange:
      "relative before:content-[''] before:absolute before:top-0 before:left-0 before:rounded-full before:w-full before:h-full before:bg-yellow-700/20",
    purple:
      "relative before:content-[''] before:absolute before:top-0 before:left-0 before:rounded-full before:w-full before:h-full before:bg-purple-900/20",
  };

  return props.orange ? style.orange : props.purple ? style.purple : "";
});
const solidColor = computed(() => {
  const style = {
    orange: "text-white dark:text-zinc-300 bg-yellow-600",
    purple: "text-white dark:text-zinc-300 bg-purple-800",
    default: "text-zinc-500 bg-zinc-300 dark:text-zinc-500 dark:bg-neutral-800",
  };

  return style[props.color];
});
const themeMode = computed(() => {
  return `${store.state.theme}-mode`;
});
</script>

<style scoped>
.dark-mode {
  box-shadow: 1px 1px 4px black, -1px -1px 3px #4e4e4e;
}
.light-mode {
  box-shadow: 1px 1px 4px #a2a2a2, -1px -1px 3px #ffffff;
}
</style>
