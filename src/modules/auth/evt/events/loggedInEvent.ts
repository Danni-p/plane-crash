import { EventInterface } from 'src/models/evt/event.interface'

export class LoggedInEvent implements EventInterface {
  public readonly dateTimeOccurred: Date
  public readonly eventName = LoggedInEvent.getEventName()
  private _userId = ''

  constructor (userid: string) {
    this._userId = userid
    this.dateTimeOccurred = new Date()
  }

  getUserId () {
    return this._userId
  }

  public static getEventName () {
    return 'LoggedInEvent'
  }
}
