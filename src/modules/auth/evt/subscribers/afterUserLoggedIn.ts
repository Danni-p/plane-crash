/* import { LoggedInEvent } from '../events/loggedInEvent' */
import { AbstractAfterUserLoggedIn } from '../subscriptions/abstractAfterUserLoggedIn'
import useAuth from '../../store'

const { commitSetUserAuthenticated } = useAuth()

export class AfterUserLoggedIn extends AbstractAfterUserLoggedIn {
  protected onEvent (/* event: LoggedInEvent */): void {
    commitSetUserAuthenticated(true)
  }
}
