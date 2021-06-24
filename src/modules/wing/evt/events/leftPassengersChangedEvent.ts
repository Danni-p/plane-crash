import { EventInterface } from 'src/models/evt/event.interface'
import { WingPassengers } from '../../types/primitive-types'

export class LeftPassengersChangedEvent implements EventInterface {
  public readonly dateTimeOccurred: Date
  public readonly eventName = LeftPassengersChangedEvent.getEventName()
  private _passengers: WingPassengers

  constructor (passengers: WingPassengers) {
    this._passengers = passengers
    this.dateTimeOccurred = new Date()
  }

  getLeftWingPassengers () {
    return this._passengers
  }

  public static getEventName () {
    return 'LeftPassengersChangedEvent'
  }
}
