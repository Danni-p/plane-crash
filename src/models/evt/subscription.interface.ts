import { EventInterface } from './event.interface'

export abstract class SubscriptionInterface<T extends EventInterface> {
  protected abstract onEvent(event: T): void
  protected abstract setupSubscription(priority: number): void;

  constructor (priority: number) {
    this.setupSubscription(priority)
  }
}
