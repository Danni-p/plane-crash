import { EventInterface } from './event.interface'

export class EventCallback {
  private priority: number
  private callback: (event: EventInterface) => void

  constructor (prio: number, callback: (event: EventInterface) => void) {
    this.priority = prio
    this.callback = callback
  }

  public execute (event: EventInterface) {
    this.callback(event)
  }

  public getPriority () {
    return this.priority
  }
}
