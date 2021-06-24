// GEN-IMPORTS
import { AuthServiceInterface } from 'src/modules/auth/api-client'
import { WingServiceInterface } from 'src/modules/wing/api-client'

/**
 * @Name ApiClientInterface
 * @description
 * Interface wraps all api client modules into one places for keeping code organized.
 */
export interface ApiClientInterface {
  // GEN-PROPERTIES
  authService: AuthServiceInterface
  wingService: WingServiceInterface
}
