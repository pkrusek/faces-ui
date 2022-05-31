<template>
  <div class="bg-black flex flex-col h-screen">
    <nav class="bg-zinc-800 shadow-lg shadow-neutral-900 z-10">
      <div class="max-w-6xl mx-auto px-4">
        <div class="flex justify-between">
          <div class="flex space-x-7">
            <!-- Website Logo -->
            <div>
              <a
                href="#"
                class="flex items-center py-4 px-2">
                <img src="logo.png" alt="Logo" class="h-8 w-8 mr-2" />
                <span class="font-semibold text-amber-600 text-lg">Faces Of Odense</span>
              </a>
            </div>
            <!-- Primary Navbar items -->
            <div class="hidden md:flex items-center space-x-1">

              <!--              <script type="text/javascript">-->
              <!--                <![CDATA[-->

              <!--              {[-->
              <!--                ['Home', '/dashboard'],-->
              <!--                ['Team', '/team'],-->
              <!--                ['Projects', '/projects'],-->
              <!--                ['Reports', '/reports'],-->
              <!--                ].map(([title, url]) => (-->
              <!--                  console.log(url)-->
              <!--                  <a href={url} class="py-4 px-2 text-amber-600 font-light hover:text-amber-500 transition duration-300">{title}</a>-->
              <!--              ))}-->
              <!--                ]]>-->
              <!--              </script>-->
              <a href="" class="py-4 px-2 text-amber-600 font-light hover:text-amber-500 transition duration-300">Project</a>
              <a href="" class="py-4 px-2 text-amber-600 font-light hover:text-amber-500 transition duration-300">Exhibition</a>
              <a href="" class="py-4 px-2 text-amber-600 font-light hover:text-amber-500 transition duration-300">Author</a>
              <a href="" class="py-4 px-2 text-amber-600 font-light hover:text-amber-500 transition duration-300">Press</a>
              <a href="" class="py-4 px-2 text-amber-600 font-light hover:text-amber-500 transition duration-300">Guestbook</a>
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
        <l-map :center="center" :options="{zoomControl: false}" :max-bounds="[[-90, -260],[90, 260]]" :max-bounds-viscosity="1.0" :min-zoom="3" max-zoom=18 :zoom="zoom">
          <l-tile-layer :url="url" :attribution="attribution"/>
          <l-marker v-for="(face, index) in faces" :key="index" :lat-lng="[face.lat, face.lng]"/>
          <l-control-zoom position="bottomright"/>
        </l-map>
      </client-only>
    </main>
  </div>
</template>

<script>

export default {
  name: 'IndexPage',
  data() {
    return {
      faces: [],
      zoom: 3,
      center: [27.413220, -1.219482],
      url: 'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png',
      attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a> | &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> | &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
    }
  },
  created() {
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
  },
}
</script>
