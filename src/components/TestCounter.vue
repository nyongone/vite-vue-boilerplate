<template>
  <div class="flex flex-col items-start justify-center gap-4">
    <p>Count: {{ getCount }}</p>
    <button @click="increment">Click!</button>
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from "@/stores/counter";

const { getCount, increment } = useCounterStore();
</script>
