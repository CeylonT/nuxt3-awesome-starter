<script lang="ts" setup>
import { TransitionRoot, TransitionChild } from '@headlessui/vue'

// micro compiler
const emit = defineEmits(['onClose'])

// state
const show = ref(false)

// methods
const close = () => {
  show.value = false
  setTimeout(() => emit('onClose'), 100)
}

// lifecycle
onMounted(() => {
  setTimeout(() => (show.value = true), 100)
})
</script>

<template>
  <Teleport to="body">
    <TransitionRoot :show="show" appear>
      <div>
        <ActionSheetOverlay @click="close" />
        <TransitionChild
          as="template"
          tw-enter="tw-duration-300 tw-ease-out"
          tw-enter-from="tw-opacity-0"
          tw-enter-to="tw-opacity-100"
          tw-leave="tw-duration-300 tw-ease-in"
          tw-leave-from="tw-opacity-100"
          tw-leave-to="tw-opacity-0"
        >
          <div
            class="tw-fixed tw-bottom-0 tw-w-screen tw-z-50 tw-flex"
            style="max-height: 66.666667%"
          >
            <div
              class="tw-relative tw-max-w-8xl tw-px-4 tw-pb-4 tw-w-full tw-mx-auto tw-flex tw-flex-col tw-flex-1 tw-space-y-1 tw-overflow-y-auto tw-justify-end"
            >
              <slot />
            </div>
          </div>
        </TransitionChild>
      </div>
    </TransitionRoot>
  </Teleport>
</template>

<style lang="scss">
.slide-fade-from-bottom-enter-active {
  transition: all 0.3s ease-out;
}
.slide-fade-from-bottom-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-from-bottom-enter-from,
.slide-fade-from-bottom-leave-to {
  transform: translateY(20px);
  opacity: 0;
}
</style>
