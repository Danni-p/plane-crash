import { reactive } from 'vue'
export interface WingStateInterface {
  maxLeftWingPassengers: number
  maxRightWingPassengers: number
  activeRightWingPassengers: number
  activeLeftWingPassengers: number
  sthChanged: boolean
}

const state = reactive({
  maxLeftWingPassengers: 1,
  maxRightWingPassengers: 1,
  activeRightWingPassengers: 1,
  activeLeftWingPassengers: 1,
  sthChanged: false
} as WingStateInterface)

export default state
