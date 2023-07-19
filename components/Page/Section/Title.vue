<script lang="ts" setup>
defineProps({
  text: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <div class="tw-text-2xl tw-font-semibold tw-mb-2">
    <slot>{{ text }}</slot>
  </div>
</template>
