<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          icon="arrow_back"
          :to="{ name: 'Home'}"/>
        <q-toolbar-title class="text-center">{{pageTitle}}</q-toolbar-title>
      </q-toolbar>
    </q-header>
    <!-- <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar :class="getSthChanged ? 'bg-negative' : 'bg-positive'">
        <q-toolbar-title class="text-center">
          <q-btn
            :disable="!getSthChanged"
            icon="update"
            label="Update"
            class="full-width"
            @click="handleUpdate()"
            flat />
        </q-toolbar-title>
      </q-toolbar>
    </q-footer> -->
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">

import { defineComponent, computed } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'WingLayout',
  setup () {
    const router = useRouter()
    const pageTitle = computed(() => {
      if (router.currentRoute.value.name === 'LeftWing') {
        return 'Linker Flügel'
      } else {
        return 'Rechter Flügel'
      }
    })

    return {
      pageTitle
    }
  }
})
</script>
