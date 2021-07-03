<template>
  <div class="row items-center">
    <div class="col-12" :class="dropVeloClass">
      <q-avatar
        :size="size + 'px'"
        color="transparent"
        text-color="white">
        <q-img :width="size + 'px'" src="cockpit/fallVelo.png" />
        <div :class="colorClass" :style="`font-size: ${size/10}px; position: absolute;`">
          {{curVelocityY}} m/s
        </div>
      </q-avatar>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, watch } from 'vue'
import useCockpit from 'src/modules/cockpit/store'
import useWing from 'src/modules/wing/store'
import useBreakpoints from 'src/utils/useBreakpoints'
import { useRouter } from 'vue-router'
import { calcMaxVelocityZ } from 'src/utils/CalculateUtils'

export default defineComponent({
  name: 'FlightDropVelocity',
  setup () {
    const mq = useBreakpoints({
      xs: [0, 400],
      sm: [401, 700],
      md: [701, 1000],
      lg: [1001, 1500],
      xl: [1501]
    })
    const router = useRouter()
    const {
      getZ,
      getMinZDot,
      stopSimulation
    } = useCockpit()

    const { getDropFactor } = useWing()
    const startHeight = ref(getZ.value)

    const maxVeloZ = calcMaxVelocityZ(getMinZDot.value)

    const curVelocityY = computed(() => {
      return Math.round(getMinZDot.value * (2 - getDropFactor.value) * 10) / 10
    })

    const colorClass = computed(() => {
      const relVelo = (curVelocityY.value - getMinZDot.value) / (maxVeloZ - getMinZDot.value)
      return 'text-deep-orange-' + Math.ceil(relVelo * 10).toString()
    })

    const size = computed(() => {
      if (mq.xs.matches) {
        return 100
      } else if (mq.sm.matches) {
        return 130
      } else if (mq.md.matches) {
        return 200
      } else if (mq.lg.matches) {
        return 280
      } else {
        return 300
      }
    })

    const dropVeloClass = computed(() => {
      if (mq.xs.matches) {
        return 'drop-velo-xs'
      } else if (mq.sm.matches) {
        return 'drop-velo-sm'
      } else if (mq.md.matches) {
        return 'drop-velo-md'
      } else if (mq.lg.matches) {
        return 'drop-velo-lg'
      } else {
        return 'drop-velo-xl'
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
      dropVeloClass,
      colorClass,
      getZ,
      ZGreaterZero,
      startHeight,
      curVelocityY,
      size,
      mq,
      maxVeloZ,
      getMinZDot
    }
  }
})
</script>
<style scoped>
.drop-velo-xl {
  text-align: center;
}

.drop-velo-lg {
  text-align: right;
}

.drop-velo-md {
  text-align: right;
}

.drop-velo-sm {
  text-align: right;
}

.drop-velo-xs {
  text-align: right;
}

</style>
