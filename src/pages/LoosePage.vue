<template>
  <q-page class="row items-centers justify-evenly q-pa-md">
    <div class="full-width">
    <q-stepper
      v-model="step"
      ref="stepper"
      color="primary"
      header-nav
      active-icon="flight_land"
      animated
    >
      <q-step
        :name="1"
        title=""
        icon="flight_land"
      >
        <div class="text-h5 text-center q-pb-md">Ab ins kühle Nass!</div>
        <div class="text-subtitle1 q-pb-md">Das war eine atemberaubende Wasserlandung! Gottseidank ist niemanden was passiert.
        </div>
        <q-img src="wasserlandung.jpeg" />
      </q-step>

      <q-step
        :name="2"
        title=""
        icon="flight_land"
      >
        <div class="text-h5 text-center q-pb-md">Noch {{distance}} km bis zur Insel!</div>
        <div class="text-subtitle1 q-pb-md">Zum Schwimmen ist es noch etwas zu weit. Aber glücklicherweise
          findet ihr ein kleines Schlauchboot zwischen den Wrackteilen.
        </div>
        <q-img src="schlauchboot.jpeg" />
      </q-step>

      <q-step
        :name="3"
        title=""
        icon="flight_land"
      >
        <div class="text-h5 text-center q-pb-md">Fehl am Platz!</div>
        <div class="text-subtitle1 q-pb-sm">Auch mit größter Anstrengung sich hinein zu quetschen - es wollen einfach
          nicht mehr als 3 Leute in das Boot passen. Aber keine Angst! Es kommen schon alle auf die Insel.
        </div>
        <ol>
          <li class="text-subtitle1 q-pb-xs">
            Wählt zunächst die ersten 3 Fahrer aus, die zur Insel rudern.
          </li>
          <li class="text-subtitle1 q-pb-xs">
            Dort angekommen, rudert einer von euch wieder zurück, während die anderen in der zwischenzeit eigene Boot bauen.
          </li>
          <li class="text-subtitle1 q-pb-xs">Sobald diese fertig sind, können sie helfen die anderen aus dem Wasser zu fischen.</li>
          <li class="text-subtitle1 q-pb-md">In alle Boote passen maximal 3 Personen rein.</li>
        </ol>
        <q-img src="fragendes-gesicht.jpeg" />
      </q-step>

      <q-step
        :name="4"
        title=""
        icon="flight_land"
      >
        <div class="text-h5 text-center q-pb-md">Aber Vorsicht!</div>
        <div class="text-subtitle1 q-pb-md">Nehmt euch vor den Haien in Acht!</div>
        <q-img src="hai.jpeg" />
      </q-step>

      <template v-slot:navigation>
        <q-stepper-navigation>
          <q-btn v-if="step === 4" :to="{name: 'Home'}" color="primary" label="Beenden" />
          <q-btn v-if="step !== 4" @click="$refs.stepper.next()" color="primary" label="Weiter" />
          <q-btn v-if="step > 1" flat color="primary" @click="$refs.stepper.previous()" label="Zurück" class="q-ml-sm" />
        </q-stepper-navigation>
      </template>
    </q-stepper>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted } from 'vue'
import useCockpit from 'src/modules/cockpit/store'
import { calcAbsoluteDistanceInKm } from 'src/utils/CalculateUtils'

export default defineComponent({
  name: 'LoosePage',
  setup () {
    const { getX, getY } = useCockpit()

    const distance = computed(() => {
      return Math.round(calcAbsoluteDistanceInKm(getX.value, getY.value) * 10) / 10
    })

    onMounted(async () => {
      const audio = new Audio('sounds/water-impact.mp3')
      await audio.play()
    })

    return {
      step: ref(1),
      distance
    }
  }
})
</script>

function computed(arg0: () => void) {
  throw new Error('Function not implemented.')
}
