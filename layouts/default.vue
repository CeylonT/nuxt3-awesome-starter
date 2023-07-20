<script setup lang="ts">
const router = useRouter()
const drawer = ref(false)

const items = [
  {
    title: 'หน้าหลัก',
    value: '/',
    icon: 'fa-light fa-house',
    disabled: false,
  },
  {
    title: 'ข้อมูลบัญชี',
    value: '/profile',
    icon: 'fa-light fa-address-card',
    disabled: false,
  },
  {
    title: 'Convy card',
    value: '/convy-card',
    icon: 'fa-light fa-nfc-signal',
    disabled: false,
  },
  {
    title: 'แพ็คเกจสมาชิก',
    value: '/package',
    icon: 'fa-light fa-rectangle-history-circle-user',
    disabled: false,
  },
  {
    title: 'การตั้งค่า',
    value: '/setting',
    icon: 'fa-light fa-gear',
    disabled: true,
  },
]

function logout() {
  router.push('/sign-in')
}
</script>

<template>
  <v-layout class="tw-min-h-screen tw-bg-[#F8FAFA]">
    <!-- menu-drawer -->

    <v-navigation-drawer
      v-model="drawer"
      location="start"
      app
      temporary
      width="100%"
      max-width="100%"
    >
      <div class="tw-w-screen">
        <div class="tw-mx-auto tw-max-w-screen-sm">
          <div class="tw-mt-4 tw-mx-4 tw-grid tw-grid-cols-3">
            <v-btn flat icon @click="drawer = false">
              <v-icon>fa-light fa-close</v-icon>
            </v-btn>

            <h2
              class="tw-text-5xl tw-font-bold tw-text-opacity-100 tw-text-center tw-my-auto"
            >
              เมนู
            </h2>
          </div>

          <div class="tw-m-4 tw-pr-4 tw-border tw-rounded-lg">
            <v-list nav :items="items" class="!tw-pt-1 !tw-pb-0">
              <template v-for="(item, index) in items" :key="index">
                <v-list-item
                  :prepend-icon="item.icon"
                  :title="item.title"
                  :value="item.value"
                  append-icon="caret-right"
                  :active="item.value == $route.path"
                  :disabled="item.disabled"
                  @click="$router.push(item.value)"
                ></v-list-item>
                <v-divider
                  v-if="index !== items.length - 1"
                  inset
                  class="border-opacity-75"
                ></v-divider>
              </template>
            </v-list>
          </div>

          <div class="tw-m-4 tw-pr-4 tw-border tw-rounded-lg">
            <v-list nav class="!tw-py-0">
              <v-list-item
                prepend-icon="fa-light fa-right-from-bracket"
                title="ออกจากระบบ"
                @click="logout"
              ></v-list-item>
            </v-list>
          </div>
        </div>
      </div>
    </v-navigation-drawer>

    <!-- nav-bar -->

    <v-app-bar color="tw-bg-white" app :elevation="0">
      <template #prepend>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      </template>

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

      <v-btn icon :disabled="true"></v-btn>
    </v-app-bar>

    <!-- body -->

    <v-main full-height>
      <div class="tw-w-full tw-max-w-screen-sm tw-h-full tw-p-4 tw-mx-auto">
        <slot />
      </div>
    </v-main>
  </v-layout>
</template>
