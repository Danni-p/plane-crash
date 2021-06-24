import { reactive } from 'vue'
export interface CockpitStateInterface {
  Z: number // height in m
  Y: number // distance to target in km
  X: number // deflection from target in m
  velocityXY: number // velocity planar to earth
  minZDot: number // min drop velocity
  beta: number // compass angle in degree
  angle: number // Neigungswinkel in degree
}

const state = reactive({
  Z: 10000, // m
  Y: 500000, // m
  X: 0, // m
  velocityXY: 300, // m/s == 1000km/h
  minZDot: 0,
  beta: 0,
  angle: 0
} as CockpitStateInterface)

export default state
