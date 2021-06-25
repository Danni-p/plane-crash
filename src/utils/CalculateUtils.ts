export const calcMinVelocityZ = (height: number, veloX: number, distX: number) => {
  return (height * veloX) / (distX * 2) // fallgeschwindigkeit so berechnet dass im idealfall für zwei strecken reicht
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
