import state from './state'

export default function useMutations () {
  function commitSetUserAuthenticated (flag: boolean) {
    // commit(MutationTypes.SET_USER_AUTHENTICATED, flag)
    state.authenticated = flag
  }

  return {
    commitSetUserAuthenticated
  }
}
