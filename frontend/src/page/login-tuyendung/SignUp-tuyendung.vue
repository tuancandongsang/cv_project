<template>
  <div>

    <div class="signup_tuyendung">
      <div class="signup_tuyendung-header">
        <div class="signup_tuyendung-header-navbar">
          <div>
            <ArrowLeftOutlined /> Quay lại
          </div>
          <div>
            <img src="../../assets/image/logo-tuyendung/logo-tuyendung.webp" alt="" />
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
          <div>
            <CaretUpOutlined />
          </div>
          <div v-if="false">
            <CaretDownOutlined />
          </div>
        </div>
        <div class="signup_tuyendung-body-form">
          <form action="" class="signup_tuyendung-body-form" @submit.prevent="myMethod">
            <div class="signup_tuyendung-body-form_acc">
              <h1>TÀI KHOẢN</h1>
              <div class="signup_tuyendung-body-form_acc-item">
                <p>Email đăng nhập:</p>
                <div class="signup_tuyendung-body-form_acc-item_right">
                  <InputBase @value-input = "getValueFromEmit" placeholder="Email" type="text"  />
                  <p v-if="false">Email đăng nhập không được để trống</p>
                </div>
              </div>
              <div class="signup_tuyendung-body-form_acc-item">
                <p>Mật khẩu:</p>
                <div class="signup_tuyendung-body-form_acc-item_right">
                  <InputBase placeholder="Mật khẩu từ 6 đến 25 ký tự" type="text"  @value-input = "getValueFromEmit" />
                  <p v-if="false">Mật khẩu không được để trống</p>
                </div>
              </div>
              <div class="signup_tuyendung-body-form_acc-item">
                <p>Nhập lại mật khẩu:</p>
                <div class="signup_tuyendung-body-form_acc-item_right">
                  <InputBase placeholder="Nhập lại mật khẩu" type="text"   @value-input = "getValueFromEmit"/>
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
} from '@ant-design/icons-vue';
import InputBase from '../../components/input/InputBase.vue';
import './signUp-tuyendung.scss';
import Button from '../../components/Button/Button.vue';
export default {
  components: {
    InputBase,
    Button,
    ArrowLeftOutlined,
    CaretDownOutlined,
    CaretUpOutlined,
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
    Submit() {
    
      console.log(this.form);
    },
    getValueFromEmit(value){
      this.form.name = value


      console.log(value,'value emit')
    }
  },
};
</script>
<style scoped></style>