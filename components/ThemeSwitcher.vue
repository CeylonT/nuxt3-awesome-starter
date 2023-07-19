<script lang="ts" setup>
import {
  Listbox,
  ListboxButton,
  ListboxLabel,
  ListboxOptions,
  ListboxOption,
} from '@headlessui/vue'
import { IThemeSettingOptions, availableThemes } from '~/utils/theme'

// micro compiler
const props = defineProps({
  type: {
    type: String,
    default: 'dropdown-right-top',
  },
})

// state
const themeSetting = useState<IThemeSettingOptions>('theme.setting')
const currentStyle = toRef(props, 'type')
</script>

<template>
  <div class="tw-flex tw-items-center">
    <Listbox
      v-if="currentStyle === 'dropdown-right-top'"
      v-model="themeSetting"
      as="div"
      class="tw-relative tw-flex tw-items-center"
    >
      <ListboxLabel class="tw-sr-only">
        {{ $t('components.theme_switcher.theme') }}
      </ListboxLabel>
      <ListboxButton
        type="button"
        :title="$t('components.theme_switcher.change_theme')"
        class="tw-transition-colors tw-duration-300"
      >
        <span class="tw-flex tw-justify-center tw-items-center dark:tw-hidden">
          <IconUil:sun />
        </span>
        <span class="tw-justify-center tw-items-center tw-hidden dark:tw-flex">
          <IconUil:moon />
        </span>
      </ListboxButton>
      <ListboxOptions
        class="tw-p-1 tw-absolute tw-z-50 tw-top-full tw-right-0 tw-outline-none tw-bg-white tw-rounded-lg tw-ring-1 tw-ring-gray-900/10 tw-shadow-lg tw-overflow-hidden tw-w-36 tw-py-1 tw-text-sm tw-text-gray-700 tw-font-semibold dark:tw-bg-gray-800 dark:tw-ring-0 dark:tw-highlight-white/5 dark:tw-text-gray-300"
      >
        <ListboxOption
          v-for="theme in availableThemes"
          :key="theme.key"
          :value="theme.key"
          class="tw-py-2 tw-px-2 tw-flex tw-items-center tw-cursor-pointer tw-text-sm"
          :class="{
            'tw-text-sky-500 tw-bg-gray-100 dark:tw-bg-gray-600/30':
              themeSetting === theme.key,
            'tw-hover:bg-gray-50 dark:tw-hover:bg-gray-700/30':
              themeSetting !== theme.key,
          }"
        >
          <span class="tw-text-sm tw-mr-2 tw-flex tw-items-center">
            <IconUil:sun v-if="theme.key === 'light'" />
            <IconUil:moon v-else-if="theme.key === 'dark'" />
            <IconUil:laptop v-else-if="theme.key === 'system'" />
            <IconUil:clock v-else-if="theme.key === 'realtime'" />
          </span>
          {{ theme.text }}
        </ListboxOption>
      </ListboxOptions>
    </Listbox>
    <select
      v-if="currentStyle === 'select-box'"
      v-model="themeSetting"
      class="tw-w-full tw-px-2 tw-pr-3 tw-py-1 tw-outline-none tw-rounded tw-border tw-bg-transparent tw-text-gray-700 dark:tw-text-gray-300 tw-border-gray-900/10 dark:tw-border-gray-50/[0.2]"
    >
      <option
        v-for="theme in availableThemes"
        :key="theme.key"
        :value="theme.key"
      >
        {{ theme.text }}
      </option>
    </select>
  </div>
</template>
