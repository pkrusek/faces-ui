<template>
  <div class="bg-black flex flex-col h-screen">
    <nav class="bg-zinc-800 shadow-lg shadow-neutral-900 z-10">
      <div class="max-w-6xl mx-auto px-4">
        <div class="flex justify-between">
          <div class="flex space-x-7">
            <!-- Website Logo -->
            <div>
              <div
                class="flex items-center py-4 px-2">
                <img src="@/assets/images/test.jpeg" alt="Logo" class="h-8 w-8 mr-2" />
                <span class="font-semibold text-amber-600 text-lg">Faces Of Odense</span>
              </div>
            </div>
            <!-- Primary Navbar items -->
            <div class="hidden md:flex items-center space-x-1">
              <span class="py-4 px-2 text-amber-600 font-light hover:text-amber-500 transition duration-300 cursor-pointer">Project</span>
              <span class="py-4 px-2 text-amber-600 font-light hover:text-amber-500 transition duration-300 cursor-pointer">Exhibition</span>
              <span class="py-4 px-2 text-amber-600 font-light hover:text-amber-500 transition duration-300 cursor-pointer">Author</span>
              <span class="py-4 px-2 text-amber-600 font-light hover:text-amber-500 transition duration-300 cursor-pointer">Press</span>
              <span class="py-4 px-2 text-amber-600 font-light hover:text-amber-500 transition duration-300 cursor-pointer">Guestbook</span>
            </div>
          </div>
          <!-- Secondary Navbar items -->
          <div class="hidden md:flex items-center space-x-3 ">
            <a href="https://dagmarstudio.dk" target="_blank" class="py-2 px-2 font-light text-gray-400 transition duration-300">Contact</a>
          </div>
          <div class="md:hidden flex items-center">
            <button class="outline-none mobile-menu-button">
              <svg
                class="w-6 h-6 text-gray-500 hover:text-green-500 "
                x-show="!showMenu"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
    <main class="w-screen flex flex-grow bg-black z-0">
      <client-only>
<!--        <l-map :center="center" :options="{zoomControl: false}" :max-bounds="[[-90, -260],[90, 260]]" :max-bounds-viscosity="1.0" :min-zoom="3" max-zoom=18 :zoom="zoom" class="md:flex">-->
<!--          <l-tile-layer :url="url" :attribution="attribution"/>-->
<!--          <l-marker v-for="(face, index) in faces" :key="index" :lat-lng="[face.lat, face.lng]" @click="showFace(face)"/>-->
<!--          <l-control-zoom position="bottomright"/>-->
<!--        </l-map>-->
        <l-map :center="center" :options="{zoomControl: false}" :max-bounds="[[-90, -260],[90, 260]]" :max-bounds-viscosity="1.0" :min-zoom="3" max-zoom=18 :zoom="zoom" class="md:flex">
          <l-tile-layer :url="url" :attribution="attribution"/>
          <l-marker v-for="(face, index) in faces" :key="index" :lat-lng="[face.lat, face.lng]" @click="showFace(face)"/>
          <l-control-zoom position="bottomright"/>
        </l-map>
      </client-only>
    </main>
    <CommonModal :showing="showingFace" @update:showing="showingFace = $event">
      <FaceModal :face="face"/>
    </CommonModal>
  </div>
</template>

<script>

import CommonModal from "~/components/CommonModal";
import FaceModal from "~/components/FaceModal";

export default {
  name: 'IndexPage',
  components: {FaceModal, CommonModal},
  data() {
    return {
      faces: [],
      face: {},
      showingFace: false,
      zoom: 3,
      center: [27.413220, -1.219482],
      // url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      url: 'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png',
      attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a> | &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> | &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
    }
  },
  mounted() {
    this.getFaces()
  },
  methods: {
    async getFaces() {
      const ref = this.$fire.firestore.collection('faces')
      try {
        const { docs } = await ref.get()
        this.faces = docs.map(doc => {
          const { id } = doc
          const data = doc.data()
          return { id, ...data }
        })
      } catch (error) {
        throw new Error('Cannot load data from database.')
      }
    },
    showFace(face) {
      this.showingFace = true
      this.face = face
    },
  },
}
</script>

<style src="leaflet/dist/leaflet.css"/>
