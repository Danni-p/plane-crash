import ApiClient from 'src/api-client'
import { WingSide } from '../types/primitive-types'

export default function useActions () {
  async function updatePassengers (wingSide: WingSide, activeCount: number, maxCount: number) {
    await ApiClient.wingService.setPassengers(wingSide, activeCount, maxCount)
  }

  /* function fetchPassengers (wingSide: WingSide) {
    return ApiClient.wingService.fetchPassengers(wingSide)
  } */

  return {
    updatePassengers
    /* fetchPassengers */
  }
}
