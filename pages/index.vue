<template>
  <div>
    <h1 class="text-3xl font-bold underline">
      Tailwind test
    </h1>
    <div v-for="face in faces" :key="face.id">
      {{face.name}}
    </div>
  </div>
</template>

<script>

export default {
  name: 'IndexPage',
  data() {
    return {
      faces: [],
      zoom: 2,
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
