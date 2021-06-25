<template>
  <div class="container-tab rounded-borders bg-secondary">
    <div class="heading text-h5 text-white q-pa-md">
      Radar
    </div>
    <div class="row items-center">
      
      <div
        class="col-12 text-center"
        :style="'transform: rotate(' + getBeta + 'deg)'">
        
        <q-avatar
          :size="size + 'rem'"
          color="primary"
          text-color="white"
          icon="flight">
          <!-- :style="`transform: translate(${radarX}rem,${radarY}rem);`" -->
          <div
            class="target"
            :style="`transform: rotate(${-getBeta}deg) translate(${radarX}rem,${radarY}rem)`"
            >
            <q-icon
              name="adjust"
              size="30px"
            />
          </div>
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
  name: 'FlightDirection',
  setup () {
    const mq = useBreakpoints({
      xs: [0, 400],
      sm: [401, 700],
      md: [701, 1000]
    })
    const {
      getBeta,
      getX,
      getY
    } = useCockpit()

    const size = computed(() => {
      if (mq.xs.matches) {
        return 8
      } else if (mq.sm.matches) {
        return 10
      } else if (mq.md.matches) {
        return 10
      } else {
        return 14
      }
    })

    const radarX = computed(() => {
      return -Math.sin(Math.atan2(getX.value, getY.value)) * size.value / 2
    })

    const radarY = computed(() => {
      return -Math.cos(Math.atan2(getX.value, getY.value)) * size.value / 1.9
    })

    return {
      getBeta,
      size,
      radarX,
      radarY,
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

.target {
  position: absolute;
  /*transform: translate(7rem,5rem);*/
}

</style>
