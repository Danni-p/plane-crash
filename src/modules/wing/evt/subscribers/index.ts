/* eslint-disable no-new */
import { AfterUserLoggedIn } from './afterUserLoggedIn'
import { AfterUserLoggedOut } from './afterUserLoggedOut'
import { AfterLeftPassengersChanged } from './afterLeftPassengersChanged'
import { AfterRightPassengersChanged } from './afterRightPassengersChanged'

// Subscribers
new AfterUserLoggedIn(10)
new AfterUserLoggedOut(10)
new AfterLeftPassengersChanged(10)
new AfterRightPassengersChanged(10)
