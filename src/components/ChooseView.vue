<template>
<div class="q-pa-xl col-lg-6 col-12">
  <div :class="mq.xs.matches ? 'text-h5' : 'text-h3'" class="text-white text-h3 text-center q-pb-lg">{{heading}}</div>
  <q-carousel
      swipeable
      animated
      v-model="slide"
      navigation
      arrows
      infinite
      height="50vh"
    >
      <q-carousel-slide @click.native="gotoLeftWing()" class="row items-center" :name="1" img-src="fluegelLinks.jpeg">
      </q-carousel-slide>
      <q-carousel-slide @click.native="gotoCockpit()" class="row items-center" :name="2" img-src="cockpit.jpeg">
      </q-carousel-slide>
      <q-carousel-slide @click.native="gotoRightWing()" class="row items-center" :name="3" img-src="fluegelRechts.jpeg">
      </q-carousel-slide>
    </q-carousel>
</div>
  <!-- <div class="q-pa-sm col-md-4 col-12">
    
    <q-card>
      <q-img src="fluegelLinks.jpeg">
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
      <q-img src="fluegelRechts.jpeg">
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
  </div> -->
</template>

<script lang="ts">
import useBreakpoints from 'src/utils/useBreakpoints'
import { defineComponent, ref, computed } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'Home',
  setup () {
    const router = useRouter()

    const mq = useBreakpoints({
      xs: [0, 500]
    })
    async function gotoLeftWing () {
      await router.push({ name: 'LeftWing' })
    }

    async function gotoRightWing () {
      await router.push({ name: 'RightWing' })
    }

    async function gotoCockpit () {
      await router.push({ name: 'InitCockpit' })
    }

    const slide = ref(1)

    const heading = computed(() => {
      if (slide.value === 1) {
        return 'Linker Flügel'
      } else if (slide.value === 2) {
        return 'Cockpit'
      } else {
        return 'Rechter Flügel'
      }
    })
    return {
      slide,
      gotoLeftWing,
      gotoRightWing,
      gotoCockpit,
      heading,
      mq
    }
  }
})
</script>
