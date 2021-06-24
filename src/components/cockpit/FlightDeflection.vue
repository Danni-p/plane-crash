<template>
  <div :class="mq.xs.matches ? '' : ''" class="container-tab rounded-borders bg-secondary">
    <div class="heading text-h5 text-white q-pa-md">
      Zielabweichung
    </div>
    <div :class="mq.md.matches ? '' : 'q-py-lg'"  class="row items-center">
      <div class="col-3 text-center">
         <q-icon size="50px" :color="getX < 0 ? 'negative' : 'white'" name="chevron_left" />
      </div>
      <div
        class="col-6 text-center">
        <q-avatar
          :size="size"
          font-size="30px"
          color="primary"
          text-color="white">
          {{deflection}} m
        </q-avatar>
      </div>
      <div class="col-3 text-center">
        <q-icon size="50px" :color="getX > 0 ? 'negative' : 'white'" name="chevron_right" />
      </div>
    </div>
  </div> 
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import useCockpit from 'src/modules/cockpit/store'
import useBreakpoints from 'src/utils/useBreakpoints'

export default defineComponent({
  name: 'FlightDeflection',
  setup () {
    const mq = useBreakpoints({
      xs: [0, 400],
      sm: [401, 700],
      md: [701, 1000]
    })
    const { getX } = useCockpit()

    const deflection = computed(() => {
      return Math.abs(getX.value)
    })

    /* const size = computed(() => {
      if (mq.xs.matches) {
        return '100px'
      } else if (mq.sm.matches) {
        return '120px'
      } else if (mq.md.matches) {
        return '200px'
      } else {
        return '200px'
      }
    }) */
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

    return {
      deflection,
      getX,
      size,
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
