<template>
<div class="container p-4">
  <i-button>Default</i-button>
  <i-button type="primary" plain>Primary</i-button>
  <i-button type="success" round>Success</i-button>
  <i-button type="secondary">Secondary</i-button>
  <i-button type="warning">Warning</i-button>
  <i-button type="danger">Danger</i-button>
  <i-button type="info">Info</i-button>
</div>
</template>

<script>
import iButton from './components/button/button.vue';

export default {
  name: 'App',
  components: {
    iButton,
  },
};
</script>
<style>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
