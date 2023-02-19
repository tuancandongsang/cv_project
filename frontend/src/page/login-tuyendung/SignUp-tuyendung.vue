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
    <div class="signup_tuyendung">
      <div class="signup_tuyendung-header">
        <div class="signup_tuyendung-header-navbar">
          <div><ArrowLeftOutlined /> Quay lại</div>
          <div>
            <img
              src="../../assets/image/logo-tuyendung/logo-tuyendung.webp"
              alt=""
            />
          </div>
        </div>
        <div class="signup_tuyendung-header-body">
          <h1>Đăng ký tài khoản Nhà tuyển dụng</h1>
          <p>
            Cùng tạo dựng lợi thế cho doanh nghiệp bằng trải nghiệm
            <br />
            công nghệ tuyển dụng ứng dụng sâu AI & Hiring Funnel
          </p>
        </div>
      </div>
      <div class="signup_tuyendung-body">
        <div class="signup_tuyendung-body_header">
          <div>Quy định</div>
          <div><CaretUpOutlined /></div>
          <div v-if="false"><CaretDownOutlined /></div>
        </div>
        <div v-if="false" class="signup_tuyendung-body_header-tittle">
          Để đảm bảo chất lượng dịch vụ, TopCV
          <b>không cho phép một người dùng tạo nhiều tài khoản khác nhau.</b>
          <br />
          Nếu phát hiện vi phạm, TopCV sẽ ngừng cung cấp dịch vụ tới tất cả các
          tài khoản trùng lặp hoặc chặn toàn bộ truy cập tới hệ thống website
          của TopCV.
          <br />
          Đối với trường hợp khách hàng đã sử dụng hết 3 tin tuyển dụng miễn
          phí, TopCV hỗ trợ kích hoạt đăng tin tuyển dụng không giới hạn sau khi
          quý doanh nghiệp cung cấp thông tin giấy phép kinh doanh.
          <br />
          <br />
          Mọi thắc mắc vui lòng liên hệ Hotline CSKH:
          <p>
            <span><PhoneOutlined class="alo" /></span> &nbsp; (024) 71079799
          </p>
          <p>Đã có tài khoản? &nbsp; <b>Đăng nhập ngay</b></p>
        </div>
        <div class="signup_tuyendung-body-form">
          <form
            action=""
            class="signup_tuyendung-body-form"
            @submit.prevent="myMethod"
          >
            <div class="signup_tuyendung-body-form_acc">
              <h1>TÀI KHOẢN</h1>
              <div class="signup_tuyendung-body-form_acc-item">
                <p>Email đăng nhập:</p>
                <div class="signup_tuyendung-body-form_acc-item_right">
                  <InputBase
                    placeholder="Email"
                    type="text"
                    v-model="form.email"
                  />
                  <p v-if="false">Email đăng nhập không được để trống</p>
                  <p>
                    *TopCV khuyến nghị đăng ký bằng email công ty (theo tên miền
                    website công ty) để được hỗ trợ duyệt tin nhanh & đăng tin
                    không giới hạn.
                  </p>
                </div>
              </div>
              <div class="signup_tuyendung-body-form_acc-item">
                <p>Mật khẩu:</p>
                <div class="signup_tuyendung-body-form_acc-item_right">
                  <InputBase
                    placeholder="Mật khẩu từ 6 đến 25 ký tự"
                    v-model="form.pass"
                  />
                  <p v-if="false">Mật khẩu không được để trống</p>
                </div>
              </div>
              <div class="signup_tuyendung-body-form_acc-item">
                <p>Nhập lại mật khẩu:</p>
                <div class="signup_tuyendung-body-form_acc-item_right">
                  <InputBase
                    placeholder="Nhập lại mật khẩu"
                    v-model="form.repass"
                  />
                  <p v-if="false">Nhập lại mật khẩu không được để trống</p>
                </div>
              </div>
            </div>
            <Button content="Hoàn tất" btn_css="btn_green" @click="Submit" />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  ArrowLeftOutlined,
  CaretUpOutlined,
  CaretDownOutlined,
  PhoneOutlined,
} from '@ant-design/icons-vue';
import InputBase from '../../components/input/InputBase.vue';
import './signUp-tuyendung.scss';
import Modal from '../../components/Modal/Modal.vue';
import Button from '../../components/Button/Button.vue';
export default {
  components: {
    InputBase,
    Modal,
    Button,
    ArrowLeftOutlined,
    CaretDownOutlined,
    CaretUpOutlined,
    PhoneOutlined,
  },
  data() {
    return {
      visible: true,
      textOpenModal: '',
      btn_css: 'button_none',
      form: {
        name: '',
        pass: '',
        repass: '',
      },
    };
  },
  methods: {
    checkSignup() {
      this.$router.push('/sign-up');
    },
    checkSignup_tuyendung() {
      this.visible = false;
      // console.log(this.$refs.modal.handleOk());
      // this.$router.push('/login-tuyendung');
      this.$refs.modal.handleOk();
    },
    Submit() {
      console.log(this.form);
    },
  },
};
</script>
<style scoped>
</style>