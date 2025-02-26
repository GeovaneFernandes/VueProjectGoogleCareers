<template>
  <img :src="imageLink" class="w-10 h-10 rounded-3xl object-contain" alt="" />
</template>

<script>
export default {
  name: 'ProfileImage',
  data() {
    return {
      imageLink: 'https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg',
    }
  },
}
</script>
