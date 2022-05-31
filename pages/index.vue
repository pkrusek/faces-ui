<template>
  <div>
    <h1>Faces</h1>
    <div v-for="face in faces" :key="face.id">
      {{face.name}}
    </div>
  </div>
</template>

<script>
// import firebase from 'firebase/app'
// import 'firebase/firestore'

export default {
  name: 'IndexPage',
  data() {
    return {
      faces: [],
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

        console.log('Loaded faces', this.faces)
      } catch (error) {
        throw new Error('Something gone wrong!')
      }
    },
  },
}
</script>
