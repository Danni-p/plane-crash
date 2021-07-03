export const calcMinVelocityZ = (height: number, veloX: number, distX: number) => {
  return (height * veloX) / (distX * 1.5) // fallgeschwindigkeit so berechnet dass im idealfall für etwas mehr als 1 strecke reicht
}

export const calcMaxVelocityZ = (minVeloZ: number) => {
  return calcZDot(minVeloZ, 0)
}

export const calcZDot = (minZDot: number, dropFaktor: number) => {
  return minZDot * (2 - dropFaktor)
}

export const calcDropFaktor = (leftActive: number, leftMax: number, rightActive: number, rightMax: number) => {
  return (leftActive + rightActive) / (leftMax + rightMax) // Number between 0 and 1
}

export const calcAbsoluteDistanceInKm = (distX: number, distY: number) => {
  return Math.round(Math.sqrt(distX * distX + distY * distY) / 1000 * 10) / 10
}
