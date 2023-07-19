<script lang="ts" setup>
import { AppConfigInput } from '@nuxt/schema'

export interface IMenuItem {
  type: 'link' | 'button'
  text: string
  href?: any
  route?: any
}

const { t } = useLang()
const app = useAppConfig() as AppConfigInput
const menus = computed((): IMenuItem[] => [
  {
    type: 'link',
    text: t('pages.getting-started.nav'),
    route: { name: 'getting-started' },
  },
  { type: 'link', text: t('pages.blank.nav'), route: { name: 'blank' } },
  { type: 'link', text: t('pages.test.nav'), route: { name: 'test' } },
  { type: 'link', text: t('pages.post.nav'), route: { name: 'post' } },
  { type: 'link', text: t('pages.setting.nav'), route: { name: 'setting' } },
  {
    type: 'button',
    text: t('pages.dashboard.nav'),
    route: { name: 'dashboard' },
  },
])
</script>

<template>
  <BuilderNavbar>
    <template #banner>
      <div
        class="tw-text-white tw-text-xs tw-text-center tw-py-1 tw-px-4 lg:px-8 tw-bg-primary-500 tw-capitalize"
      >
        <span class="tw-mr-1">
          {{ $t('banners.welcome', { app_name: app.name }) }}
          <Anchor
            class="tw-underline tw-font-bold"
            :text="$t('others.learn_more')"
            href="https://github.com/viandwi24/nuxt3-awesome-starter"
          />
        </span>
      </div>
    </template>

    <template #menu>
      <div class="tw-relative tw-hidden lg:tw-flex tw-items-center tw-ml-auto">
        <nav
          class="tw-text-sm tw-leading-6 tw-font-semibold tw-text-gray-600 dark:tw-text-gray-300"
          role="navigation"
        >
          <ul class="tw-flex tw-items-center tw-space-x-8">
            <li v-for="(item, i) in menus" :key="i">
              <Anchor
                v-if="item.type === 'link'"
                :to="item.route ? item.route : undefined"
                :href="item.href ? item.href : undefined"
                class="tw-hover:no-underline tw-hover:text-slate-900 tw-hover:dark:text-white tw-capitalize"
                >{{ item.text }}</Anchor
              >
              <Button
                v-else-if="item.type === 'button'"
                :text="item.text"
                size="xs"
                class="tw-font-extrabold tw-capitalize"
                :to="item.route ? item.route : undefined"
                :href="item.href ? item.href : undefined"
              />
            </li>
          </ul>
        </nav>
        <div
          class="tw-flex tw-space-x-4 tw-border-l tw-ml-6 tw-pl-6 tw-border-gray-900/10 dark:tw-border-gray-50/[0.2]"
        >
          <LanguageSwitcher />
          <ThemeSwitcher />
          <Anchor
            class="tw-hover:no-underline tw-hover:text-slate-900 tw-hover:dark:text-white tw-text-lg tw-flex tw-self-center tw-items-center"
            href="https://github.com/viandwi24/nuxt3-awesome-starter"
            title="Github"
          >
            <IconMdi:github-face />
          </Anchor>
        </div>
      </div>
    </template>
    <template #options="{ toggleOptions }">
      <ActionSheet @on-close="toggleOptions(false)">
        <ActionSheetBody>
          <ActionSheetHeader text="Menu" />
          <nav
            class="tw-leading-6 tw-font-semibold tw-text-gray-600 dark:tw-text-gray-300"
          >
            <ul class="tw-flex tw-flex-col">
              <li
                v-for="(item, i) in menus"
                :key="i"
                class="tw-flex tw-w-full"
                :class="{
                  'tw-pb-2 tw-mb-2 tw-border-b tw-border-gray-900/10 dark:tw-border-gray-50/[0.2]':
                    item.type === 'link',
                }"
              >
                <Anchor
                  v-if="item.type === 'link'"
                  :to="item.route ? item.route : undefined"
                  :href="item.href ? item.href : undefined"
                  class="tw-flex-1 tw-hover:no-underline tw-capitalize"
                  >{{ item.text }}</Anchor
                >
                <Button
                  v-else-if="item.type === 'button'"
                  :text="item.text"
                  size="xs"
                  class="tw-flex-1 tw-font-extrabold tw-capitalize"
                  :to="item.route ? item.route : undefined"
                  :href="item.href ? item.href : undefined"
                />
              </li>
            </ul>
          </nav>
          <div class="tw-mt-6 tw-text-sm tw-font-bold tw-capitalize">
            {{ $t('components.theme_switcher.change_theme') }}
          </div>
          <div class="tw-mt-2">
            <ThemeSwitcher type="select-box" />
          </div>
          <div class="tw-mt-6 tw-text-sm tw-font-bold tw-capitalize">
            {{ $t('components.language_switcher.change_language') }}
          </div>
          <div class="tw-mt-2">
            <LanguageSwitcher type="select-box" />
          </div>
        </ActionSheetBody>
        <Button
          type="secondary"
          title="Github"
          href="https://github.com/viandwi24/nuxt3-awesome-starter"
        >
          <IconMdi:github-face />
          <span class="tw-ml-1">Github</span>
        </Button>
        <Button
          text="Close"
          type="secondary"
          @click.prevent="toggleOptions(false)"
        />
      </ActionSheet>
    </template>
  </BuilderNavbar>
</template>
