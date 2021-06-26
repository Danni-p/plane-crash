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
          :size="size + 'px'"
          font-size="0px"
          color="transparent">
          <div class="target" style="position: absolute">
            <q-img class="radar" :width="size+'px'" src="radar3.png">

              
                
            </q-img>
          </div>

          <div
                class="target bg-transparent q-pa-none"
                :style="`transform: rotate(${-getBeta}deg) translate(${radarX}px,${radarY}px)`"
                >
                <q-icon name="adjust" size="30px" color="white"/>
              </div>

              <div
                class="target bg-transparent q-pa-none"
                :style="`transform: rotate(${-getBeta}deg) translate(${0}px,${0}px)`">
                <div :style="`transform: rotate(${getBeta}deg)`">
                  <q-icon color="white" name="flight" size="50px" />
                </div>
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
import { calcAbsoluteDistanceInKm } from 'src/utils/CalculateUtils'

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
      getY,
      getStartDistance
    } = useCockpit()

    const size = computed(() => {
      if (mq.xs.matches) {
        return 8
      } else if (mq.sm.matches) {
        return 10
      } else if (mq.md.matches) {
        return 10
      } else {
        return 400
      }
    })

    const radarX = computed(() => {
      const curDist = calcAbsoluteDistanceInKm(getX.value, getY.value) * 1000
      const startDist = getStartDistance.value
      const relLength = curDist / startDist > 1 ? 1 : curDist / startDist
      return -Math.sin(Math.atan2(getX.value, getY.value)) * (size.value / 2) * relLength
    })

    const radarY = computed(() => {
      const curDist = calcAbsoluteDistanceInKm(getX.value, getY.value) * 1000
      const startDist = getStartDistance.value
      const relLength = curDist / startDist > 1 ? 1 : curDist / startDist
      return -Math.cos(Math.atan2(getX.value, getY.value)) * (size.value / 2) * relLength
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
