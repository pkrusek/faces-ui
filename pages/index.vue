<template>
  <div class="w-screen h-screen bg-amber-500">
<!--    <Map/>-->
    <client-only>
      <l-map :zoom="zoom" :center="center">
        <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
        <l-marker :lat-lng="[55.9464418,8.1277591]"></l-marker>
        <l-marker :lat-lng="[50.075539,14.437800]"></l-marker>
      </l-map>
    </client-only>
  </div>
</template>

<script lang="ts">
// import {LMap, LMarker, LTileLayer} from 'vue2-leaflet'
import Vue from 'vue'

if (process.browser) {
  require('leaflet')
}

// const isBrowser = typeof window !== 'undefined'
// if (isBrowser) {
//   Vue.component('LMap', L.Map)
//   Vue.component('LTileLayer', L.TileLayer)
//   Vue.component('LMarker', L.Marker)
// }

export default Vue.extend({
  name: 'IndexPage',
  // components: {
  //   'l-map': LMap,
  //   'l-tile-layer': LTileLayer,
  //   'l-marker': LMarker
  // },
  data() {
    return {
      zoom: 3,
      center: [27.413220, -1.219482],
      // url: 'https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png',
      url: 'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png',
      // url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
     // attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      // marker: L.latLng(47.413220, -1.219482),
    }
  },
})
</script>
