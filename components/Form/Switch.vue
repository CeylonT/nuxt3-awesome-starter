<script lang="ts" setup>
// compiler macro
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  on: {
    type: Boolean,
    default: false,
  },
  id: {
    type: String,
    default: undefined,
  },
})
const emit = defineEmits(['update:modelValue'])

// random
const randomId = () =>
  Math.random().toString(36).substring(2, 15) +
  Math.random().toString(36).substring(2, 15)

// state
const id = ref(props.id || randomId())
const input = ref<HTMLInputElement>()

// funcs
const checked = useSyncProps<boolean>(props, 'modelValue', emit)
const onInputChange = (e: Event) => {
  const target = e.target as HTMLInputElement
  checked.value = target.checked
  emit('update:modelValue', target.checked)
}

// lifecycle
onMounted(() => {
  if (props.on) {
    checked.value = true
    emit('update:modelValue', true)
    if (input.value) input.value.checked = true
  }
})
</script>

<template>
  <label :for="id" class="tw-flex tw-cursor-pointer">
    <label
      :for="id"
      class="tw-relative tw-inline-block tw-w-10 tw-mr-2 tw-align-middle tw-select-none tw-transition tw-duration-200 tw-ease-in"
    >
      <input
        :id="id"
        ref="input"
        type="checkbox"
        class="tw-switch-checkbox tw-absolute tw-block tw-w-6 tw-h-6 tw-rounded-full tw-bg-white dark:tw-bg-slate-900 tw-border-2 tw-border-slate-300 dark:tw-border-slate-600 tw-appearance-none tw-cursor-pointer"
        :checked="checked"
        @change="onInputChange"
      />
      <label
        :for="id"
        class="tw-switch-label tw-block tw-overflow-hidden tw-h-6 tw-rounded-full tw-bg-gray-200 dark:tw-bg-slate-700 tw-cursor-pointer tw-border tw-border-slate-300 dark:tw-border-slate-500"
      />
    </label>
    <slot />
  </label>
</template>

<style>
.tw-switch-checkbox:checked {
  right: 0;
}
.tw-switch-checkbox:checked + .tw-switch-label {
  @apply tw-bg-primary-500;
}
</style>
