<script lang="ts" setup></script>

<template>
  <v-app app>
    <v-app-bar color="tw-bg-white" app :elevation="0" height="64">
      <v-spacer></v-spacer>
      <img
        class="tw-cursor-pointer"
        src="/assets/svgs/logo.svg"
        width="120"
        height="50"
        alt="label logo"
        @click="$router.push('/')"
      />
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main :scrollable="false" class="tw-pt-[64px] tw-overflow-y-hidden">
      <div class="tw-w-full tw-max-w-screen-sm tw-px-4 tw-mx-auto">
        <slot />
      </div>
    </v-main>
  </v-app>
</template>
