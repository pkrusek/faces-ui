<template>
  <div class="w-auto px-10 py-28 content-start bg-gray-800">
<!--    <div class="grid gap-10 lg:grid-cols-4 md:grid-cols-2">-->
      <div class="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
      <div v-for="face in faces" :key="face.id" class="mx-auto">
        <img :src="$cloudinary.image.url(face.portrait_jpg, {crop: 'scale', height: 300})">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PortraitsGallery',
  props: {
    faces: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
