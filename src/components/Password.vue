<template>
  <q-card :class="mq.xs.matches ? 'full-width' : 'desktop-card'" class="bg-myDarkBrown">
      <q-card-section class="bg-myOrange text-white">
        <div class="text-h6">Password eingeben</div>
      </q-card-section>
      <q-form @submit="handleLogin()">
        <q-card-section>
          <q-input
            outlined
            bg-color="myDarkGrey"
            v-model="pwd"
            type="password"/>
        </q-card-section>
        <q-separator />
        <q-card-actions align="center">
          <q-btn
            flat
            text-color="myOrange"
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
import useBreakpoints from 'src/utils/useBreakpoints'

export default defineComponent({
  name: 'Password',
  props: {
  },
  setup () {
    const mq = useBreakpoints({
      xs: [0, 500]
    })
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
      handleLogin,
      mq
    }
  }
})
</script>
<style scoped>
.desktop-card {
  min-width: 500px;
}
</style>
