/* import { LoggedInEvent } from '../events/loggedInEvent' */
import { AbstractAfterUserLoggedIn } from 'src/modules/auth/evt/subscriptions/abstractAfterUserLoggedIn'
import ApiClient from 'src/api-client'

export class AfterUserLoggedIn extends AbstractAfterUserLoggedIn {
  protected onEvent (/* event: LoggedInEvent */): void {
    ApiClient.wingService.leftPassengersListenerOn()
    ApiClient.wingService.rightPassengersListenerOn()
  }
}
