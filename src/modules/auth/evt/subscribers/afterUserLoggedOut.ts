// import { LoggedOutEvent } from '../events/loggedOutEvent'
import useAuth from '../../store'
import { AbstractAfterUserLoggedOut } from '../subscriptions/abstractAfterUserLoggedOut'

const { commitSetUserAuthenticated } = useAuth()

export class AfterUserLoggedOut extends AbstractAfterUserLoggedOut {
  protected onEvent (/* event: LoggedOutEvent */): void {
    commitSetUserAuthenticated(false)
  }
}
