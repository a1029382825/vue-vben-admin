<script setup lang="ts">
defineProps<{ label: string }>();
</script>

<template>
  <div class="flex flex-col">
    <span class="font-mono font-medium">
      <slot></slot>
    </span>
    <span
      class="text-dark-50 dark:text-light-900 text-sm font-medium opacity-80 dark:opacity-50"
    >
      {{ label }}
    </span>
  </div>
</template>
