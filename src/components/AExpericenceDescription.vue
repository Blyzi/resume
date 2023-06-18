<template>
  <div class="flex flex-col">
    <div class="flex justify-between font-bold">
      <div>{{ title }}</div>
      <div>{{ location }}</div>
    </div>
    <div class="flex justify-between">
      <div class="italic">{{ company }}</div>
      <div>{{ startDate }} - {{ endDate }}</div>
    </div>
    <ul class="list-disc list-outside ml-4">
      <li v-for="desc in description">{{ desc }}</li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
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
