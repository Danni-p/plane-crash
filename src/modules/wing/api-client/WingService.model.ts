import { firebaseDB } from 'src/boot/firebase'
import { WingServiceInterface } from './WingService.interface'
import { Service } from '../../../models/api-client/service'
import { WingPassengers, WingSide } from '../types/primitive-types'
import { LeftPassengersChangedEvent } from '../evt/events/leftPassengersChangedEvent'
import { RightPassengersChangedEvent } from '../evt/events/rightPassengersChangedEvent'

/* export type LoginCallback = (userId: string, accProvider: string[] | null) => Promise<void>
export type LogoutCallback = () => void */

export class WingServiceModel extends Service implements WingServiceInterface {
  private leftPassengersListener: (() => void) | null = null
  private rightPassengersListener: (() => void) | null = null
  /* async fetchPassengers (wingSide: WingSide) {
    if (wingSide === 'left') {
      const doc = await firebaseDB.collection('wing').doc('leftPassengers').get()
      return <WingPassengers>doc.data()
    } else {
      const doc = await firebaseDB.collection('wing').doc('rightPassengers').get()
      return <WingPassengers>doc.data()
    }
  } */

  async setPassengers (wingSide: WingSide, activeCount: number, maxCount: number) {
    const wingPassengers: WingPassengers = {
      active: activeCount,
      max: maxCount
    }
    if (wingSide === 'left') {
      await firebaseDB.collection('wing').doc('leftPassengers').update(wingPassengers)
    } else {
      await firebaseDB.collection('wing').doc('rightPassengers').update(wingPassengers)
    }
  }

  leftPassengersListenerOn () {
    firebaseDB.collection('wing').doc('leftPassengers').onSnapshot((snap) => {
      const wingPassengers = <WingPassengers>snap.data()
      this.dispatchEvent(new LeftPassengersChangedEvent(wingPassengers))
    })
  }

  leftPassengersListenerOff () {
    if (this.leftPassengersListener) {
      this.leftPassengersListener()
    }
  }

  rightPassengersListenerOn () {
    firebaseDB.collection('wing').doc('rightPassengers').onSnapshot((snap) => {
      const wingPassengers = <WingPassengers>snap.data()
      this.dispatchEvent(new RightPassengersChangedEvent(wingPassengers))
    })
  }

  rightPassengersListenerOff () {
    if (this.rightPassengersListener) {
      this.rightPassengersListener()
    }
  }
}
