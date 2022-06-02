<template>
  <div>
    <h1 class="text-gray-800 font-bold text-2xl pt-4">{{face.name}}</h1>
    <h2 class="text-gray-800 font-bold text-1xl pt-1">{{face.city}} / {{face.country}}</h2>
    <img :src="$cloudinary.image.url(picture, {})">
  </div>
</template>

<script>
export default {
  name: 'FaceModal',
  props: {
    face: {
      type: Object,
      default: () => {},
    },
    picture: {
      type: String,
      default: '',
    }
  },
}
</script>
