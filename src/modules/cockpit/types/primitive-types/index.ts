export type WingSide = 'left' | 'right'

export interface WingPassengers {
  active: number
  max: number
}

export enum AlertStatus {
  'SAFE' = 0,
  'WARNING' = 1,
  'DANGER' = 2,
  'BRACE_FOR_IMPACT' = 3
}
