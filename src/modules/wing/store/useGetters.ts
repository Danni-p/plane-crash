
import { computed } from 'vue'
/* import { useStore } from 'src/store' */
import state from './state'

export default function useGetters () {
  const getDeflection = computed(() => {
    return state.activeRightWingPassengers / state.maxRightWingPassengers - state.activeLeftWingPassengers / state.maxLeftWingPassengers
  })

  const getDropFactor = computed(() => {
    return (state.activeLeftWingPassengers + state.activeRightWingPassengers) / (state.maxLeftWingPassengers + state.maxRightWingPassengers)
  })

  return {
    getActiveLeftWingPassengers: computed(() => state.activeLeftWingPassengers),
    getActiveRightWingPassengers: computed(() => state.activeRightWingPassengers),
    getMaxLeftWingPassengers: computed(() => state.maxLeftWingPassengers),
    getMaxRightWingPassengers: computed(() => state.maxRightWingPassengers),
    getDeflection,
    getSthChanged: computed(() => state.sthChanged),
    getDropFactor
  }
}
