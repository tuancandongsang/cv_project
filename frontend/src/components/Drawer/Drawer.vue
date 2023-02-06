<template>
  <div>
    <a-drawer
      :width="width"
      title="Basic Drawer"
      :placement="placement"
      :visible="visible"
      @close="$emit('handleClose', this.visible)"
    >
      <template #extra>
        <a-button style="margin-right: 8px" @click="$emit('handleClose', this.visible)">Cancel</a-button>
        <a-button type="primary" @click="onClose">Submit</a-button>
      </template>
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