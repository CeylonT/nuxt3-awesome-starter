<template>
  <BuilderNavbar>
    <template #menu>
      <div class="tw-relative tw-hidden tw-lg:flex tw-items-center tw-ml-auto">
        <div class="tw-flex tw-items-center tw-justify-center">
          <img
            class="tw-w-6 tw-h-6 tw-rounded-full"
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
            alt="Avatar of Jonathan Reinink"
          />
          <span class="tw-ml-2 tw-text-sm tw-font-semibold">Alfian</span>
          <IconUil:angle-down />
        </div>
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
    <template #drawer>
      <slot name="drawer" />
    </template>
  </BuilderNavbar>
</template>
