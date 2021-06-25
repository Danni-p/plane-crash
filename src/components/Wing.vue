<template>
  <div class="col-md-6 col-12 q-pa-sm">
    <q-card class="my-card bg-secondary text-white">
      <q-card-section>
        <q-btn
          flat
          @click="handleIncrease()"
          class="full-width">
          <q-icon name="arrow_drop_up" style="font-size: 4rem;" />
        </q-btn>
      </q-card-section>
      <q-separator dark />
      <q-card-section>
        <div class="row">
          <div class="col-6 text-center">
          <div class="text-subtitle1">aktiv</div>
          </div>
          <div class="col text-center">
            <div class="text-subtitle1">max</div>
            </div>
          </div>
          <div>
            <q-btn-toggle
              unelevateds
              spread
              size="lg"
              class="q-my-lg"
              v-model="toggle"
              no-caps
              toggle-color="primary"
              color="secondary"
              :options="[
                {label: activeNr, value: 'active', style: 'font-size:24pt'},
                {label: maxNr, value: 'max', style: 'font-size:24pt'}
              ]"
            />
          </div>
      </q-card-section>
      <q-separator dark />
      <q-card-section>
        <q-btn
          flat
          @click="handleDecrease()"
          class="full-width">
          <q-icon name="arrow_drop_down" style="font-size: 4rem;" />
        </q-btn>
      </q-card-section>
    </q-card>
    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar :class="getSthChanged ? 'bg-negative' : 'bg-positive'">
        <q-toolbar-title class="text-center">
          <q-btn
            :disable="!getSthChanged"
            icon="update"
            label="Update"
            class="full-width"
            @click="handleUpdate()"
            flat />
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
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
      commitSetSthChanged,
      getSthChanged,
      updatePassengers
    } = useWing()
    const activeNr = props.side === 'left' ? getActiveLeftWingPassengers : getActiveRightWingPassengers
    const maxNr = props.side === 'left' ? getMaxLeftWingPassengers : getMaxRightWingPassengers

    function handleIncrease () {
      if (toggle.value === 'active') {
        handleIncreaseActive()
      } else {
        handleIncreaseMax()
      }
    }

    function handleIncreaseActive () {
      if (activeNr.value >= maxNr.value) {
        return
      }
      if (props.side === 'left') {
        commitSetActiveLeftWingPassengers(activeNr.value + 1)
      } else {
        commitSetActiveRightWingPassengers(activeNr.value + 1)
      }
      commitSetSthChanged(true)
    }

    function handleIncreaseMax () {
      if (maxNr.value >= 100) {
        return
      }
      if (props.side === 'left') {
        commitSetMaxLeftWingPassengers(maxNr.value + 1)
      } else {
        commitSetMaxRightWingPassengers(maxNr.value + 1)
      }
      commitSetSthChanged(true)
    }

    function handleDecrease () {
      if (toggle.value === 'active') {
        handleDecreaseActive()
      } else {
        handleDecreaseMax()
      }
    }

    function handleDecreaseActive () {
      if (activeNr.value <= 0) {
        return
      }
      if (props.side === 'left') {
        commitSetActiveLeftWingPassengers(activeNr.value - 1)
      } else {
        commitSetActiveRightWingPassengers(activeNr.value - 1)
      }
      commitSetSthChanged(true)
    }

    function handleDecreaseMax () {
      if (maxNr.value <= activeNr.value) {
        return
      }
      if (props.side === 'left') {
        commitSetMaxLeftWingPassengers(maxNr.value - 1)
      } else {
        commitSetMaxRightWingPassengers(maxNr.value - 1)
      }
      commitSetSthChanged(true)
    }

    async function handleUpdate () {
      await updatePassengers(props.side, activeNr.value, maxNr.value).then(() => commitSetSthChanged(false))
    }

    return {
      toggle,
      activeNr,
      maxNr,
      handleIncrease,
      handleDecrease,
      getSthChanged,
      handleUpdate
    }
  }
})
</script>
