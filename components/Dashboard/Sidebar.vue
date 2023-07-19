<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'

export default defineComponent({
  props: {
    mode: {
      type: String,
      default: 'normal',
    },
  },
  setup() {
    const sidebar = ref(null)

    onMounted(() => {
      // const { onScroll } = useSticky(sidebar.value, -1000)
      // setTimeout(() => onScroll(), 50)
    })

    return {
      sidebar,
    }
  },
})
</script>

<template>
  <div
    ref="sidebar"
    :class="{
      'tw-fixed tw-top-0 tw-hidden tw-pt-12 tw-lg:flex tw-lg:w-60 tw-xl:w-80 tw-h-screen':
        mode === 'normal',
      'tw-relative tw-flex-1 tw-flex tw-flex-col tw-w-full': mode === 'mobile',
    }"
  >
    <div
      class="tw-flex-1 tw-overflow-y-auto tw-pl-4 tw-lg:pl-0 tw-pr-4 tw-py-4"
    >
      <ul>
        <li v-for="i in 29" :key="i">
          <Anchor
            :to="{ name: 'dashboard' }"
            class="tw-group tw-flex tw-items-center tw-mb-4 tw-hover:no-underline"
          >
            <div
              class="tw-flex tw-items-center tw-mr-4 tw-px-2 tw-py-2 tw-rounded-md tw-ring-1 tw-ring-slate-900/5 tw-shadow-sm tw-group-hover:tw-shadow tw-group-hover:tw-ring-slate-900/10 dark:tw-tw-ring-0 dark:tw-tw-shadow-none dark:tw-tw-group-hover:tw-shadow-none dark:tw-tw-group-hover:tw-highlight-white/10 tw-group-hover:tw-shadow-sky-200 dark:tw-tw-highlight-white/10"
              :class="{
                'tw-text-white dark:tw-text-white tw-group-hover:bg-sky-500 tw-bg-sky-500':
                  i === 1,
                'tw-text-slate-500 dark:tw-text-gray-100 tw-group-hover:bg-gray-200 tw-bg-gray-100 dark:tw-tw-group-hover:bg-slate-600 dark:tw-bg-slate-700':
                  i !== 1,
              }"
            >
              <IconUil:apps class="tw-text-xs" />
            </div>
            <span
              class="tw-text-sm tw-font-semibold tw-capitalize"
              :class="{
                'tw-font-extrabold tw-text-sky-500 dark:tw-text-sky-400':
                  i === 1,
              }"
            >
              {{ $t('pages.dashboard.index.nav') }}
            </span>
          </Anchor>
        </li>
      </ul>
    </div>
  </div>
</template>
