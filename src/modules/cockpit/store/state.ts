import { reactive } from 'vue'
export interface CockpitStateInterface {
  Z: number // height in m
  Y: number // distance to target in km
  X: number // deflection from target in m
  beta: number // compass angle in degree
  angle: number // Neigungswinkel in degree

  startDistance: number
  startHeight: number
  velocityXY: number // velocity planar to earth
  flightTime: number
}

const state = reactive({
  Z: 10000, // m
  Y: 500000, // m
  X: 0, // m
  beta: 0,
  angle: 0,

  startHeight: 10000, // constant
  startDistance: 500000, // constant
  flightTime: 30, // min constant
  velocityXY: 300 // m/s == 1000km/h constant
} as CockpitStateInterface)

export default state
