<template>
  <div class="logincv">
    <div class="infor">
      <div class="infor-header">
        <a href="#"
          ><img src="../../assets/image/logo/topcv-logo.webp" alt=""
        /></a>
        <h2>Chào mừng bạn trở lại,</h2>
        <p>
          Cùng xây dựng một hồ sơ nổi bật và nhận được các cơ hội sự nghiệp lý
          tưởng
        </p>
      </div>
      <div class="infor-contain">
        <email />
        <div class="infor-contain_login">
          <Button content="Đăng nhập" nodataCSS="btn_green" />
          <p>Hoặc</p>
          <div class="infor-contain_login-social">
            <button class="facebook btn_green">
              <FacebookOutlined /> Facebook
            </button>
            <button class="google btn_green"><GoogleOutlined /> Google</button>
            <button class="linkedin btn_green">
              <AppleOutlined />Linkedin
            </button>
          </div>
        </div>
        <div class="infor-contain_forget">
          <p>
            Bạn chưa có tài khoản? <a href="#"><B>Đăng ký ngay</B></a>
          </p>
          <p>
            <a href="#"><b>Quên mật khẩu</b></a>
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
import './Login.scss';
import drawer from '../../components/drawer.vue';
import email from '../../components/email.vue';
import Button from '../../components/Button/Button.vue';
export default {
  data() {},
  components: {
    drawer,
    email,
    GoogleOutlined,
    FacebookOutlined,
    AppleOutlined,
    Button,
  },
};
</script>