<template>
  <div class="login">
    <div class="infor">
      <div class="infor-header">
        <router-link to="/">
          <img src="../../assets/image/logo/topcv-logo.webp" alt=""
        /></router-link>
        <h2 v-if="loginOrSingin">Chào mừng bạn trở lại,</h2>
        <h2 v-if="!loginOrSingin">Chào mừng bạn đến với TopCV</h2>
        <p>
          Cùng xây dựng một hồ sơ nổi bật và nhận được các cơ hội sự nghiệp lý
          tưởng
        </p>
      </div>
      <div class="infor-contain">
        <FromLogin :loginOrSingin="loginOrSingin" />
        <p class="infor-contain_accept" v-if="!loginOrSingin">
          Bằng việc đăng ký tài khoản, bạn đã đồng ý với
          <a href="#"><b>Điều khoản dịch vụ</b></a> và
          <a href="#"><b>Chính sách bảo mật</b></a> của chúng tôi
        </p>
        <div class="infor-contain_login">
          <Button content="Đăng nhập" nodataCSS="btn_green" />
          <p>Hoặc</p>
          <div class="infor-contain_login-social">
            <button class="facebook btn_green">
              <FacebookOutlined class="display-none_1225" /> Facebook
            </button>
            <button class="google btn_green">
              <GoogleOutlined class="display-none_1225" /> Google
            </button>
            <button class="linkedin btn_green">
              <AppleOutlined class="display-none_1225" />Linkedin
            </button>
          </div>
        </div>
        <div class="infor-contain_forget" v-if="loginOrSingin">
          <p>
            Bạn chưa có tài khoản? <a href="#"><B>Đăng ký ngay</B></a>
          </p>
          <p>
            <a href="#"><b>Quên mật khẩu</b></a>
          </p>
        </div>
        <div class="infor-contain_forget" v-if="!loginOrSingin">
          <p>
            Bạn đã có tài khoản? <a href="#"><b>Đăng nhập ngay</b></a>
          </p>
        </div>
        <div>
          <p><b>Bạn gặp khó khăn khi tạo tài khoản?</b></p>
          <p>Vui lòng gọi tới số (024) 6680 5588 (giờ hành chính).</p>
        </div>
      </div>
    </div>
    <div class="carouse">
      <drawer />
    </div>
  </div>
</template>

<script>
import {
  GoogleOutlined,
  FacebookOutlined,
  AppleOutlined,
} from '@ant-design/icons-vue';
import './login.scss';
import drawer from '@/components/Carousel/carousel.vue';
import FromLogin from './component/FromLogin.vue';
import Button from '@/components/Button/Button.vue';
export default {
  components: {
    drawer,
    FromLogin,
    GoogleOutlined,
    FacebookOutlined,
    AppleOutlined,
    Button,
  },
  data() {
    return {
      loginOrSingin: true,
    };
  },
  created() {
    if (this.$route.name == 'login') {
      this.loginOrSingin = true;
    }
    if (this.$route.name == 'sign-up') {
      this.loginOrSingin = false;
    }
  },
};
</script>