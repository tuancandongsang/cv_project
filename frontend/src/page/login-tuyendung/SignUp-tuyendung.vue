<template>
  <div>
    <Modal
      :visible1="visible"
      :textOpenModal="textOpenModal"
      :btn_css="btn_css"
    >
      aloalo</Modal
    >
    <InputBase />
  </div>
</template>

<script>
import InputBase from '../../components/input/InputBase.vue';
import Modal from '../../components/Modal/Modal.vue';
export default {
  components: { InputBase, Modal },
  data() {
    return {
      visible: true,
      textOpenModal: '',
      btn_css: 'button_hindden',
    };
  },
};
</script>

<style>
</style>