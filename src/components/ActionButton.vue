<template>
  <button
    class="rounded border-0 px-5 py-3 font-medium text-white bg-brand-blue-1 hover:shadow-blue"
    @:click="handleClick()"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'ActionButton',
  methods: {
    handleClick() {
      console.log('Sign in clicked')
    },
  },
  props: ['text'],
}
</script>
