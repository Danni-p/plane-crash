import { EventManager } from 'src/models/evt/eventManager'
/* import { AsyncEventInterface } from '../evt/asyncEvent.interface' */
import { EventInterface } from '../evt/event.interface'

/**
* @Name ServicetInterface
* @description
* Interface for the Services
*/
export abstract class Service {
  dispatchEvent (event: EventInterface) {
    console.log('execute sync Event', event.eventName)
    EventManager.dispatchEvent(event)
  }

/*   async dispatchAsyncEvent (event: AsyncEventInterface) {
    console.log('execute async Event', event.eventName)
    await EventManager.dispatchAsyncEvent(event)
  } */
}
