<template>
  <div  class="container-tab rounded-borders bg-secondary">
    <div class="heading text-h5 text-white q-pa-md">
      Höhe
    </div>
    <div class="row items-center">
          <div class="col-12 text-center">
            <q-circular-progress
              show-value
              class="text-white"
              center-color="grey-8"
              :value="getZ"
              :size="size"
              :max="startHeight"
              color="primary"
              :font-size="fontSize">
              <div class="column">
                <div class="col-1">
                  <!-- <q-icon
                    :size="iconSize"
                    color="white"
                    name="download"
                  /> -->
                </div>
                <div :style="'font-size: ' + smallSize" class="q-pb-md col-1">
                  {{curVelocityY}} m/s
                </div>
                <div class="col-1">
                  {{ZGreaterZero}} m
                </div>
              </div>
            </q-circular-progress>
          </div>
        </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, watch } from 'vue'
import useCockpit from 'src/modules/cockpit/store'
import useWing from 'src/modules/wing/store'
import useBreakpoints from 'src/utils/useBreakpoints'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'FlightAngle',
  setup () {
    const mq = useBreakpoints({
      xs: [0, 400],
      sm: [401, 700],
      md: [701, 1000]
    })
    const router = useRouter()
    const {
      getZ,
      getMinZDot,
      stopSimulation
    } = useCockpit()

    const { getDropFactor } = useWing()
    const startHeight = ref(getZ.value)

    const curVelocityY = computed(() => {
      return Math.round(getMinZDot.value * (2 - getDropFactor.value) * 10) / 10
    })
    const size = computed(() => {
      if (mq.xs.matches) {
        return '8rem'
      } else if (mq.sm.matches) {
        return '10rem'
      } else if (mq.md.matches) {
        return '10rem'
      } else {
        return '14rem'
      }
    })
    const smallSize = computed(() => {
      if (mq.xs.matches) {
        return '10pt'
      } else if (mq.sm.matches) {
        return '12pt'
      } else if (mq.md.matches) {
        return '15pt'
      } else {
        return '19pt'
      }
    })

    const iconSize = computed(() => {
      if (mq.xs.matches) {
        return '2rem'
      } else {
        return '2rem'
      }
    })

    const fontSize = computed(() => {
      if (mq.xs.matches) {
        return '15pt'
      } else if (mq.sm.matches) {
        return '17pt'
      } else if (mq.md.matches) {
        return '20pt'
      } else {
        return '24pt'
      }
    })

    watch(getZ, async (newVal) => {
      if (newVal <= 0) {
        stopSimulation()
        await router.push({ name: 'Loose' })
      }
    })

    const ZGreaterZero = computed(() => getZ.value < 0 ? 0 : getZ.value)

    return {
      getZ,
      ZGreaterZero,
      startHeight,
      curVelocityY,
      size,
      smallSize,
      fontSize,
      iconSize,
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
}
</style>
