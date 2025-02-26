<template>
  <button
    class="rounded border-0 px-5 py-3 font-medium text-white bg-brand-blue-1 hover:shadow-blue-1"
    @:click="handleClick()"
  >
    Sign In
  </button>
</template>

<script>
export default {
  name: 'ActionButton',
  methods: {
    handleClick() {
      alert('Sign in clicked')
    },
  },
}
</script>
