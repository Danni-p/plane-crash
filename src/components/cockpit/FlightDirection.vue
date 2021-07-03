<template>
  <div style="display: flex; align-items: center; justify-content: center" class="">
    <div
      :style="'transform: rotate(' + getBeta + 'deg)'">
      <q-avatar
        :size="size + 'px'"
        font-size="0px"
        color="transparent">
        <div style="position: absolute">
          <q-img class="radar" :width="size+'px'" src="radar3.png">
          </q-img>
        </div>

        <div
          class="target bg-transparent q-pa-none"
          :style="`transform: rotate(${-getBeta}deg) translate(${radarX}px,${radarY}px)`"
          >
          <q-icon name="adjust" size="30px" color="white">
            <q-tooltip
              no-parent-event
              anchor="top middle"
              self="center middle"
              v-model="tooltip">
              {{curDistance}} km
            </q-tooltip>
          </q-icon>
        </div>
        <div
          class="target bg-transparent q-pa-none"
          :style="`transform: rotate(${-getBeta}deg) translate(${0}px,${0}px)`">
          <div :style="`transform: rotate(${getBeta}deg)`">
            <q-icon style="z-index:100000" color="white" name="flight" size="40px"/>
          </div>
        </div>
      </q-avatar>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue'
import useCockpit from 'src/modules/cockpit/store'
import useBreakpoints from 'src/utils/useBreakpoints'
import { calcAbsoluteDistanceInKm } from 'src/utils/CalculateUtils'

export default defineComponent({
  name: 'FlightDirection',
  setup () {
    const mq = useBreakpoints({
      xs: [0, 400],
      sm: [401, 700],
      md: [701, 1000],
      lg: [1001, 1500],
      xl: [1501]
    })
    const {
      getBeta,
      getX,
      getY,
      getStartDistance
    } = useCockpit()

    const size = computed(() => {
      if (mq.xs.matches) {
        return 250
      } else if (mq.sm.matches) {
        return 250
      } else if (mq.md.matches) {
        return 280
      } else if (mq.lg.matches) {
        return 400
      } else {
        return 400
      }
    })

    const curDistance = computed(() => Math.round(calcAbsoluteDistanceInKm(getX.value, getY.value) * 10) / 10)

    const radarX = computed(() => {
      const curDist = calcAbsoluteDistanceInKm(getX.value, getY.value) * 1000
      const startDist = getStartDistance.value > 50000 ? 50000 : getStartDistance.value
      const relLength = curDist / startDist > 1 ? 1 : curDist / startDist
      return -Math.sin(Math.atan2(getX.value, getY.value)) * (size.value / 2) * Math.sqrt(relLength)
    })

    const radarY = computed(() => {
      const curDist = calcAbsoluteDistanceInKm(getX.value, getY.value) * 1000
      const startDist = getStartDistance.value > 50000 ? 50000 : getStartDistance.value
      const relLength = curDist / startDist > 1 ? 1 : curDist / startDist
      return -Math.cos(Math.atan2(getX.value, getY.value)) * (size.value / 2) * Math.sqrt(relLength)
    })

    return {
      getBeta,
      size,
      radarX,
      radarY,
      mq,
      curDistance,
      tooltip: ref(true)
    }
  }
})
</script>
<style scoped>
.target {
  position: absolute;
  padding: 0;
  /*transform: translate(7rem,5rem);*/
}

.radar {
  -webkit-animation:spin 5s linear infinite;
  -moz-animation:spin 5s linear infinite;
  animation:spin 5s linear infinite;
}

@-moz-keyframes spin { 100% { -moz-transform: rotate(360deg); } }
@-webkit-keyframes spin { 100% { -webkit-transform: rotate(360deg); } }
@keyframes spin { 100% { -webkit-transform: rotate(360deg); transform:rotate(360deg); } }

</style>
