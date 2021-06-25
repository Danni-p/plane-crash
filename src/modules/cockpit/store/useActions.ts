import useWing from 'src/modules/wing/store'
import useGetters from './useGetters'
import useMutations from './useMutations'
import { calcZDot } from 'src/utils/CalculateUtils'
import state from './state'

let simulation: ReturnType<typeof window.setInterval> | null = null
const timeInMillis = 1000
const {
  getDropFactor,
  getDeflection
} = useWing()

const {
  getMinZDot,
  getX,
  getY,
  getZ,
  getVelocityXY,
  getBeta
} = useGetters()
const {
  commitSetZ,
  commitSetAngle,
  commitSetBeta,
  commitSetX,
  commitSetY
} = useMutations()

export default function useActions () {
  function startSimulation () {
    console.log('start')
    simulation = setInterval(calculateNextSimulationStep, timeInMillis)
  }

  function stopSimulation () {
    console.log('stop')
    if (simulation) {
      clearInterval(simulation)
    }
  }

  function resetState () {
    state.X = 0
    state.Y = state.startDistance
    state.Z = state.startHeight
    state.angle = 0
    state.beta = 0
    /* state.minZDot = 0 */
    state.velocityXY = 300
  }

  return {
    startSimulation,
    stopSimulation,
    resetState
  }
}

function calculateNextSimulationStep () {
  // next Z
  const deltaZDot = calcZDot(getMinZDot.value, getDropFactor.value)
  const nextZ = getZ.value - deltaZDot * (timeInMillis / 1000)

  // next X,Y,beta
  const deltaXRot = getDeflection.value * (getVelocityXY.value * (timeInMillis / 1000)) / 2 // between +-veloXY/2 m/s
  const deltaYRot = Math.sqrt(Math.pow(getVelocityXY.value * (timeInMillis / 1000), 2) - Math.pow(deltaXRot, 2)) // m/s
  const deltaBetaRad = Math.atan2(deltaYRot, deltaXRot) // rad
  /* const deltaBetaRot = - Math.PI / 2 + deltaBetaRad */
  const deltaBetaRadPrev = -(getBeta.value) / 180 * Math.PI

  const deltaX = Math.cos(deltaBetaRadPrev) * deltaXRot - Math.sin(deltaBetaRadPrev) * deltaYRot
  const deltaY = Math.sin(deltaBetaRadPrev) * deltaXRot + Math.cos(deltaBetaRadPrev) * deltaYRot
  const deltaBetaDeg = 90 - deltaBetaRad * 180 / Math.PI

  const nextX = getX.value + deltaX
  const nextY = getY.value - deltaY
  const nextBeta = getBeta.value + deltaBetaDeg

  // next angle
  const nextAngle = getDeflection.value * 90
  console.log('test rots', deltaXRot, deltaYRot, deltaBetaRad, deltaBetaRadPrev)
  console.log('test deltas', deltaX, deltaY, deltaBetaDeg)
  console.log('test next', nextX, nextY, nextBeta)

  // Update
  commitSetX(nextX)
  commitSetY(nextY)
  commitSetZ(nextZ)
  commitSetBeta(nextBeta)
  commitSetAngle(nextAngle)
}
