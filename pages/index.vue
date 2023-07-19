<script lang="ts" setup>
// composable
const { t } = useLang()

// meta
definePageMeta({
  layout: 'page',
})

// vars
const titlesText = computed<string[]>(() => t('pages.index.title').split('[]'))
const leadingsText = computed(() => [
  {
    text: titlesText.value[0],
    startColor: '#007CF0',
    endColor: '#00DFD8',
    delay: 0,
  },
  {
    text: titlesText.value[1],
    startColor: '#7928CA',
    endColor: '#FF0080',
    delay: 2,
  },
  {
    text: titlesText.value[2],
    startColor: '#FF4D4D',
    endColor: '#F9CB28',
    delay: 4,
  },
])
const tooltip = ref(false)

// const
const cancelTooltip = () => {
  tooltip.value = false
  const tt = document.querySelector('.tooltiptext')
  if (tt) tt.innerHTML = `Copy to clipboard`
}
const copyBash = () => {
  const bash = 'git clone https://github.com/viandwi24/nuxt3-awesome-starter'
  navigator.clipboard.writeText(bash)
  tooltip.value = true
  const tt = document.querySelector('.tooltiptext')
  if (tt) tt.innerHTML = `Copied!!!`
}
</script>

<template>
  <PageWrapper class="tw-flex-1 tw-flex">
    <div class="tw-background-overlay">
      <div
        class="tw-absolute tw-top-0 tw-left-0 tw-transform tw-translate-x-64 tw-translate-y-4 tw-h-14 tw-w-14 tw-rounded-full tw-bg-gray-900 dark:tw-bg-white"
      ></div>
      <div
        class="tw-absolute tw-hidden md:tw-block tw-top-0 tw-left-0 tw-transform tw-translate-x-18 tw-translate-y-20 tw-h-28 tw-w-28 tw-rounded-full tw-bg-blue-600 tw-linear-wipe"
      ></div>
      <div
        class="tw-absolute tw-hidden md:tw-block tw-bottom-0 tw-right-0 tw-transform tw--translate-x-4 tw--translate-y-40 tw-h-16 tw-w-16 tw-rounded tw-bg-purple-600 tw-linear-wipe"
      ></div>
      <div class="tw-absolute tw-bottom-0 tw-right-0 tw-triangle-shape"></div>
    </div>
    <PageBody class="tw-flex-1 tw-flex">
      <PageSection class="tw-flex-1 tw-flex tw-items-center">
        <div class="tw-flex-1 md:tw-w-5/8 tw-flex tw-flex-col tw-z-10">
          <h1 class="tw-text-center md:tw-text-left tw-mt-4">
            <span
              v-for="(item, i) in leadingsText"
              :key="i"
              :style="`--content: '${item.text}'; --start-color: ${
                item.startColor
              }; --end-color: ${item.endColor}; --animation-name: anim-fg-${
                i + 1
              }`"
              class="tw-animated-text-bg tw-drop-shadow-xl tw-text-5xl tw-xl:text-8xl tw-2xl:text-9xl tw-block tw-font-black tw-uppercase"
            >
              <span class="tw-animated-text-fg">{{ item.text }}</span>
            </span>
          </h1>
          <div
            class="tw-flex tw-space-x-4 tw-ml-4 tw-mt-10 tw-justify-center md:tw-justify-start"
          >
            <Button
              size="lg"
              text="Nuxt 3"
              class="tw-font-extrabold"
              href="https://v3.nuxtjs.org"
            />
            <Button
              size="lg"
              text="Github"
              type="secondary"
              class="tw-font-extrabold"
              href="https://github.com/viandwi24/nuxt3-awesome-starter"
            />
          </div>
        </div>
        <div
          class="tw-hidden md:tw-flex md:tw-w-3/8 tw-justify-center tw-items-end tw-relative"
        >
          <Gem class="tw-absolute tw--top-64 tw--right-0" />
          <div class="tw-ml-4 tw-w-100 tw-z-10 tw-h-auto tw-shadow">
            <div
              class="tw-win-header tw-bg-gray-200 dark:tw-bg-slate-800 tw-flex tw-space-x-4 tw-px-3 tw-py-2 tw-rounded-t-lg tw-relative tw-border-b-2 tw-border-gray-300/75 dark:tw-border-slate-700/75"
            >
              <div class="tw-flex tw-space-x-1 tw-items-center">
                <div class="tw-w-3 tw-h-3 tw-bg-red-500 tw-rounded-full" />
                <div class="tw-w-3 tw-h-3 tw-bg-green-500 tw-rounded-full" />
                <div class="tw-w-3 tw-h-3 tw-bg-yellow-500 tw-rounded-full" />
              </div>
              <div
                class="tw-flex-1 tw-font-bold tw-text-center tw-pr-12 tw-text-sm"
              >
                BASH
              </div>
              <div class="tw-text-sm tw-flex tw-justify-center tw-items-center">
                <div>
                  <button
                    class="tw-text-gray-100 tw-flex tw-justify-center tw-items-center"
                    @click="copyBash"
                    @mouseout="cancelTooltip"
                  >
                    <span class="tooltiptext">Copy to clipboard</span>
                    <icon-material-symbols:content-copy-outline />
                  </button>
                </div>
              </div>
            </div>
            <div
              class="tw-rounded-b-lg tw-bg-gray-200/90 dark:tw-bg-slate-800/90 tw-px-3 tw-py-2 tw-font-mono tw-backdrop-filter tw-backdrop-blur-lg"
            >
              <div>
                $ git clone https://github.com/viandwi24/nuxt3-awesome-starter
              </div>
            </div>
          </div>
        </div>
      </PageSection>
    </PageBody>
  </PageWrapper>
</template>

<style lang="scss">
@import '../assets/sass/variables';

@keyframes anim-fg-1 {
  0%,
  16.667%,
  100% {
    opacity: 1;
  }

  33.333%,
  83.333% {
    opacity: 0;
  }
}

@keyframes anim-fg-2 {
  0%,
  16.667%,
  66.667%,
  100% {
    opacity: 0;
  }

  33.333%,
  50% {
    opacity: 1;
  }
}

@keyframes anim-fg-3 {
  0%,
  50%,
  100% {
    opacity: 0;
  }

  66.667%,
  83.333% {
    opacity: 1;
  }
}

.animated-text-bg {
  position: relative;
  display: block;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  content: var(--content);
  display: block;
  width: 100%;
  color: theme('colors.slate.800');
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 0;
  padding-left: $padding;
  padding-right: $padding;
  &:before {
    content: var(--content);
    position: absolute;
    display: block;
    width: 100%;
    color: theme('colors.slate.800');
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 0;
    padding-left: $padding;
    padding-right: $padding;
  }
}
.animated-text-fg {
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  padding-left: $padding;
  padding-right: $padding;
  background-image: linear-gradient(
    90deg,
    var(--start-color),
    var(--end-color)
  );
  position: relative;
  opacity: 0;
  z-index: 1;
  animation: var(--animation-name) 8s infinite;
}

html.dark {
  .animated-text-bg {
    color: theme('colors.gray.100');
    &:before {
      color: theme('colors.gray.100');
    }
  }
}

.triangle-shape {
  width: 0;
  height: 0;
  border-left: 25px solid transparent;
  border-right: 25px solid transparent;
  border-bottom: 40px solid theme('colors.green.600');
  transform: translate(-15rem, -6rem) rotate(45deg);
}

.tooltip {
  position: relative;
  display: inline-block;
}

.tooltip .tooltiptext {
  visibility: hidden;
  width: 140px;
  background-color: #555;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px;
  position: absolute;
  z-index: 1;
  bottom: 150%;
  left: 50%;
  margin-left: -75px;
  opacity: 0;
  transition: opacity 0.3s;
}

.tooltip .tooltiptext::after {
  content: '';
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #555 transparent transparent transparent;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
}
</style>
