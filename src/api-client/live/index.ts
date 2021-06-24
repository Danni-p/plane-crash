import { ApiClientInterface } from 'src/models/api-client/ApiClient.interface'
import AuthService from './auth-service'
import WingService from './wing-service'

// create an instance of our main ApiClient that wraps the live child clients
const apiLiveClient: ApiClientInterface = {
  authService: AuthService,
  wingService: WingService
}
// export our instance
export default apiLiveClient
