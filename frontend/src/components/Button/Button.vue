<template>
  <button :class="nodataCSS">{{ content }}</button>
</template>
<script>
export default {
  props: {
    content: {
      type: String,
      required: true,
      default: 'Submit',
    },
    nodataCSS: {
      type: String,
      required: true,
      default: 'btn_green',
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
.btn_green {
  @include btn($btn-green, $text-default, $btn-border);
}
.button_second {
  @include btn($btn-default, $text-green, $btn-border);
}
</style>