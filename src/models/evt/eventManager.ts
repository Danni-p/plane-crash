import { EventCallback } from './eventCallback'
import { EventInterface } from './event.interface'

export class EventManager {
  private static _topics = new Map<string, EventCallback[]>()

  public static register (eventClassName: string, callback: EventCallback) {
    if (!this._topics.has(eventClassName)) {
      this._topics.set(eventClassName, [])
    }

    const obsArr = this._topics.get(eventClassName)
    if (!obsArr) {
      throw new Error('Error in register method of sync manager')
    }
    const index = this.findRightPositionOfInsertedCallback(obsArr, callback.getPriority())

    obsArr.splice(index, 0, callback) // insert Callback to right Position
    // obsArr.push(callback)
  }

  private static findRightPositionOfInsertedCallback (arr: EventCallback[], priority: number) {
    // smallest Priority is highest Priority
    let index = 0
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].getPriority() > priority) {
        break
      }
      index = i + 1
    }
    return index
  }

  public static dispatchEvent (event: EventInterface) {
    const topic = this._topics.get(event.eventName)
    if (!topic) {
      return
      // throw new Error(`No registered event ${event.eventName} found.`)
    }
    for (let i = 0; i < topic.length; i++) {
      topic[i].execute(event)
    }
  }

  public static getNrOfSubscribersOnEvent (eventName: string) {
    if (this._topics.has(eventName)) {
      return this._topics.get(eventName)?.length
    } else {
      return 0
    }
  }
}
