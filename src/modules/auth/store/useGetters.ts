
import { computed } from 'vue'
/* import { useStore } from 'src/store' */
import state from './state'

export default function useGetters () {
  return {
    isAuthenticated: computed(() => state.authenticated)
  }
}
