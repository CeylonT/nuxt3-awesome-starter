<script lang="ts" setup>
// compiler macro
const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: '',
  },
  size: {
    type: String,
    default: 'md',
  },
  type: {
    type: String,
    default: 'default',
  },
})
const emit = defineEmits(['update:modelValue'])
const slots = useSlots()

// list styles
const paddingStyles = reactive<{
  [key: string]: string
}>({
  xs: 'tw-px-1 tw-py-0.5',
  sm: 'tw-px-2 tw-py-1.5',
  md: 'tw-px-4 tw-py-2',
  lg: 'tw-px-5 tw-py-3',
})
const fontSizeStyles = reactive<{
  [key: string]: string
}>({
  xs: 'tw-text-xs',
  sm: 'tw-text-sm',
  md: 'tw-text-base',
  lg: 'tw-text-lg',
})

// states
const modelValue = useSyncProps<string>(props, 'modelValue', emit)
const havePreEl = computed(
  () =>
    typeof slots.prefix !== 'undefined' ||
    typeof slots['prefix-disabled'] !== 'undefined'
)
const haveSuEl = computed(() => typeof slots.suffix !== 'undefined')
const selectedBorderStyle = computed(
  () => 'tw-border-gray-900/10 dark:tw-border-gray-50/[0.2]'
)
const selectedOnHoverBorderStyle = computed(
  () => 'dark:tw-focus:border-white tw-focus:border-gray-900'
)
const selectedPaddingStyle = computed(
  () => paddingStyles[props.size] || paddingStyles.md
)
const selectedFontSizeStyle = computed(
  () => fontSizeStyles[props.size] || fontSizeStyles.md
)
</script>

<template>
  <div :class="`tw-text-input-container tw-relative tw-flex`">
    <div
      v-if="slots['prefix-disabled']"
      :class="`tw-flex tw-rounded-l tw-bg-gray-100 dark:tw-bg-slate-800 tw-text-gray-500 tw-border ${selectedBorderStyle}`"
    >
      <slot name="prefix-disabled" />
    </div>
    <div
      v-if="slots.prefix"
      :class="`tw-flex tw-rounded-l tw-border ${selectedBorderStyle}`"
    >
      <slot name="prefix" />
    </div>
    <div class="tw-text-input-wrapper tw-relative tw-flex tw-flex-1">
      <input
        v-model="modelValue"
        :class="`tw-text-input tw-w-full tw-flex-1 tw-bg-transparent tw-outline-none tw-border ${
          havePreEl ? '' : 'tw-rounded-l'
        } ${
          haveSuEl ? '' : 'tw-rounded-r'
        } ${selectedBorderStyle} ${selectedOnHoverBorderStyle} ${selectedPaddingStyle} ${selectedFontSizeStyle}`"
        :type="type"
        :placeholder="placeholder"
      />
    </div>
    <div
      v-if="slots.suffix"
      :class="`tw-flex tw-rounded-r tw-border ${selectedBorderStyle}`"
    >
      <slot name="suffix" />
    </div>
  </div>
</template>
