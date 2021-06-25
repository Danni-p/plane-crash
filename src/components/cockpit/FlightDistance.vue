<template>
<div :class="mq.xs.matches ? '' : 'container-tab'" class="rounded-borders bg-secondary">
  <div class="heading text-h5 text-white q-pa-md">
    Distanz
  </div>
  <div class="content">
    <div class="q-pa-lg">
      <div>
        <q-range
          v-model="rangeData"
          :min="0"
          :max="max"
          color="primary"
          label-always
          readonly
          reverse
          :right-label-value="rangeData.max + ' km'"
          left-label-value="Ziel"
        />
      </div>
      <!-- <div class="text-subtitle1 text-white text-center">
        {{getVelocityXY}} m/s
      </div>   -->
    </div>
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent, computed, watchEffect } from 'vue'
import useCockpit from 'src/modules/cockpit/store'
import useBreakpoints from 'src/utils/useBreakpoints'
import { calcAbsoluteDistanceInKm } from 'src/utils/CalculateUtils'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'FlightDistance',
  setup () {
    const mq = useBreakpoints({
      xs: [0, 700]
    })

    const router = useRouter()

    const {
      getX,
      getY,
      getVelocityXY,
      stopSimulation
    } = useCockpit()

    /* const curDistance = computed(() => {
      return Math.round(calcAbsoluteDistanceInKm(getX.value, getY.value) * 10) / 10
    }) */
    const max = Math.round(calcAbsoluteDistanceInKm(getX.value, getY.value) * 10) / 10

    const rangeData = computed(() => {
      return {
        min: 0,
        max: Math.round(calcAbsoluteDistanceInKm(getX.value, getY.value) * 10) / 10
      }
    })

    watchEffect(async () => {
      if (calcAbsoluteDistanceInKm(getX.value, getY.value) * 1000 <= 300) {
        stopSimulation()
        await router.push({ name: 'Win' })
      }
    })

    return {
      max,
      getVelocityXY,
      getY,
      rangeData,
      mq
    }
  }
})
</script>
<style scoped>
.container-mobiles {
  display: flex;
  align-items: center;
  height: inherit;
}
.container-tab {
  display: grid;
  grid-template-rows: 20px auto;
}

.heading {
  justify-self: start;
}

.content {
  justify-self: stretch;
  align-self: center;
  padding-top: 20px;
}
</style>
