<script lang="ts" setup>
import { TransitionRoot, TransitionChild } from '@headlessui/vue'
export type IStyles = 'primary' | 'success' | 'warning' | 'danger'

// props
const props = defineProps({
  title: {
    type: String,
    default: undefined,
  },
  text: {
    type: String,
    default: undefined,
  },
  type: {
    type: String,
    default: 'primary',
  },
})

// styles
const styles = reactive<{
  [key: string]: string
}>({
  primary: '',
  success:
    'dark:tw-from-green-500/50 tw-via-gray-200 tw-to-gray-200 dark:tw-via-slate-800 dark:tw-to-slate-800',
  warning:
    'dark:tw-from-yellow-500/50 tw-via-gray-200 tw-to-gray-200 dark:tw-via-slate-800 dark:tw-to-slate-800',
  danger:
    'dark:tw-from-red-500/50 tw-via-gray-200 tw-to-gray-200 dark:tw-via-slate-800 dark:tw-to-slate-800',
})
const textStyles = reactive<{
  [key: string]: string
}>({
  primary: 'tw-text-black dark:tw-text-white',
  success: 'tw-text-green-500',
  warning: 'tw-text-orange-500',
  danger: 'tw-text-red-500',
})

// selected
const isDestroyed = ref<Boolean>(false)
const selectedType = computed<IStyles>(() => {
  if (['primary', 'success', 'warning', 'danger'].includes(props.type))
    return props.type as IStyles
  return 'primary'
})
const selectedStyle = computed(() => styles[selectedType.value])
const selectedTextStyle = computed(() => textStyles[selectedType.value])

// actions
const close = () => {
  isDestroyed.value = true
}
</script>

<template>
  <TransitionRoot :show="!isDestroyed" appear>
    <TransitionChild
      as="template"
      enter="tw-duration-300 tw-ease-out"
      enter-from="tw-opacity-0"
      enter-to="tw-opacity-100"
      leave="tw-duration-300 tw-ease-in"
      leave-from="tw-opacity-100"
      leave-to="tw-opacity-0"
    >
      <div
        :class="`tw-bg-gray-200 dark:tw-bg-slate-800 tw-bg-gradient-to-r tw-shadow-white/50 dark:tw-shadow-slate-900/50 tw-px-6 tw-py-6 tw-rounded-md tw-shadow-lg tw-flex tw-space-x-6 ${selectedStyle}`"
      >
        <div class="tw-flex tw-items-center tw-justify-center">
          <slot name="icon">
            <IconMdi:checkCircle
              v-if="selectedType === 'success'"
              :class="`tw-text-2xl ${selectedTextStyle}`"
            />
            <icon-clarity:times-circle-solid
              v-if="selectedType === 'danger'"
              :class="`tw-text-2xl ${selectedTextStyle}`"
            />
            <icon-bi:exclamation-circle-fill
              v-if="selectedType === 'warning'"
              :class="`tw-text-2xl ${selectedTextStyle}`"
            />
          </slot>
        </div>
        <div class="tw-flex-1">
          <div
            :class="`tw-font-bold tw-text-lg tw-mb-0.5 ${selectedTextStyle}`"
          >
            <slot name="title">{{ props.title }}</slot>
          </div>
          <div class="tw-text-gray-700 dark:tw-text-gray-100">
            <slot name="title">{{ props.text }}</slot>
          </div>
        </div>
        <div>
          <button
            class="tw-text-slate-600 tw-hover:text-red-500 dark:tw-text-gray-400 tw-font-bold"
            @click="close"
          >
            <icon-clarity:times-line />
          </button>
        </div>
      </div>
    </TransitionChild>
  </TransitionRoot>
</template>
