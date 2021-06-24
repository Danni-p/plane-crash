import { AuthData, User } from 'src/modules/auth/types/primitive-types'

/**
* @Name ItemsApiClientInterface
* @description
* Interface for the Items api client module
*/
export interface AuthServiceInterface {
  loginUserWithEmailAndPassword: (credentials: AuthData) => Promise<void>
  logoutUser: () => Promise<void>
  authListenerOn: () => void
  authListenerOff: () => void
  currentUser: () => User
  asyncCurrentUser: () => Promise<User>
  asyncCurrentUserId: () => Promise<string>
}
