<template>
  <div>
    <h1 class="text-black font-medium text-3xl">{{face.name}}</h1>
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
