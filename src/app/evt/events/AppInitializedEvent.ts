import { EventInterface } from 'src/models/evt/event.interface'

export class AppInitializedEvent implements EventInterface {
  public readonly dateTimeOccurred: Date
  public readonly eventName = AppInitializedEvent.getEventName()

  constructor () {
    this.dateTimeOccurred = new Date()
  }

  public static getEventName () {
    return 'AppInitializedEvent'
  }
}
