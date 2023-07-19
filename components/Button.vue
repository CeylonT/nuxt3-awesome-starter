<script lang="ts" setup>
const props = defineProps({
  text: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: 'primary',
  },
  size: {
    type: String,
    default: 'md',
  },
  to: {
    type: [String, Object],
    default: undefined,
  },
  href: {
    type: String,
    default: undefined,
  },
})

// state:styles
const defaultStyle = `
  tw-cursor-pointer
  tw-border tw-transition-color tw-duration-300
  tw-focus:outline-none tw-focus:ring-1 tw-focus:ring-offset-1 tw-focus:dark:ring-offset-gray-50 tw-focus:dark:ring-gray-400 tw-focus:ring-gray-600/[0.6] tw-focus:ring-offset-gray-800/[0.6]
  tw-flex tw-items-center tw-justify-center tw-font-semibold
`
const styles = reactive<{
  [key: string]: string
}>({
  none: '',
  primary:
    'tw-text-white tw-bg-primary-500 tw-hover:bg-primary-400 tw-border-primary-500',
  secondary:
    'tw-text-slate-800 tw-bg-gray-200 tw-border-gray-200 tw-hover:bg-gray-300 dark:tw-text-white dark:tw-border-slate-800 dark:tw-bg-slate-800 dark:tw-hover:bg-slate-700',
  opposite:
    'tw-text-white tw-bg-gray-800 tw-hover:bg-white tw-hover:text-gray-800 tw-hover:border-gray-900 dark:tw-text-gray-800 dark:tw-bg-gray-100 dark:tw-hover:bg-gray-800 dark:tw-hover:text-gray-100 dark:tw-border-white',
})
const sizes = reactive<{
  [key: string]: string
}>({
  lg: 'tw-h-13 tw-px-8 tw-text-lg tw-rounded-lg',
  md: 'tw-h-10 tw-px-6 tw-text-base tw-rounded',
  sm: 'tw-h-9 tw-px-4 tw-text-sm tw-rounded',
  xs: 'tw-h-6 tw-px-3 tw-text-xs tw-rounded',
})

// state
const selectedStyle = computed(() =>
  props.type in styles ? styles[props.type] : styles.primary
)
const selectedSize = computed(() => sizes[props.size] || sizes.lg)

// methods
const onClick = (event: MouseEvent) => {
  const router = useRouter()
  if (props.to) {
    router.push(props.to)
  }
  if (!props.href) {
    event.preventDefault()
  }
}
</script>

<template>
  <NuxtLink
    v-if="to"
    tag="a"
    :to="to"
    :class="`${defaultStyle} ${selectedStyle} ${selectedSize}`"
  >
    <slot>{{ text }}</slot>
  </NuxtLink>
  <a
    v-else
    :class="`${defaultStyle} ${selectedStyle} ${selectedSize}`"
    :href="href"
    @click="onClick"
  >
    <slot>{{ text }}</slot>
  </a>
</template>
