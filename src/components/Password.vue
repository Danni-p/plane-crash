<template>
  <q-card style="width: 50%;">
      <q-card-section class="bg-primary text-white">
        <div class="text-h6">Password eingeben</div>
      </q-card-section>
      <q-form @submit="handleLogin()">
        <q-card-section>
          <q-input
            outlined
            v-model="pwd"
            type="password"/>
        </q-card-section>
        <q-separator />
        <q-card-actions align="center">
          <q-btn
            flat
            label="Anmelden"
            type="submit" />
        </q-card-actions>
      </q-form>
    </q-card>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import useAuth from 'src/modules/auth/store'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'Password',
  props: {
  },
  setup () {
    const { loginWithEmail } = useAuth()
    const router = useRouter()
    const pwd = ref('')
    async function handleLogin () {
      console.log(pwd.value)
      await loginWithEmail({ email: 'danielpascheka@web.de', password: pwd.value }).then(async () => {
        await router.push({
          path: '/'
        })
      })
    }
    return {
      pwd,
      handleLogin
    }
  }
})
</script>
