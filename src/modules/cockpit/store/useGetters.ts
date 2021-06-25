
import { calcMinVelocityZ } from 'src/utils/CalculateUtils'
import { computed } from 'vue'
import state from './state'

export default function useGetters () {
  return {
    getZ: computed(() => state.Z),
    getY: computed(() => state.Y),
    getX: computed(() => state.X),
    getVelocityXY: computed(() => state.velocityXY),
    getMinZDot: computed(() => calcMinVelocityZ(state.startHeight, state.velocityXY, state.startDistance)),
    getBeta: computed(() => state.beta),
    getAngle: computed(() => state.angle),
    getFlightTime: computed(() => state.flightTime),
    getStartHeight: computed(() => state.startHeight),
    getStartDistance: computed(() => state.startDistance)
  }
}
