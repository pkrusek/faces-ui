<template>
  <h1 class="text-black font-medium text-3xl">{{face.name}}</h1>
</template>

<script>
export default {
  name: 'FaceModal',
  props: {
    face: {
      type: Object,
      default: () => {},
    },
  },
}
</script>
