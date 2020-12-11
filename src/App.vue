<template>
  <div class="container p-4 mx-auto max-w-3xl">
    <i-button type="danger" icon="fa fa-code">Danger</i-button>
    <i-form>
      <i-form-item label="Test Label">
        <i-input v-model="value">
          <template #prepend>https://</template>
        </i-input>
      </i-form-item>
    </i-form>
  </div>
</template>

<script>
import { onMounted } from 'vue'

export default {
  name: 'App',
  setup() {
    onMounted(() => {
      const fas = document.createElement('script')
      fas.setAttribute('src', 'https://ispa.io/docs/assets/fas.min.js')
      const solid = document.createElement('script')
      solid.setAttribute('src', 'https://ispa.io/docs/assets/solid.min.js')
      document.head.appendChild(fas).appendChild(solid)
    })
  },
  data() {
    return {
      value: 'model value lol',
    }
  },
}
</script>
<style>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
