import { EventInterface } from 'src/models/evt/event.interface'
import { WingPassengers } from '../../types/primitive-types'

export class RightPassengersChangedEvent implements EventInterface {
  public readonly dateTimeOccurred: Date
  public readonly eventName = RightPassengersChangedEvent.getEventName()
  private _passengers: WingPassengers

  constructor (passengers: WingPassengers) {
    this._passengers = passengers
    this.dateTimeOccurred = new Date()
  }

  getRightWingPassengers () {
    return this._passengers
  }

  public static getEventName () {
    return 'RightPassengersChangedEvent'
  }
}
