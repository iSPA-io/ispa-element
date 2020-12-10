<template>
<div class="form-group">
  <label v-if="label"
    :for="$attrs.for" class="block text-md font-medium text-gray-700">
    {{ label }}
  </label>
  <slot :id="uId" name="default"></slot>
  <p v-if="desc" class="mt-2 text-xs text-gray-500"
    id="email-description" v-html="desc"></p>
</div>

</template>

<script>
import UniqueComponentId from '../utils/UniqueComponentId';

export default {
  name: 'iFormItem',
  props: {
    /** Label of Input */
    label: {type: String, default: null},
    /** Description text */
    desc: {type: String, default: null},
  },
  data() {
    return {

    };
  },
  computed: {
    uId() {
      return UniqueComponentId();
    },
  },
};
</script>
<style>
.form-group {
  @apply block mb-3;
}
</style>
