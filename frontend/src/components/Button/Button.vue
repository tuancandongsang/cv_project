<template>
  <button :class="btn_css">{{ content }}</button>
</template>
<script>
export default {
  props: {
    content: {
      type: String,
      required: true,
      default: 'Submit',
    },
    btn_css: {
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
.button_grey {
  @include btn($bg-btn-grey, $text-default, $border-grey);
}
.button_hindden{
  visibility: hidden;
}
</style>