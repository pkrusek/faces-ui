<template>
  <div class="w-screen h-screen bg-amber-500">
<!--    <Map/>-->
    <client-only>
      <l-map :zoom="zoom" :center="center" :options="{zoomControl: false}">
        <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
        <l-marker :lat-lng="[55.9464418,8.1277591]"></l-marker>
        <l-marker :lat-lng="[50.075539,14.437800]"></l-marker>
        <l-control-zoom position="bottomright"  ></l-control-zoom>
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
      zoom: 3,
      center: [27.413220, -1.219482],
      url: 'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png',
      attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
    }
  },
})
</script>
