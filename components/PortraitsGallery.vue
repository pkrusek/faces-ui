<template>
  <div class="fixed inset-0 z-10 overflow-y-auto">
    <div class="inline-block w-full h-full overflow-hidden bg-gray-800 opacity-70">
      <div class="grid grid-cols-4 gap-4">
        <div v-for="face in faces" :key="face.id">
          <img :src="$cloudinary.image.url(face.portrait, {crop: 'scale', height: 180})">
        </div>
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
