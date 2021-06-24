/* eslint-disable no-new */
import { AfterUserLoggedIn } from './afterUserLoggedIn'
import { AfterUserLoggedOut } from './afterUserLoggedOut'
import { OnAppInitialized } from './onAppInitialized'

// Subscribers
new AfterUserLoggedIn(10)
new AfterUserLoggedOut(10)
new OnAppInitialized(10)
