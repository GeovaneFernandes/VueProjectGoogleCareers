<template>
  <button :class="{ secondary: true }" @click="handleClick()">
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

<style scoped>
button {
  border-radius: 0.375rem;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  font-weight: 500;
}

.primary {
  border: 0;
  background-color: var(--color-brand-blue-1);
  color: white;
  transition: box-shadow 0.2s;
}

.primary:hover {
  box-shadow: var(--shadow-blue);
}

.secondary {
  border: 0;
  background-color: var(--color-brand-green-1);
  color: white;
  transition: box-shadow 0.2s;
}
</style>
