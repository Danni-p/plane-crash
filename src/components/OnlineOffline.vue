
<template>
  <div class="online-view">
    <slot v-if="isOnline" name="online"></slot>
    <slot v-else name="offline"></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onBeforeUnmount } from 'vue'

export default defineComponent({
  name: 'OnlineOffline',
  setup (__, context) {
    const isOnline = ref(navigator.onLine)

    const onChange = () => {
      isOnline.value = navigator.onLine
      context.emit(isOnline.value ? 'online' : 'offline')
    }

    onMounted(() => {
      window.addEventListener('online', onChange)
      window.addEventListener('offline', onChange)
      onChange()
    })

    onBeforeUnmount(() => {
      window.removeEventListener('online', onChange)
      window.removeEventListener('offline', onChange)
      onChange()
    })
    return {
      isOnline
    }
  }
})
</script>
<style scoped>
</style>
