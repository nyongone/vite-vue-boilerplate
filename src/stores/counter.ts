import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useCounterStore = defineStore("counter", () => {
  const count = ref(0);
  const getCount = computed(() => count);
  function increment() {
    count.value++;
  }

  return { count, getCount, increment };
});
