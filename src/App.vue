<template>
  <router-view />
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { EventManager } from 'src/models/evt/eventManager'
import { AppInitializedEvent } from './app/evt/events/AppInitializedEvent'
import 'src/app/init/subscribe'

export default defineComponent({
  name: 'App',
  setup () {
    EventManager.dispatchEvent(new AppInitializedEvent())
    return {}
  }
})
</script>

<style>
body {
  background-color: #434446;
}
.text-myOrange {
  color: #c67041;/*231f1e;*/
}
.bg-myOrange {
  background: #c67041;/*#231f1e;*/
}

.text-mySecondary {
  color: #16a3be;/*231f1e;*/
}
.bg-mySecondary {
  background: #16a3be;/*#231f1e;*/
}


.text-myDarkBrown {
  color: 231f1e;
}
.bg-myDarkBrown {
  background: #231f1e;
}

.text-myDarkGrey {
  color: #434446;
}
.bg-myDarkGrey {
  background: #434446;
}
</style>
