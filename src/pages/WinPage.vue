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
        <div class="text-h5 text-center q-pb-md">Herzlichen Glückwunsch!</div>
        <div class="text-subtitle1 q-pb-md">Das war eine hervorragende Landung! Ihr habt die Nerven bewahrt, habt alle super zusammen
          gearbeitet und es schließlich geschafft, ohne Flugerfahrung das Flugzeug auf einer einsamen Insel zu landen.
        </div>
        <q-img src="notlandung.jpeg" />
      </q-step>

      <q-step
        :name="2"
        title=""
        icon="flight_land"
      >
        <div class="text-subtitle1 q-pb-md">Das Flugzeug ist nun zwar schrottreif, aber wenigstens ist niemand zu Schaden gekommen.
        </div>
        <q-img src="schrott.webp" />
      </q-step>

      <q-step
        :name="3"
        title=""
        icon="flight_land"
      >
        <div class="text-subtitle1 q-pb-md">Atmet erst einmal tief durch! Die Pause habt ihr euch verdient!
        </div>
        <q-img src="relaxIsland.jpeg" />
      </q-step>

      <template v-slot:navigation>
        <q-stepper-navigation>
          <q-btn v-if="step === 3" :to="{name: 'Home'}" color="primary" label="Beenden" />
          <q-btn v-if="step !== 3" @click="$refs.stepper.next()" color="primary" label="Weiter" />
          <q-btn v-if="step > 1" flat color="primary" @click="$refs.stepper.previous()" label="Zurück" class="q-ml-sm" />
        </q-stepper-navigation>
      </template>
    </q-stepper>
    </div>
    <!-- <q-card dark bordered class="full-width bg-primary q-pa-md">
      <q-card-section>
        <div class="text-h5 text-center q-pb-md">Herzlichen Glückwunsch!</div>
        <div class="text-subtitle1">Das war eine hervorragende Landung! Ihr habt die Nerven bewahrt, habt alle super zusammen
          gearbeitet und es schließlich geschafft, ohne Flugerfahrung das Flugzeug auf einer einsamen Insel zu landen.
        </div>

        <div class="text-subtitle1">Das Flugzeug ist nun zwar schrottreif, aber wenigstens ist niemand zu Schaden gekommen. Atmet erst einmal tief durch!
          Die Pause habt ihr euch verdient!
        </div>
      </q-card-section>
      <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
        <div class="absolute-bottom text-subtitle2 text-center">
          Title
        </div>
      </q-img>
    </q-card> -->
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'

export default defineComponent({
  name: 'WinPage',
  setup () {

    onMounted(async () => {
      const audio = new Audio('sounds/applaus.mp3')
      await audio.play()
    })

    return {
      step: ref(1)
    }
  }
})
</script>
