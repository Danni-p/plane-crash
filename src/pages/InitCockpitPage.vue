<template>
  <q-page class="row items-center justify-evenly">
    <div class="col-md-6 col-12 q-pa-md">
      <q-card class="my-card bg-myOrange text-white">
        <q-form @submit="handleGotoCockpit()">
          <q-card-section>
            <div class="text-h6">Kürzeste Flugzeit zur Insel</div>
            <div class="text-subtitle2">bei perfektem Manöver</div>
          </q-card-section>
          <q-card-section>
            <div class="row items-center">
              <div class="col">
                <q-input
                  outlined
                  bg-color="white"
                  class="q-pb-lg"
                  v-model.number="flightTime"
                  type="number"
                  label="Flugzeit">
                  <template v-slot:append>min</template>
                </q-input>
              </div>
            </div>
            <div class="row">
              Erklärung: Wenn das Flugzeug stets seinen perfekten Kurs beibehält und niemals neu ausgerichtet werden muss, erreicht
              es die Insel in der Zeit t. Diese Zeit t kann hier definiert werden.
            </div>
          </q-card-section>
          <!-- <q-card-section>
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
          </q-card-section> -->
          <q-separator dark />
          <q-card-actions align="center">
            <q-btn
              class="full-width"
              flat
              :disable="flightTime <= 0"
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

export default defineComponent({
  name: 'InitCockpitPage',
  components: {
  },
  setup () {
    const router = useRouter()
    const {
      commitSetY,
      commitSetX,
      commitSetStartDistance,
      getVelocityXY
    } = useCockpit()
    const flightTime = ref(30)
    async function handleGotoCockpit () {
      const distance = getVelocityXY.value * flightTime.value * 60
      commitSetStartDistance(distance)
      commitSetY(distance)
      commitSetX(0)
      /* commitSetMinZDot(calcMinVelocityZ(height.value, getVelocityXY.value, distance.value)) */
      await router.push({ name: 'Cockpit' })
    }
    return {
      handleGotoCockpit,
      flightTime
    }
  }
})
</script>
