import { firebaseAuth } from 'src/boot/firebase'
import { AuthData, User } from 'src/modules/auth/types/primitive-types'
import { AuthServiceInterface } from './AuthService.interface'
import { Service } from '../../../models/api-client/service'
import { LoggedInEvent } from '../evt/events/loggedInEvent'
import { LoggedOutEvent } from '../evt/events/loggedOutEvent'

/* export type LoginCallback = (userId: string, accProvider: string[] | null) => Promise<void>
export type LogoutCallback = () => void */

export class AuthServiceModel extends Service implements AuthServiceInterface {
  private authListener: (() => void) | null = null

  async loginUserWithEmailAndPassword (credentials: AuthData) {
    await firebaseAuth.signInWithEmailAndPassword(credentials.email, credentials.password)
  }

  logoutUser () {
    return firebaseAuth.signOut()
  }

  authListenerOn () {
    this.authListener = firebaseAuth.onAuthStateChanged((user) => {
      if (user) {
        console.log('user logged in', user)
        this.dispatchEvent(new LoggedInEvent(user.uid))
      } else {
        console.log('user logged out')
        this.dispatchEvent(new LoggedOutEvent())
      }
    })
  }

  authListenerOff () {
    if (this.authListener) {
      this.authListener()
    }
  }

  currentUser () {
    const curUser = firebaseAuth.currentUser
    if (!curUser) {
      throw Error('Current User is not defined!')
    }
    return curUser
  }

  asyncCurrentUser (): Promise<User> {
    return new Promise((resolve, reject) => {
      const unsubscribe = firebaseAuth.onAuthStateChanged(user => {
        unsubscribe()
        if (!user) {
          return reject(Error('Current User is not defined!'))
        }
        resolve(user)
      }, reject)
    })
  }

  async asyncCurrentUserId (): Promise<string> {
    const user = await this.asyncCurrentUser()
    return user?.uid || Promise.reject(new Error('Not able to find current User!'))
  }
}
