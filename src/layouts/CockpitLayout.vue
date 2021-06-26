<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar class="bg-myOrange">
        <q-btn
          flat
          icon="arrow_back"
          @click="handleBackBtn()"
          :to="{ name: 'Home'}"/>
        <q-toolbar-title class="text-center">{{pageTitle}}</q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">

import { defineComponent, computed } from 'vue'
import { useRouter } from 'vue-router'
import useCockpit from 'src/modules/cockpit/store'

export default defineComponent({
  name: 'CockpitLayout',
  setup () {
    const router = useRouter()
    const { resetState, stopSimulation } = useCockpit()
    const pageTitle = computed(() => {
      if (router.currentRoute.value.name === 'InitCockpit') {
        return 'Flugparameter'
      } else {
        return 'Cockpit'
      }
    })

    function handleBackBtn () {
      stopSimulation()
      resetState()
    }

    return {
      pageTitle,
      handleBackBtn
    }
  }
})
</script>
