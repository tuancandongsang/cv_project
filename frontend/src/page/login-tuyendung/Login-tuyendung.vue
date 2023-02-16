<template>
  <div class="login-tuyendung">
    <div class="infor">
      <div class="infor-header">
        <router-link to="/">
          <img
            src="../../assets/image/logo-tuyendung/logo-tuyendung.webp"
            alt=""
        /></router-link>
        <h2>Chào mừng bạn đã quay trở lại,</h2>
        <p>
          Cùng tạo dựng lợi thế cho doanh nghiệp bằng trải nghiệm công nghệ
          tuyển dụng ứng dụng sâu AI & Hiring Funnel
        </p>
      </div>
      <div class="infor-contain">
        <FromLogin />
        <div class="infor-contain_login">
          <Button content="Đăng nhập" nodataCSS="btn_green" />
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
      <carousel />
    </div>
  </div>
</template>

<script>
import './login-tuyendung.scss';
import carousel from '@/components/Carousel/carousel-tuyendung.vue';
import FromLogin from './component/FromLogin.vue';
import Button from '@/components/Button/Button.vue';
export default {
  components: {
    carousel,
    FromLogin,
    Button,
  },
};
</script>