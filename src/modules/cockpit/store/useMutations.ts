import state from './state'

export default function useMutations () {
  function commitSetZ (distZ: number) {
    state.Z = Math.round(distZ * 10) / 10
  }

  function commitSetY (distY: number) {
    state.Y = Math.round(distY * 10) / 10
  }

  function commitSetX (distX: number) {
    state.X = Math.round(distX * 10) / 10
  }

  function commitSetBeta (beta: number) {
    state.beta = beta
  }

  function commitSetVelocityXY (velo: number) {
    state.velocityXY = velo
  }

  /* function commitSetMinZDot (velo: number) {
    state.minZDot = velo
  } */

  function commitSetStartDistance (dist: number) {
    state.startDistance = dist
  }

  function commitSetStartHeight (height: number) {
    state.startHeight = height
  }

  function commitSetAngle (angle: number) {
    state.angle = angle
  }

  function commitSetFlightTime (time: number) {
    state.flightTime = time
  }

  return {
    commitSetZ,
    commitSetY,
    commitSetX,
    commitSetBeta,
    commitSetAngle,
    commitSetVelocityXY,
    commitSetStartDistance,
    commitSetStartHeight,
    commitSetFlightTime
    /* commitSetMinZDot */
  }
}
