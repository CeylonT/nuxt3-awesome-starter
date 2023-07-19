<script lang="ts" setup>
import {
  Listbox,
  ListboxButton,
  ListboxLabel,
  ListboxOptions,
  ListboxOption,
} from '@headlessui/vue'
import { availableLocales } from '~/utils/lang'

// micro compiler
const props = defineProps({
  type: {
    type: String,
    default: 'dropdown-right-top',
  },
})

// state
const currentStyle = toRef(props, 'type')
const localeSetting = useState<string>('locale.setting')
</script>

<template>
  <div class="tw-flex tw-items-center">
    <Listbox
      v-if="currentStyle === 'dropdown-right-top'"
      v-model="localeSetting"
      as="div"
      class="tw-relative tw-flex tw-items-center"
    >
      <ListboxLabel class="tw-sr-only">Theme</ListboxLabel>
      <ListboxButton
        type="button"
        title="Change Language"
        class="tw-transition-colors tw-duration-300"
      >
        <span class="tw-justify-center tw-items-center tw-flex">
          <IconLa:language />
        </span>
      </ListboxButton>
      <ListboxOptions
        class="tw-p-1 tw-absolute tw-z-50 tw-top-full tw-right-0 tw-outline-none tw-bg-white tw-rounded-lg tw-ring-1 tw-ring-gray-900/10 tw-shadow-lg tw-overflow-hidden tw-w-36 tw-py-1 tw-text-sm tw-text-gray-700 tw-font-semibold dark:tw-bg-gray-800 dark:tw-ring-0 dark:tw-highlight-white/5 dark:tw-text-gray-300"
      >
        <ListboxOption
          v-for="lang in availableLocales"
          :key="lang.iso"
          :value="lang.iso"
          class="tw-py-2 tw-px-2 tw-flex tw-items-center tw-cursor-pointer tw-text-sm"
          :class="{
            'tw-text-sky-500 tw-bg-gray-100 dark:tw-bg-gray-600/30':
              localeSetting === lang.iso,
            'tw-hover:bg-gray-50 dark:tw-hover:bg-gray-700/30':
              localeSetting !== lang.iso,
          }"
        >
          <span class="tw-text-sm tw-mr-2">
            {{ lang.flag }}
          </span>
          <span class="tw-flex-1 tw-truncate">
            {{ lang.name }}
            <span class="tw-text-xs">({{ lang.iso }})</span>
          </span>
        </ListboxOption>
      </ListboxOptions>
    </Listbox>
    <select
      v-if="currentStyle === 'select-box'"
      v-model="localeSetting"
      class="tw-w-full tw-px-2 tw-pr-3 tw-py-1 tw-outline-none tw-rounded tw-border tw-bg-transparent tw-text-gray-700 dark:tw-text-gray-300 tw-border-gray-900/10 dark:tw-border-gray-50/[0.2]"
    >
      <option
        v-for="lang in availableLocales"
        :key="lang.iso"
        :value="lang.iso"
        class="tw-flex tw-items-center tw-space-x-2"
      >
        {{ lang.flag }} {{ lang.name }} ({{ lang.iso }})
      </option>
    </select>
  </div>
</template>
