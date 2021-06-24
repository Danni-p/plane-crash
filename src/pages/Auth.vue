<template>
  <q-page class="row items-center justify-evenly">
    <password />
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Password from 'src/components/Password.vue'

export default defineComponent({
  name: 'Auth',
  components: {
    Password
  },
  setup () {
    return { }
  }
})
</script>
