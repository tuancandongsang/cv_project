<!-- param :{
  visible: hindden modal
textOpenModal: title modal
btn_css: css button modal
} -->
<template>
  <div>
    <Button
      type="primary"
      @click="showModal"
      :content="textOpenModal"
      :btn_css="btn_css"
    />
    <a-modal
      v-model:visible="visibleComp"
      :title="textOpenModal"
      @ok="handleOk"
      :centered="true"
      :closable="false"
      :maskClosable="false"
      :width="800"
      :footer="null"
      class="modalStyle"
    >
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
    visible: Boolean,
    textOpenModal: String,
    btn_css: String,
  },
  data() {
    return {
      visibleComp: this.visible,
    };
  },
  methods: {
    showModal() {
      this.visibleComp = true;
    },
    handleOk(e) {
      console.log(e);
      this.visibleComp = false;
    },
  },
};
</script>
<style scoped>
.modalStyle {
  padding: 0;
  margin: 0;
}
</style>