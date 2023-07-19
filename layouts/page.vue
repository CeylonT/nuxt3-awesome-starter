<template>
  <div>
    <slot name="app-before" />
    <div id="app-before"></div>
    <div class="tw-flex tw-flex-col tw-min-h-screen">
      <slot name="header">
        <PageNavbar />
      </slot>
      <div class="tw-flex-1 tw-w-full tw-flex tw-flex-col">
        <div
          class="tw-relative tw-flex-1 tw-flex tw-flex-col tw-mx-auto tw-max-w-8xl tw-w-full tw-h-full"
        >
          <slot />
        </div>
      </div>
      <slot name="footer">
        <PageFooter />
      </slot>
    </div>
    <slot name="app-after" />
    <div id="app-after"></div>
  </div>
</template>
