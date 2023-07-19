<script lang="ts" setup>
import { AppConfigInput } from '@nuxt/schema'
import p from './../../package.json'
const app = useAppConfig() as AppConfigInput
</script>

<template>
  <footer
    class="tw-border-t tw-lg:border-gray-900/10 dark:tw-border-gray-50/[0.2]"
  >
    <section
      class="tw-max-w-8xl tw-mx-auto tw-px-4 tw-lg:px-8 tw-flex-1 tw-flex tw-w-full tw-space-x-20"
    >
      <div class="tw-w-full tw-py-4 tw-text-center tw-md:text-left">
        <div class="tw-mb-1">
          {{ app.name }}
        </div>
        <div class="tw-text-xs tw-text-gray-600 dark:tw-text-gray-400">
          Copyright © 2022 <a :href="app.author.link">{{ app.author.name }}</a
          >. All rights reserved. Made with
          <span class="tw-text-red-500">❤</span>
          <div
            class="tw-flex tw-flex-col tw-md:flex-row tw-space-x-2 tw-items-center tw-md:float-right"
          >
            <span class="tw-text-center tw-md:text-right">
              design by <a href="https://github.com/viandwi24">viandwi24</a>
            </span>
            <span
              class="tw-block tw-bg-blue-500 tw-rounded tw-px-1 tw-py-0.5 tw-text-white tw-text-xs"
            >
              {{ p.devDependencies.nuxt }}
            </span>
          </div>
        </div>
      </div>
    </section>
  </footer>
</template>
