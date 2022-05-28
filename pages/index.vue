<template>
  <div class="w-screen h-screen bg-amber-500">
    <client-only>
      <l-map :zoom=3 :center="[55.9464418,8.1277591]">
        <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>
        <l-marker :lat-lng="[55.9464418,8.1277591]"></l-marker>
      </l-map>
    </client-only>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
})
</script>
