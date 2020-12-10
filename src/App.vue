<template>
<div class="container p-4 mx-auto max-w-3xl">
  <i-form inline>
    <i-form-item label="Test" for="test"
      desc="Text <b>Bold</b>"
      >
      <i-input v-model="value" id="test"
        placeholder="Placeholder test" validate="is-success"
        icon="fa fa-envelope">
        <template #prepend>Http://</template>
      </i-input>
    </i-form-item>
    <i-form-item for="best-ui" label="Test 2">
      <i-input
        id="best-ui"
        placeholder="Placeholder test 2"
        validate="is-error"
        icon="fa fa-envelope"
        >
        <template #append>Http://</template>
      </i-input>
    </i-form-item>
  </i-form>
  <i-button type="danger">Danger Zone</i-button>
</div>
</template>

<script lang='ts'>
export default {
  name: 'App',
  data() {
    return {
      value: 'model value',
    };
  },

  mounted() {
    const fas = document.createElement('script');
    fas.setAttribute('src', 'https://ispa.io/docs/assets/fas.min.js');
    document.head.appendChild(fas);
    const solid = document.createElement('script');
    solid.setAttribute('src', 'https://ispa.io/docs/assets/solid.min.js');
    document.head.appendChild(solid);
  },
};
</script>
<style>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
