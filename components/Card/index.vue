<script lang="ts" setup>
defineProps({
  disabled: {
    type: Boolean,
    required: false,
  },
})
</script>

<template>
  <div
    class="tw-card tw-duration-300 tw-transition-colors tw-w-full tw-relative tw-rounded tw-overflow-hidden tw-bg-white dark:tw-bg-slate-900 tw-border tw-border-gray-900/10 dark:tw-border-gray-50/[0.2]"
  >
    <div
      v-if="disabled"
      class="tw-absolute tw-z-10 tw-top-0 tw-left-0 tw-w-full tw-h-full tw-bg-slate-800/[0.75] tw-cursor-not-allowed"
    />
    <slot />
  </div>
</template>
