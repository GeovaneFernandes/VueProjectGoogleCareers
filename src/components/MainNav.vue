<template>
  <header class="w-full text-sm">
    <div class="fixed top-0 left-0 w-full h-16 bg-white">
      <div class="flex flex-nowrap h-full border-b border-solid border-brand-gray-1 px-8 mx-auto">
        <a :href="url" class="flex h-full items-center text-xl">{{ company }}</a>
        <nav class="ml-12 h-full">
          <ul class="flex h-full list-none">
            <li v-for="menuItem in menuItems" :key="menuItem" class="ml-9 h-full first:ml-0">
              <a href="" class="flex h-full items-center py-2.5">{{ menuItem }}</a>
            </li>
          </ul>
        </nav>
        <div class="ml-auto flex h-full items-center">
          <ProfileImage v-if="isLoggedIn" />
          <ActionButton v-else @click="loginUser" text="Sign In" />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import ActionButton from './ActionButton.vue'
import ProfileImage from './ProfileImage.vue'
export default {
  name: 'MainNav',
  components: {
    ActionButton,
    ProfileImage,
  },
  data() {
    return {
      company: 'Booble Careers',
      url: 'https://careers.google.com',
      menuItems: ['Teams', 'Locations', 'Life at Booble Career', 'How we hire', 'Students', 'Jobs'],
      isLoggedIn: false,
    }
  },
  methods: {
    loginUser() {
      this.isLoggedIn = true
    },
  },
}
</script>
