<template>
  <div class="bg-slate-600 rounded-md p-1">
    {{ tag }}
  </div>
</template>

<script setup lang="ts">
defineProps({
  tag: {
    type: String,
    required: true,
  },
});
</script>
