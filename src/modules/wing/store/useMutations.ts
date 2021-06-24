import state from './state'

export default function useMutations () {
  function commitSetActiveLeftWingPassengers (nr: number) {
    state.activeLeftWingPassengers = nr
  }

  function commitSetActiveRightWingPassengers (nr: number) {
    state.activeRightWingPassengers = nr
  }

  function commitSetMaxLeftWingPassengers (nr: number) {
    state.maxLeftWingPassengers = nr
  }

  function commitSetMaxRightWingPassengers (nr: number) {
    state.maxRightWingPassengers = nr
  }

  function commitSetSthChanged (flag: boolean) {
    state.sthChanged = flag
  }

  return {
    commitSetActiveLeftWingPassengers,
    commitSetActiveRightWingPassengers,
    commitSetMaxLeftWingPassengers,
    commitSetMaxRightWingPassengers,
    commitSetSthChanged
  }
}
