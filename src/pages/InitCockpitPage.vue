<template>
  <q-page class="row items-center justify-evenly">
    <div class="col-md-6 col-12 q-pa-sm">
      <q-card class="my-card bg-secondary text-white">
        <q-form @submit="handleGotoCockpit()">
          <q-card-section>
              <q-input
              outlined
              bg-color="white"
              class="q-pb-lg"
              v-model.number="height"
              type="number"
              label="Höhe">
              <template v-slot:append>m</template>
              </q-input>
              <q-input
                bg-color="white"
                filled
                v-model.number="distance"
                type="number"
                label="Distanz">
                <template v-slot:append>km</template>
              </q-input>
          </q-card-section>
          <q-separator dark />
          <q-card-actions align="center">
            <q-btn
              class="full-width"
              flat
              type="submit"
              label="Zum Cockpit"/>
          </q-card-actions>
        </q-form>
    </q-card>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'
import useCockpit from 'src/modules/cockpit/store'
import { calcMinVelocityZ } from 'src/utils/CalculateUtils'

export default defineComponent({
  name: 'InitCockpitPage',
  components: {
  },
  setup () {
    const router = useRouter()
    const {
      commitSetZ,
      commitSetY,
      commitSetX,
      commitSetMinZDot,
      getZ,
      getY,
      getVelocityXY
    } = useCockpit()
    const height = ref(getZ.value)
    const distance = ref(getY.value)
    async function handleGotoCockpit () {
      commitSetZ(10000)
      commitSetY(distance.value)
      commitSetX(0)
      commitSetMinZDot(calcMinVelocityZ(height.value, getVelocityXY.value, distance.value))
      await router.push({ name: 'Cockpit' })
    }
    return {
      height,
      distance,
      handleGotoCockpit
    }
  }
})
</script>
