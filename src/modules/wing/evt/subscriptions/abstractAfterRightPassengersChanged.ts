import { EventCallback } from 'src/models/evt/eventCallback'
import { EventInterface } from 'src/models/evt/event.interface'
import { SubscriptionInterface } from 'src/models/evt/subscription.interface'
import { RightPassengersChangedEvent } from '../events/rightPassengersChangedEvent'
import { EventManager } from 'src/models/evt/eventManager'

export abstract class AbstractAfterRightPassengersChanged extends SubscriptionInterface<RightPassengersChangedEvent> {
  protected setupSubscription (priority: number) {
    const evtCallback = new EventCallback(priority, (event: EventInterface) => {
      if (!(event instanceof RightPassengersChangedEvent)) {
        throw new Error('wrong Event')
      }
      this.onEvent(event)
    })

    EventManager.register(RightPassengersChangedEvent.getEventName(), evtCallback)
  }
}
