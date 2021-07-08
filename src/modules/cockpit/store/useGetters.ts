
import { calcMinVelocityZ } from 'src/utils/CalculateUtils'
import { computed } from 'vue'
import { AlertStatus } from '../types/primitive-types'
import state from './state'

export default function useGetters () {
  const alertStatus = computed(() => {
    if (state.Z < 200) {
      return AlertStatus.BRACE_FOR_IMPACT
    } else if (state.Z < 2000) {
      return AlertStatus.DANGER
    } else if (state.Z < 5000) {
      return AlertStatus.WARNING
    } else {
      return AlertStatus.SAFE
    }
  })

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
    getStartDistance: computed(() => state.startDistance),
    getAlertStatus: alertStatus
  }
}
