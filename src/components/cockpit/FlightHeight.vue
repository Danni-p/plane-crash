<template>
  <div class="row items-center">
    <div class="col-12" :class="heightClass">
      <q-circular-progress
        show-value
        :style="`color: ${alertColor};`"
        :value="getZ"
        :size="size+'px'"
        :max="startHeight"
        :color="alertColor"
        :font-size="`${size/7}px`">
        <q-img :width="size-30 + 'px'" src="cockpit/hoehe.png" />
        <div class="" style="position: absolute">
          {{ZGreaterZero}} m
        </div>
      </q-circular-progress>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, watch } from 'vue'
import useCockpit from 'src/modules/cockpit/store'
import useWing from 'src/modules/wing/store'
import useBreakpoints from 'src/utils/useBreakpoints'
import { useRouter } from 'vue-router'
import { AlertStatus } from 'src/modules/cockpit/types/primitive-types'

export default defineComponent({
  name: 'FlightHeight',
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
      stopSimulation,
      getAlertStatus
    } = useCockpit()

    const { getDropFactor } = useWing()
    const startHeight = ref(getZ.value)

    const curVelocityY = computed(() => {
      return Math.round(getMinZDot.value * (2 - getDropFactor.value) * 10) / 10
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

    const heightClass = computed(() => {
      if (mq.xs.matches) {
        return 'height-xs'
      } else if (mq.sm.matches) {
        return 'height-sm'
      } else if (mq.md.matches) {
        return 'height-md'
      } else if (mq.lg.matches) {
        return 'height-lg'
      } else {
        return 'height-xl'
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

    const alertColor = computed(() => {
      if (getAlertStatus.value === AlertStatus.SAFE) {
        return 'green'
      } else if (getAlertStatus.value === AlertStatus.WARNING) {
        return 'yellow'
      } else if (getAlertStatus.value === AlertStatus.DANGER) {
        return 'orangered'
      } else if (getAlertStatus.value === AlertStatus.BRACE_FOR_IMPACT) {
        return 'red'
      } 
    })
    const audio = new Audio('sounds/danger.mp3')
    const impactVoice = new Audio('sounds/impact-voice.mp3')
    impactVoice.loop = true

    watch(getZ, async (newVal) => {
      if (newVal <= 0) {
        stopSimulation()
        audio.pause()
        impactVoice.pause()
        await router.push({ name: 'Loose' })
      }
    })

    watch(getAlertStatus, async (newVal) => {
      if (newVal === AlertStatus.DANGER) {  
        await audio.play()
      } else if (newVal === AlertStatus.BRACE_FOR_IMPACT) {
        await impactVoice.play()
      }
    })

    const ZGreaterZero = computed(() => getZ.value < 0 ? 0 : Math.round(getZ.value))

    return {
      getZ,
      ZGreaterZero,
      startHeight,
      curVelocityY,
      size,
      fontSize,
      mq,
      heightClass,
      alertColor
    }
  }
})
</script>
<style scoped>
.height-xl {
  text-align: center;
}

.height-lg {
  text-align: left;
}

.height-md {
  text-align: left;
}

.height-sm {
  text-align: left;
}

.height-xs {
  text-align: left;
}

</style>
