import actions from './useActions'
import getters from './useGetters'
import mutations from './useMutations'

const use = () => {
  return {
    ...actions(),
    ...getters(),
    ...mutations()
  }
}

export default use
