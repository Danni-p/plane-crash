import { EventCallback } from 'src/models/evt/eventCallback'
import { EventInterface } from 'src/models/evt/event.interface'
import { SubscriptionInterface } from 'src/models/evt/subscription.interface'
import { LoggedInEvent } from '../events/loggedInEvent'
import { EventManager } from 'src/models/evt/eventManager'

export abstract class AbstractAfterUserLoggedIn extends SubscriptionInterface<LoggedInEvent> {
  protected setupSubscription (priority: number) {
    const evtCallback = new EventCallback(priority, (event: EventInterface) => {
      if (!(event instanceof LoggedInEvent)) {
        throw new Error('wrong Event')
      }
      this.onEvent(event)
    })

    EventManager.register(LoggedInEvent.getEventName(), evtCallback)
  }
}
