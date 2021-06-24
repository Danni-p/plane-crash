import { EventInterface } from 'src/models/evt/event.interface'

export class LoggedOutEvent implements EventInterface {
  readonly dateTimeOccurred: Date
  readonly eventName = LoggedOutEvent.getEventName()

  constructor () {
    this.dateTimeOccurred = new Date()
  }

  public static getEventName () {
    return 'LoggedOutEvent'
  }
}
