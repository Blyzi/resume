<template>
  <div class="flex flex-col text-sm">
    <div class="flex justify-between font-bold">
      <div>{{ title }}</div>
      <div>{{ location }}</div>
    </div>
    <div class="flex justify-between">
      <div class="italic">{{ school }}</div>
      <div>{{ startDate }} - {{ endDate }}</div>
    </div>
    <div><span class="font-bold">GPA</span> {{ gpa.toFixed(2) }}/4.00</div>
    <div>
      <span class="font-bold">Relevant Coursework:</span>
      {{ courses.join(", ") }}
    </div>
    <div v-if="activities">
      <span class="font-bold">Activities:</span>
      {{ activities.join(", ") }}
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  school: {
    type: String,
    required: true,
  },
  gpa: {
    type: Number,
    required: true,
  },
  courses: {
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
  activities: {
    type: Array as () => string[],
    required: false,
  },
});
</script>
