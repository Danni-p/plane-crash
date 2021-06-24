// import { LoggedOutEvent } from '../events/loggedOutEvent'
import { AbstractAfterUserLoggedOut } from 'src/modules/auth/evt/subscriptions/abstractAfterUserLoggedOut'
import ApiClient from 'src/api-client'

export class AfterUserLoggedOut extends AbstractAfterUserLoggedOut {
  protected onEvent (/* event: LoggedOutEvent */): void {
    ApiClient.wingService.leftPassengersListenerOff()
    ApiClient.wingService.rightPassengersListenerOff()
  }
}
