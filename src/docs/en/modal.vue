<template>
  <h1>Modal</h1>
  <p>Commonly used modal dialog.</p>


  <h2>Basic Usage</h2>
  <div class="demo">
    <div class="block">
      <i-button @click="modalTrigger">Open Modal</i-button>
    </div>
    <i-modal v-model="showModal">
      <div class="mt-3 text-center sm:mt-5">
        <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
          Payment successful
        </h3>
        <div class="mt-2">
          <p class="text-sm text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet labore.
          </p>
        </div>
      </div>
    </i-modal>
  </div>
</template>

<script>
import  { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Modal',
  props: {

  },
  setup(props) {
    const showModal = ref(false)
    const modalTrigger = () => {
      showModal.value = !showModal.value
    }

    return { showModal, modalTrigger }
  },
})
</script>
