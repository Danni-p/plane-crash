<template>
  <div class="container q-pa-md myCard">
    <!-- <div class="q-pb-xl">
      <q-btn
        flat
        text-color="white"
        @click="handleIncrease()"
        class="full-width bg-myDarkBrown full-height">
        <q-icon name="arrow_drop_up" style="font-size: 4rem;" />
      </q-btn>
    </div> -->
    <div class="row items-center">
      <div class=" col-12 row">
        <div class="col-6 text-center">
          <div class="text-h6 text-white">aktiv</div>
        </div>
        <div class="col text-center">
          <div class="text-h6 text-white">max</div>
        </div>
      </div>
      <div class=" col-12 q-py-lg">
        <q-btn-toggle
          unelevateds
          spread
          size="lg"
          class="q-my-xl"
          v-model="toggle"
          no-caps
          toggle-color="myOrange"
          color="myDarkGrey"
          :options="[
            {label: activeNr, value: 'active', style: 'font-size:24pt'},
            {label: maxNr, value: 'max', style: 'font-size:24pt'}
          ]"
        />
      </div>
    </div>
    <div class="row">
      <div class="col-6 text-center q-pr-sm">
        <q-btn
          class="full-width"
          size="50px"
          color="mySecondary"
          @click="handleDecrease()"
          icon="remove" />
      </div>
      <div class="col-6 text-center q-pl-sm">
        <q-btn
          class="full-width"
          @click="handleIncrease()"
          size="50px"
          color="mySecondary"
          icon="add" />
      </div>
    </div>
    <!-- <div class="q-pt-xl">
      <q-btn
        flat
        text-color="white"
        @click="handleDecrease()"
        class="full-width full-height bg-myDarkBrown">
        <q-icon name="arrow_drop_down" style="font-size: 4rem;" />
      </q-btn>
    </div> -->
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue'
import { WingSide } from 'src/modules/wing/types/primitive-types'
import useWing from 'src/modules/wing/store'

export default defineComponent({
  name: 'Wing',
  props: {
    side: {
      type: String as PropType<WingSide>,
      required: true
    }
  },
  setup (props) {
    const toggle = ref('active')
    const {
      getMaxLeftWingPassengers,
      getMaxRightWingPassengers,
      getActiveLeftWingPassengers,
      getActiveRightWingPassengers,
      commitSetActiveLeftWingPassengers,
      commitSetActiveRightWingPassengers,
      commitSetMaxLeftWingPassengers,
      commitSetMaxRightWingPassengers,
      updatePassengers
    } = useWing()
    const activeNr = props.side === 'left' ? getActiveLeftWingPassengers : getActiveRightWingPassengers
    const maxNr = props.side === 'left' ? getMaxLeftWingPassengers : getMaxRightWingPassengers

    async function handleIncrease () {
      if (toggle.value === 'active') {
        await handleIncreaseActive()
      } else {
        await handleIncreaseMax()
      }
    }

    async function handleIncreaseActive () {
      if (activeNr.value >= maxNr.value) {
        return
      }
      if (props.side === 'left') {
        commitSetActiveLeftWingPassengers(activeNr.value + 1)
      } else {
        commitSetActiveRightWingPassengers(activeNr.value + 1)
      }
      await updatePassengers(props.side, activeNr.value, maxNr.value)
    }

    async function handleIncreaseMax () {
      if (maxNr.value >= 100) {
        return
      }
      if (props.side === 'left') {
        commitSetMaxLeftWingPassengers(maxNr.value + 1)
      } else {
        commitSetMaxRightWingPassengers(maxNr.value + 1)
      }
      await updatePassengers(props.side, activeNr.value, maxNr.value)
    }

    async function handleDecrease () {
      if (toggle.value === 'active') {
        await handleDecreaseActive()
      } else {
        await handleDecreaseMax()
      }
    }

    async function handleDecreaseActive () {
      if (activeNr.value <= 0) {
        return
      }
      if (props.side === 'left') {
        commitSetActiveLeftWingPassengers(activeNr.value - 1)
      } else {
        commitSetActiveRightWingPassengers(activeNr.value - 1)
      }
      await updatePassengers(props.side, activeNr.value, maxNr.value)
    }

    async function handleDecreaseMax () {
      if (maxNr.value <= activeNr.value) {
        return
      }
      if (props.side === 'left') {
        commitSetMaxLeftWingPassengers(maxNr.value - 1)
      } else {
        commitSetMaxRightWingPassengers(maxNr.value - 1)
      }
      /* commitSetSthChanged(true) */
      await updatePassengers(props.side, activeNr.value, maxNr.value)
    }

    return {
      toggle,
      activeNr,
      maxNr,
      handleIncrease,
      handleDecrease
    }
  }
})
</script>
<style scoped>

.container {
  position: absolute;
  width: 100%;
  max-width: 1024px;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr;
}
</style>
