
<template>
  <div class="row items-center">
    <div
      class="col-12" :class="angleClass">
      <q-avatar
        :size="size + 'px'"
        color="transparent"
        text-color="white">
        <div style="position: absolute">
          <q-img :width="size + 'px'" src="cockpit/neigung.png" />
        </div>
         <!-- :style="`transform: rotate(${getAngle}deg)`" -->
        <div class="plane-shake">
          <div
            class="target bg-transparent q-pa-none plane-transition"
            :style="`transform: rotate(${getAngle}deg)`">
            <q-img class="" :width="size/ 1.5 + 'px'" src="angle.png" />
          </div>
        </div>
      </q-avatar>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import useCockpit from 'src/modules/cockpit/store'
import useBreakpoints from 'src/utils/useBreakpoints'

export default defineComponent({
  name: 'FlightAngle',
  setup () {
    const mq = useBreakpoints({
      xs: [0, 400],
      sm: [401, 700],
      md: [701, 1000],
      lg: [1001, 1500],
      xl: [1501]
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

    const angleClass = computed(() => {
      if (mq.xs.matches) {
        return 'angle-xs'
      } else if (mq.sm.matches) {
        return 'angle-sm'
      } else if (mq.md.matches) {
        return 'angle-md'
      } else if (mq.lg.matches) {
        return 'angle-lg'
      } else {
        return 'angle-xl'
      }
    })

    const { getAngle } = useCockpit()
    return {
      getAngle,
      angleClass,
      size,
      mq
    }
  }
})
</script>
<style scoped>
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

.angle-xl {
  text-align: center;
}

.angle-lg {
  text-align: left;
}

.angle-md {
  text-align: left;
}

.angle-sm {
  text-align: left;
}

.angle-xs {
  text-align: left;
}

.plane-transition {
  transition: all 0.8s;
}

.plane-shake {
  animation: shake 10s;
  animation-iteration-count: infinite;
}

@keyframes shake {
  0% { transform: rotate(0deg); }
  10% { transform: rotate(-3deg); }
  20% { transform: rotate(3deg); }
  30% { transform: rotate(0deg); }
  40% { transform: rotate(3deg); }
  50% { transform: rotate(-3deg); }
  60% { transform: rotate(0deg); }
  70% { transform: rotate(-3deg); }
  80% { transform: rotate(3deg); }
  90% { transform: rotate(1deg); }
  100% { transform: rotate(0deg); }
}

</style>
