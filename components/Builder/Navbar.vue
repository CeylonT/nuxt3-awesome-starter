<script lang="ts" setup>
import { AppConfigInput } from '@nuxt/schema'

// state
const app = useAppConfig() as AppConfigInput
const navbar = ref(null)
const showDrawer = useState<boolean>('navbar.showDrawer', () => false)
const showOptions = useState<boolean>('navbar.showOptions', () => false)

// lifecycle
let timer: NodeJS.Timer
onMounted(() => {
  if (!navbar.value) return

  // scroll
  const { onScroll } = useSticky(navbar.value, 0)
  setTimeout(() => onScroll(), 50)

  // on show on mobile
  setInterval(() => {
    // must in mobile
    const minW = 1024
    if (window.innerWidth < minW) {
      updateDrawerOptions()
    }
  }, 100)
})
onBeforeUnmount(() => {
  if (timer) clearInterval(timer)
})

// methods
const updateDrawerOptions = () => {
  // drawer
  if (showDrawer.value || showOptions.value) {
    document.body.classList.add('overflow-hidden')
  } else {
    document.body.classList.remove('overflow-hidden')
  }
}
const toggleDrawer = () => (showDrawer.value = !showDrawer.value)
const toggleOptions = (show?: boolean) => {
  if (show) {
    showOptions.value = show
  } else {
    showOptions.value = !showOptions.value
  }
}
</script>
<template>
  <div
    ref="navbar"
    class="tw-backdrop-filter tw-backdrop-blur-md tw-top-0 tw-z-40 tw-w-full tw-flex-none tw-transition-colors tw-duration-300 tw-lg:z-50 tw-border-b tw-border-gray-900/10 dark:tw-border-gray-50/[0.2] tw-bg-white/[0.5] dark:tw-bg-slate-900/[0.5]"
  >
    <div id="navbar-banner" class="banner">
      <slot name="banner" />
    </div>
    <div class="tw-max-w-8xl tw-w-full tw-mx-auto">
      <div class="tw-py-3 tw-lg:px-8 tw-mx-4 tw-lg:mx-0">
        <div class="tw-relative tw-flex tw-items-center">
          <!-- drawer:toggle -->
          <div
            v-if="$slots['drawer']"
            class="tw-lg:hidden tw-flex tw-items-center tw-self-center tw-justify-center tw-mr-2"
          >
            <button
              class="tw-flex tw-items-center tw-focus:tw-outline-none"
              aria-label="Toggle Drawer Menu"
              @click="toggleDrawer()"
            >
              <span
                class="tw-flex tw-items-center tw-text-gray-600 dark:tw-text-gray-300 tw-text-lg"
                aria-hidden="true"
              >
                <IconUil:bars v-if="!showDrawer" />
                <IconUil:times v-else />
              </span>
            </button>
          </div>
          <!-- title -->
          <slot name="title">
            <NuxtLink
              tag="a"
              class="tw-mr-3 tw-flex-none tw-overflow-hidden tw-md:w-auto tw-text-md tw-font-bold tw-text-gray-900 dark:tw-text-gray-200"
              :to="{ name: 'index' }"
            >
              <span class="tw-sr-only">home</span>
              <span class="tw-flex tw-items-center">
                <IconSimpleIcons:nuxtdotjs
                  class="tw-inline-block tw-mr-2 tw-text-lg tw-text-primary-500"
                />
                {{ app.name }}
              </span>
            </NuxtLink>
          </slot>
          <!-- menu -->
          <slot name="menu" />
          <!-- options:toggle -->
          <div
            v-if="$slots['options']"
            class="tw-flex-1 tw-flex tw-justify-end tw-lg:hidden"
          >
            <button
              class="tw-flex tw-items-center tw-focus:tw-outline-none"
              aria-label="Toggle Options Menu"
              @click="toggleOptions()"
            >
              <span
                class="tw-flex tw-items-center tw-text-gray-600 dark:tw-text-gray-300 tw-text-sm"
                aria-hidden="true"
              >
                <icon-fa-solid:ellipsis-v />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
    <ClientOnly>
      <Teleport to="#app-after">
        <!-- drawer -->
        <Transition name="tw-slide-fade-from-up" mode="out-in">
          <div
            v-if="showDrawer && $slots['drawer']"
            class="tw-fixed tw-lg:hidden tw-bg-gray-100 dark:tw-bg-slate-800 tw-pt-12 tw-top-0 tw-left-0 tw-w-screen tw-h-screen tw-z-30 tw-flex tw-flex-col"
          >
            <div
              class="tw-flex-1 tw-flex tw-flex-col tw-relative tw-overflow-y-auto"
            >
              <slot name="drawer" :toggle-drawer="toggleDrawer" />
            </div>
          </div>
        </Transition>

        <!-- options -->
        <div v-if="showOptions && $slots['options']">
          <slot
            name="options"
            :toggle-options="toggleOptions"
            :show-options="showOptions"
          />
        </div>
      </Teleport>
    </ClientOnly>
  </div>
</template>

<style lang="scss">
.tw-slide-fade-from-up-enter-active {
  transition: all 0.3s ease-out;
}
.tw-slide-fade-from-up-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.tw-slide-fade-from-up-enter-from,
.tw-slide-fade-from-up-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}

a.router-link-active {
  font-weight: bold;
}
a.router-link-exact-active {
  color: theme('colors.slate.900');
}
html.dark {
  a.router-link-exact-active {
    color: theme('colors.white');
  }
}
</style>
