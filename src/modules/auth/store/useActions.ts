import { AuthData } from 'src/modules/auth/types/primitive-types'
import ApiClient from 'src/api-client'

export default function useActions () {
  async function logout () {
    await ApiClient.authService.logoutUser()
  }

  async function loginWithEmail (authData: AuthData) {
    await ApiClient.authService.loginUserWithEmailAndPassword(authData)
  }

  function fetchCurrenUser () {
    return ApiClient.authService.currentUser()
  }

  return {
    logout,
    loginWithEmail,
    fetchCurrenUser
  }
}
