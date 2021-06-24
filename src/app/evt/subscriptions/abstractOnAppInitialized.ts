import { EventCallback } from 'src/models/evt/eventCallback'
import { EventInterface } from 'src/models/evt/event.interface'
import { SubscriptionInterface } from 'src/models/evt/subscription.interface'
import { AppInitializedEvent } from 'src/app/evt/events/AppInitializedEvent'
import { EventManager } from 'src/models/evt/eventManager'

export abstract class AbstractOnAppInitialized extends SubscriptionInterface<AppInitializedEvent> {
  setupSubscription (priority: number) {
    const evtCallback = new EventCallback(priority, (event: EventInterface) => {
      if (!(event instanceof AppInitializedEvent)) {
        throw new Error('wrong Event')
      }
      this.onEvent(event)
    })

    EventManager.register(AppInitializedEvent.getEventName(), evtCallback)
  }
}
