import { /* WingPassengers,  */WingSide } from '../types/primitive-types'

/**
* @Name ItemsApiClientInterface
* @description
* Interface for the Items api client module
*/
export interface WingServiceInterface {
  /* fetchPassengers: (wingSide: WingSide) => Promise<WingPassengers> */
  setPassengers: (wingSide: WingSide, activeCount: number, maxCount: number) => Promise<void>
  leftPassengersListenerOn: () => void
  leftPassengersListenerOff: () => void
  rightPassengersListenerOn: () => void
  rightPassengersListenerOff: () => void
}
