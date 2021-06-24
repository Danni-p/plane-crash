<template>
  <q-page class="row1 justify-evenly1">
    <cockpit />
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Cockpit from 'src/components/Cockpit.vue'

export default defineComponent({
  name: 'CockpitPage',
  components: {
    Cockpit
  },
  setup () {
    return {}
  }
})
</script>
