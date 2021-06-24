<template>
  <div class="q-pa-sm col-md-4 col-12">
    <q-card>
      <q-img src="flügel-links.jpeg">
        <div class="absolute-bottom">
          <div class="text-h6 text-center">Linker Flügel</div>
        </div>
      </q-img>
      <q-card-actions align="center">
        <q-btn
          flat
          class="full-width"
          :to="{ name: 'LeftWing'}"
          label="Auswählen"/>
      </q-card-actions>
    </q-card>
  </div>
  <div class="q-pa-sm col-md-4 col-12">
    <q-card>
      <q-img src="cockpit.jpeg">
        <div class="absolute-bottom">
          <div class="text-h6 text-center">Cockpit</div>
        </div>
      </q-img>
      <q-card-actions align="center">
        <q-btn
          class="full-width"
          :to="{ name: 'InitCockpit'}"
          label="Auswählen"
          flat />
      </q-card-actions>
    </q-card>
  </div>
  <div class="q-pa-sm col-md-4 col-12">
    <q-card>
      <q-img src="flügel-rechts.jpeg">
        <div class="absolute-bottom">
          <div class="text-h6 text-center">Rechter Flügel</div>
        </div>
      </q-img>
      <q-card-actions align="center">
        <q-btn
          flat
          class="full-width"
          :to="{ name: 'RightWing'}"
          label="Auswählen"/>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Home',
  setup () {
    return {}
  }
})
</script>
