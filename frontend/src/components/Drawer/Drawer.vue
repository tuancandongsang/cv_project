<template>
  <div>
    <a-drawer
      :width="width"
      title="Basic Drawer"
      :placement="placement"
      :visible="visible"
      @close="$emit('handleClose', this.visible)"
    >
      <slot></slot>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </a-drawer>
  </div>
</template>
  <script>
export default {
  props: {
    placement: {
      type: String,
      default: 'left',
    },
    visible: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      width: `60%`,
    };
  },
};
</script>