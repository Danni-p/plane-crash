<template>
  <router-view />
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { EventManager } from 'src/models/evt/eventManager'
import { AppInitializedEvent } from './app/evt/events/AppInitializedEvent'
import 'src/app/init/subscribe'

export default defineComponent({
  name: 'App',
  setup () {
    EventManager.dispatchEvent(new AppInitializedEvent())
    return {}
  }
})
</script>
