<template>
  <div>
    <Modal
      :visible="visible"
      :textOpenModal="textOpenModal"
      :btn_css="btn_css"
      ref="modal"
    >
      <div class="modal-singup_tuyendung">
        <div class="modal-singup_tuyendung-header">
          <h2>Chào bạn,</h2>
          <p>
            Bạn hãy dành ra vài giây để xác nhận thông tin dưới đây nhé!
            <img src="../../assets/image/Bell-ring.webp" />
          </p>
        </div>
        <div class="modal-singup_tuyendung-select">
          <h3>
            Để tối ưu tốt nhất cho trải nghiệm của bạn với TopCV,
            <br />
            vui lòng lựa chọn nhóm phù hợp nhất với bạn.
          </h3>
          <div class="modal-singup_tuyendung-select-container">
            <div class="modal-singup_tuyendung-select-container-item">
              <img
                src="../../assets/image/img_login_signup_tuyendung/bussiness.dfe4b5e.svg"
                alt=""
              />
              <div class="modal-singup_tuyendung-select-container-item-button">
                <Button
                  @click="checkSignup_tuyendung"
                  content="Tôi là nhà tuyển dụng"
                  btn_css="btn_green"
                />
              </div>
            </div>
            <div class="modal-singup_tuyendung-select-container-item">
              <img
                src="../../assets/image/img_login_signup_tuyendung/student.031bdde.svg"
                alt=""
              />
              <div class="modal-singup_tuyendung-select-container-item-button">
                <Button
                  @click="checkSignup"
                  content="Tôi là ứng viên tìm việc"
                  btn_css="btn_green"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  </div>
</template>

<script>
import './signUp-tuyendung.scss';
import Modal from '../../components/Modal/Modal.vue';
import Button from '../../components/Button/Button.vue';
export default {
  components: { Modal, Button },
  data() {
    return {
      visible: true,
      textOpenModal: '',
      btn_css: 'button_hindden',
    };
  },
  methods: {
    checkSignup() {
      this.$router.push('/sign-up');
    },
    checkSignup_tuyendung() {
      this.visible = false;
      console.log(this.$refs.modal.handleOk());
    },
  },
};
</script>