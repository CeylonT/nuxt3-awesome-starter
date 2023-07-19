<script lang="ts" setup>
// components
const PageWrapper = resolveComponent('PageWrapper')

// compiler macro
const props = defineProps({
  code: {
    type: Number,
    default: 400,
  },
  wrap: {
    type: Boolean,
    default: false,
  },
})

// computed
const errorsMap: {
  [key: string]: string
} = {
  '400': 'Bad Request',
  '401': 'Unauthorized',
  '403': 'Forbidden',
  '404': 'Not Found',
}
const error = computed(() => {
  const { code } = props
  return {
    code,
    message: errorsMap[code.toString()] || 'Unknown Error',
  }
})
</script>

<template>
  <component
    :is="props.wrap ? 'PageWrapper' : 'div'"
    :class="
      props.wrap ? 'tw-flex tw-flex-col tw-items-center tw-justify-center' : ''
    "
  >
    <h1 class="tw-text-center tw-mb-6 tw-leading-3">
      <span class="tw-font-bold tw-text-8xl tw-block">{{ error.code }}</span>
      <span class="tw-block tw-italic">{{ error.message }}</span>
    </h1>
    <Button text="Home" to="/" size="sm" />
  </component>
</template>
