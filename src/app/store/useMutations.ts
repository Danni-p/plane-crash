import { AppState } from '../types/primitive-types'
import state from './state'

export default function useMutations () {
  function commitSetAppState (appState: AppState) {
    state.appState = appState
  }

  return {
    commitSetAppState
  }
}
