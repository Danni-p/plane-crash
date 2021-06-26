
<template>
  <div class="row items-center">
    <div
      class="col-12" :class="veloClass">
      <q-avatar
        :size="size + 'px'"
        color="transparent"
        text-color="white">
        <div style="position: absolute">
          <q-img :width="size + 'px'" src="cockpit/velo.png" />
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
  name: 'FlightVelocity',
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

    const veloClass = computed(() => {
      if (mq.xs.matches) {
        return 'velo-xs'
      } else if (mq.sm.matches) {
        return 'velo-sm'
      } else if (mq.md.matches) {
        return 'velo-md'
      } else if (mq.lg.matches) {
        return 'velo-lg'
      } else {
        return 'velo-xl'
      }
    })

    const { getAngle } = useCockpit()
    return {
      veloClass,
      getAngle,
      size,
      mq
    }
  }
})
</script>
<style scoped>
.velo-xl {
  text-align: center;
}

.velo-lg {
  text-align: right;
}

.velo-md {
  text-align: right;
}

.velo-sm {
  text-align: right;
}

.velo-xs {
  text-align: right;
}
</style>
