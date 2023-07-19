<script lang="ts" setup>
// types
interface TabItem {
  name: string
  title: string
}

// composables
const slots = useSlots()
defineEmits(['click'])

// vars
const tabs = ref<HTMLDivElement>()
const tabHeaderIndicator = ref<HTMLDivElement>()
const tabItems = ref<TabItem[]>([])
const activeTab = ref<string>()

// provides
provide('activeTab', activeTab)

// methods
const updateIndicator = () => {
  if (!tabs.value || !tabHeaderIndicator.value) return

  // dom
  const dom = tabHeaderIndicator.value
  // get header tab item dom
  const currentActiveIndex = tabItems.value.findIndex(
    ({ name }) => name === activeTab.value
  )
  const tabItem = tabs.value.querySelectorAll('.tw-tabs-header-item')[
    currentActiveIndex
  ] as HTMLDivElement
  if (!tabItem) return

  // set dom position and size to tab item
  const padding = 24
  const diff = 30
  dom.style.width = `${tabItem.offsetWidth + diff}px`
  dom.style.left = `${tabItem.offsetLeft - padding - diff / 2}px`
}

// watchs
watch(tabItems, () => updateIndicator())
watch(activeTab, () => updateIndicator())

// lifecycle
onBeforeMount(() => {
  if (slots.default) {
    slots.default().forEach((element, i) => {
      const tab = element.props as TabItem
      tabItems.value.push(tab)
      if (i === 0) activeTab.value = tab.name
    })
  }
})
onMounted(() => {
  ;(async () => {
    while (
      typeof tabHeaderIndicator.value === 'undefined' ||
      typeof tabs.value === 'undefined'
    ) {
      await new Promise((resolve) => setTimeout(resolve, 10))
    }
    setTimeout(() => {
      updateIndicator()
    }, 350)
  })()
})
</script>

<template>
  <div ref="tabs" class="tw-tabs">
    <ClientOnly>
      <div
        class="tw-tabs-header relative overflow-hidden tw-flex tw-space-x-6 tw-text-sm tw-font-bold tw-text-gray-300 tw-bg-primary-700/45 tw-rounded-t-lg tw-px-5 tw-py-3"
      >
        <div
          v-for="item in tabItems"
          :key="item.name"
          :class="{
            'tw-tabs-header-item': true,
            'tw-text-white': activeTab === item.name,
          }"
          :style="{
            zIndex: 2,
          }"
          @click="activeTab = item.name"
        >
          <a href="#" @click.prevent="$emit('click')">
            {{ item.title }}
          </a>
        </div>
        <span
          ref="tabHeaderIndicator"
          class="tw-absolute tw-flex tw-h-full tw-top-0 tw-left-0 tw-p-1 tw-py-1.5 tw-overflow-hidden tw-transition-all tw-duration-300"
          :style="{ zIndex: 1 }"
        >
          <span class="tw-flex-1 tw-bg-slate-500/40 tw-rounded-lg" />
        </span>
      </div>
    </ClientOnly>
    <div
      class="tw-tabs-body tw-relative tw-text-slate-800 dark:tw-text-white tw-bg-gray-200 dark:tw-bg-slate-800 tw-shadow tw-rounded-b-lg"
    >
      <slot />
    </div>
  </div>
</template>
