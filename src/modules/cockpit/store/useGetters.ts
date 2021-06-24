
import { computed } from 'vue'
import state from './state'

export default function useGetters () {
  return {
    getZ: computed(() => state.Z),
    getY: computed(() => state.Y),
    getX: computed(() => state.X),
    getVelocityXY: computed(() => state.velocityXY),
    getMinZDot: computed(() => state.minZDot),
    getBeta: computed(() => state.beta),
    getAngle: computed(() => state.angle)
  }
}
