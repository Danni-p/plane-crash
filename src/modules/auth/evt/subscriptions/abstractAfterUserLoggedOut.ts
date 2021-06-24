import { EventCallback } from 'src/models/evt/eventCallback'
import { EventInterface } from 'src/models/evt/event.interface'
import { SubscriptionInterface } from 'src/models/evt/subscription.interface'
import { LoggedOutEvent } from '../events/loggedOutEvent'
import { EventManager } from 'src/models/evt/eventManager'

export abstract class AbstractAfterUserLoggedOut extends SubscriptionInterface<LoggedOutEvent> {
  protected setupSubscription (priority: number) {
    const evtCallback = new EventCallback(priority, (event: EventInterface) => {
      if (!(event instanceof LoggedOutEvent)) {
        throw new Error('wrong Event')
      }

      this.onEvent(event)
    })

    EventManager.register(LoggedOutEvent.getEventName(), evtCallback)
  }
}
