<template>
  <q-page class="row items-center justify-evenly">
    <choose-view />
  </q-page>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import ChooseView from 'src/components/ChooseView.vue'
import useApp from 'src/app/store'

export default defineComponent({
  name: 'HomePage',
  components: {
    ChooseView
  },
  setup () {
    const { commitSetAppState } = useApp()
    onMounted(() => commitSetAppState('IDLE'))
    return {}
  }
})
</script>
