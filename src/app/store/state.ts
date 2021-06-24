import { reactive } from 'vue'
import { AppState } from '../types/primitive-types'
export interface AppStateInterface {
  appState: AppState
}

const state = reactive({
  appState: 'IDLE'
} as AppStateInterface)

export default state
