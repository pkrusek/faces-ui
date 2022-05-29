<template>
  <client-only>
    <l-map :zoom=4 :center="[55.9464418,8.1277591]">
      <l-tile-layer url="url" :attribution="attribution"></l-tile-layer>
      <l-marker :lat-lng="[55.9464418,8.1277591]"></l-marker>
      <l-marker :lat-lng="[50.075539,14.437800]"></l-marker>
    </l-map>
  </client-only>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: "Map",
  // components: {
  //   LMap,
  //   LTileLayer,
  //   LMarker,
  // },
  data() {
    return {
      zoom:13,
      // center: L.latLng(47.413220, -1.219482),
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      // marker: L.latLng(47.413220, -1.219482),
    }
  },
})
</script>
