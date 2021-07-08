
<template>
  <online-offline>
    <template v-slot:offline>
      <q-footer elevated class="bg-negative text-white">
        <q-toolbar>
          <q-toolbar-title class="text-center">
            Offline      
          </q-toolbar-title>
        </q-toolbar>
      </q-footer>
    </template>
  </online-offline>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import OnlineOffline from 'src/components/OnlineOffline.vue'

export default defineComponent({
  name: 'OnlineStatusBar',
  components: {
    OnlineOffline
  },
  setup () {
    return {
    }
  }
})
</script>
<style scoped>
</style>
