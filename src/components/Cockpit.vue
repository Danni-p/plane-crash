<template>
<div class="container" :class="(mq.xs.matches || mq.sm.matches) ? 'q-pa-sm' : 'q-pa-lg'">
  <!-- <flight-distance :class="mq.xs.matches ? '' : 'distance'"/> -->
  <flight-height class="height" />
  <flight-angle class="angle"/>
  <flight-direction class="direction"/>
  <flight-velocity class="velocity"/>
  <flight-drop-velocity class="drop-velocity"/>
</div>
 <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title class="text-center">
          <q-btn-toggle
            v-model="simStart"
            @update:model-value="handleSimulation()"
            push
            rounded
            glossy
            toggle-color="purple"
            :options="[
              {value: 'stop', slot: 'stop'},
              {value: 'play', slot: 'play'}
            ]"
          >
            <template v-slot:stop>
              <div class="row items-center no-wrap">
                <q-icon right name="stop" />
              </div>
            </template>

            <template v-slot:play>
              <div class="row items-center no-wrap">
                <q-icon right name="play_arrow" />
              </div>
            </template>
          </q-btn-toggle>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
</template>

<script lang="ts">
import { defineComponent, ref, watchEffect } from 'vue'
import FlightHeight from 'src/components/cockpit/FlightHeight.vue'
/* import FlightDistance from 'src/components/cockpit/FlightDistance.vue' */
import FlightAngle from 'src/components/cockpit/FlightAngle.vue'
/* import FlightDeflection from 'src/components/cockpit/FlightDeflection.vue' */
import FlightDirection from 'src/components/cockpit/FlightDirection.vue'
import FlightVelocity from 'src/components/cockpit/FlightVelocity.vue'
import FlightDropVelocity from 'src/components/cockpit/FlightDropVelocity.vue'
import useCockpit from 'src/modules/cockpit/store'
import useBreakpoints from 'src/utils/useBreakpoints'
import { calcAbsoluteDistanceInKm } from 'src/utils/CalculateUtils'
import { useRouter } from 'vue-router'
import { AlertStatus } from 'src/modules/cockpit/types/primitive-types'

export default defineComponent({
  name: 'Cockpit',
  components: {
    FlightHeight,
    /* FlightDistance, */
    FlightAngle,
    FlightDirection,
    FlightVelocity,
    FlightDropVelocity/* ,
    FlightDeflection */
  },
  setup () {
    const mq = useBreakpoints({
      xs: [0, 400],
      sm: [401, 700]
    })

    const router = useRouter()
    const {
      getX,
      getY,
      getZ,
      startSimulation,
      stopSimulation
    } = useCockpit()

    const simStart = ref('stop')
    const curHeight = ref(getZ.value)

    function handleSimulation () {
      if (simStart.value === 'play') {
        startSimulation()
      } else if (simStart.value === 'stop') {
        stopSimulation()
      }
    }

    watchEffect(() => {
      if (calcAbsoluteDistanceInKm(getX.value, getY.value) * 1000 <= 300) {
        stopSimulation()
        void router.push({ name: 'Win' })
      }
    })

    return {
      curHeight,
      mq,
      simStart,
      handleSimulation
    }
  }
})
</script>
<style scoped>
.container {
  position: absolute;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  gap: 10px;
}

/* .container-mobile {
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 20% 20% 20% 20% 20%;
  gap: 10px;
} */

/* .distance {
  grid-column: 1 / span 2;
  grid-row: 1;
} */

.height {
  grid-column: 1;
  grid-row: 4;
}

.velocity {
  grid-column: 2;
  grid-row: 4
}

.drop-velocity {
  grid-column: 2;
  grid-row: 1;
}

.angle {
  grid-column: 1;
  grid-row: 1;
}

/* .deflection {
  grid-column: 1;
  grid-row: 3;
} */

.direction {
  grid-column: 1 / span 2;
  grid-row: 2 / span 2;
}
</style>
