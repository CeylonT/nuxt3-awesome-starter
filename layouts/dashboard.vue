<template>
  <div>
    <slot name="app-before" />
    <div id="app-before"></div>
    <div class="tw-flex tw-flex-col tw-min-h-screen">
      <slot name="header">
        <DashboardNavbar>
          <template #drawer>
            <DashboardSidebar mode="mobile" />
          </template>
        </DashboardNavbar>
      </slot>
      <div class="tw-flex-1 tw-w-full tw-flex tw-flex-col">
        <div
          class="tw-relative tw-flex-1 tw-flex tw-flex-row tw-mx-auto tw-max-w-8xl tw-w-full tw-h-full"
        >
          <div class="tw-lg:pl-8 tw-py-4">
            <DashboardSidebar />
          </div>
          <div class="tw-flex tw-flex-col tw-lg:ml-60 tw-xl:ml-80">
            <slot />
            <slot name="footer">
              <PageFooter />
            </slot>
          </div>
        </div>
      </div>
    </div>
    <slot name="app-after" />
    <div id="app-after"></div>
  </div>
</template>
