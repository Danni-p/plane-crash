import {
  WingServiceInterface,
  WingServiceModel
} from 'src/modules/wing/api-client'

/* import { config } from '@/config' */

// instantiate the ItemsApiClient pointing at the url that returns the live data from an API server
const wingService: WingServiceInterface = new WingServiceModel()
// export our instance
export default wingService
