<template>
  <form
    action=""
    :class="[
      inline ? 'form-inline' : ''
    ]"
  >
    <slot :inline="inline"></slot>
  </form>
</template>

<script>
export default {
  name: 'Form',
  props: {
    /** Label inline with field */
    inline: { type: Boolean, default: false },
    /** Item display inline */
    itemInline: { type: Boolean, default: false },
  },
  data() {
    return {

    }
  },
}
</script>
<style lang="stylus">

</style>
