import {
  AuthServiceInterface,
  AuthServiceModel
} from 'src/modules/auth/api-client'

/* import { config } from '@/config' */

// instantiate the ItemsApiClient pointing at the url that returns the live data from an API server
const authService: AuthServiceInterface = new AuthServiceModel()
// export our instance
export default authService
