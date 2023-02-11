<template>
  <div>
    <Button
      type="primary"
      @click="showModal"
      :content="textOpenModal"
      :btn_css="btn_css"
    />
    <a-modal v-model:visible="visible" title="Basic Modal" @ok="handleOk">
      <slot></slot>
    </a-modal>
  </div>
</template>
  <script>
import Button from '../Button/Button.vue';
export default {
  components: {
    Button,
  },
  props: {
    visible1: Boolean,
    textOpenModal: String,
    btn_css: String,
  },
  data() {
    return {
      visible: this.visible1,
    };
  },
  methods: {
    showModal() {
      this.visible = true;
    },
    handleOk(e) {
      console.log(e);
      this.visible = false;
    },
  },
};
</script>