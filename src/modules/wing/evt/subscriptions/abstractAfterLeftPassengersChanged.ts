import { EventCallback } from 'src/models/evt/eventCallback'
import { EventInterface } from 'src/models/evt/event.interface'
import { SubscriptionInterface } from 'src/models/evt/subscription.interface'
import { LeftPassengersChangedEvent } from '../events/leftPassengersChangedEvent'
import { EventManager } from 'src/models/evt/eventManager'

export abstract class AbstractAfterLeftPassengersChanged extends SubscriptionInterface<LeftPassengersChangedEvent> {
  protected setupSubscription (priority: number) {
    const evtCallback = new EventCallback(priority, (event: EventInterface) => {
      if (!(event instanceof LeftPassengersChangedEvent)) {
        throw new Error('wrong Event')
      }
      this.onEvent(event)
    })

    EventManager.register(LeftPassengersChangedEvent.getEventName(), evtCallback)
  }
}
