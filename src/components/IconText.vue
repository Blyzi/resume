<template>
  <div>
    <div class="flex gap-2 items-center" v-if="!link">
      <div
        :class="[reverse ? 'bg-slate-800' : 'bg-white']"
        class="w-8 h-8 rounded-md p-2 aspect-square"
      >
        <component class="h-full w-full" :is="icon" v-if="icon" />
        <img class="h-full w-full" :src="imgIcon" v-else />
      </div>

      <div :class="[reverse ? 'text-slate-800' : 'text-white']">{{ text }}</div>
    </div>
    <a :href="link" class="flex gap-2 items-center" target="_blank" v-else>
      <div
        :class="[reverse ? 'bg-slate-800' : 'bg-white']"
        class="w-8 h-8 rounded-md p-2 aspect-square"
      >
        <component class="h-full w-full" :is="icon" v-if="icon" />
        <img class="h-full w-full" :src="imgIcon" v-else />
      </div>
      <div :class="[reverse ? 'text-slate-800' : 'text-white']">{{ text }}</div>
    </a>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  icon: {
    type: Function as () => any,
    required: false,
  },
  imgIcon: {
    type: String,
    required: false,
  },
  text: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: false,
  },
  reverse: {
    type: Boolean,
    required: false,
    default: false,
  },
});
</script>
