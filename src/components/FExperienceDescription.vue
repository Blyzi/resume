<template>
  <div class="flex flex-col">
    <div class="font-bold text-sm">{{ title }}</div>
    <div class="text-sm italic">{{ company }}</div>
    <div class="flex justify-between text-teal-500 text-xs">
      <div>{{ startDate }} - {{ endDate }}</div>
      <div>{{ location }}</div>
    </div>
    <ul class="list-disc list-outside marker:text-teal-500 text-xs ml-4">
      <li v-for="desc in description">{{ desc }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  description: {
    type: Array as () => string[],
    required: true,
  },
  startDate: {
    type: String,
    required: true,
  },
  endDate: {
    type: String,
    required: false,
  },
  location: {
    type: String,
    required: true,
  },
});
</script>
