<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
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
  </q-layout>
</template>

<script lang="ts">

import { defineComponent } from 'vue'
import useAuth from 'src/modules/auth/store'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'MainLayout',
  setup () {
    const router = useRouter()
    const { isAuthenticated, logout } = useAuth()

    async function handleLogout () {
      await logout().then(async () => {
        await router.push({
          path: '/auth'
        })
      })
    }
    return {
      isAuthenticated,
      handleLogout
    }
  }
})
</script>
