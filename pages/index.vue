<template>
  <div class="w-screen h-screen bg-amber-500">
    <client-only>
      <l-map :zoom="zoom" :center="center" :options="{zoomControl: false}">
        <l-tile-layer :url="url" :attribution="attribution"/>
        <l-marker v-for="(face, index) in faces" :key="index" :lat-lng="[face.lat, face.lng]"/>
        <l-control-zoom position="bottomright"/>
      </l-map>
    </client-only>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

if (process.browser) {
  require('leaflet')
}

export default Vue.extend({
  name: 'IndexPage',
  data() {
    return {
      faces: [] as any,
      zoom: 3,
      center: [27.413220, -1.219482],
      url: 'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png',
      attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
    }
  },
  created() {
    this.getEvents()
  },
  methods: {
    async getEvents() {
      await this.$supabase.from("faces").select("*")
        .then(res => {
          console.log(res)
          this.faces = res.data
      }).then(null, err => console.log('err: ', err))
    },
  },
})
</script>
