<script lang="ts" setup>
defineProps({
  text: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <div class="tw-text-4xl tw-font-bold">
    <slot>{{ text }}</slot>
  </div>
</template>
