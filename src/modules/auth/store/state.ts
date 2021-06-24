import { reactive } from 'vue'
export interface AuthStateInterface {
  authenticated: boolean;
}

const state = reactive({
  authenticated: false
} as AuthStateInterface)

export default state
