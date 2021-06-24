<template>
  <q-page class="row items-center justify-evenly">
    <wing side="left"/>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Wing from 'src/components/Wing.vue'

export default defineComponent({
  name: 'WingPage',
  components: {
    Wing
  },
  setup () {
    return {}
  }
})
</script>
