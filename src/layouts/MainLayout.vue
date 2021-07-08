<template>
  <q-layout view="hHh lpR fFf">
    <q-header class="bg-myOrange" elevated>
      <q-toolbar class="bg-myOrange">
        <q-toolbar-title class="text-center">Flugzeugabsturz</q-toolbar-title>
        <q-btn
          v-if="isAuthenticated"
          flat
          icon="logout"
          @click="handleLogout()"/>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
    <online-status-bar />
  </q-layout>
</template>

<script lang="ts">

import { defineComponent, computed } from 'vue'
import useAuth from 'src/modules/auth/store'
import { useRouter } from 'vue-router'
import OnlineStatusBar from 'src/components/OnlineStatusBar.vue'

export default defineComponent({
  name: 'MainLayout',
  components: {
    OnlineStatusBar
  },
  setup () {
    const router = useRouter()
    const { isAuthenticated, logout } = useAuth()

    const isOnline = computed(() => navigator.onLine)

    async function handleLogout () {
      await logout().then(async () => {
        await router.push({
          path: '/auth'
        })
      })
    }
    return {
      isAuthenticated,
      handleLogout,
      isOnline
    }
  }
})
</script>
