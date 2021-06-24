
<template>
  <div class="container-tab rounded-borders bg-secondary">
    <div class="heading text-h5 text-white q-pa-md">
      Neigung
    </div>
    <div class="row items-center">
          <div
            class="col-12 text-center"
            :style="'transform: rotate(' + getAngle + 'deg)'">
            <q-avatar
              :size="size"
              color="primary"
              text-color="white">
              <img src="angle.png">
            </q-avatar>
          </div>
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
      md: [701, 1000]
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

    const { getAngle } = useCockpit()
    return {
      getAngle,
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

</style>
