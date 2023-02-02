<template>
  <div class="header">
    <div class="header-img">
      <img src="../../../assets/image/logo/topcv-logo.webp" alt="" />
    </div>
    <div><Dropdown /></div>
    <div class="header-container">
      <ul class="header-container-nav">
        <li
          class="header-container-nav_item"
          v-for="item in navBarList"
          :key="item"
        >
          <b>{{ item }}</b>
        </li>
        <li class="header-container-nav_item">
          <b>Khui quà vui xuân</b> <span><gift-outlined /></span>
        </li>
      </ul>
    </div>
    <div class="header-login">
      <ul class="header-login_list">
        <li class="header-login_list-item">
          <router-link to="/login"
            ><Button btn_css="button_second" content="Đăng Nhập"
          /></router-link>
        </li>
        <li class="header-login_list-item">
          <router-link to="/sign-up">
            <Button btn_css="btn_green" content="Đăng Ký"
          /></router-link>
        </li>
        <li class="header-login_list-item">
          <Button btn_css="button_grey" content="Đăng tuyển & tìm hồ sơ" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import './Header.scss';
import Button from '@/components/Button/Button.vue';
import { GiftOutlined } from '@ant-design/icons-vue';
import Dropdown from './component/Dropdown/Dropdown.vue';
export default {
  components: { GiftOutlined, Button, Dropdown },
  data() {
    return {
      navBarList: [
        'Việc Làm',
        'Hồ sơ & CV',
        'Công Ty',
        'Phát triển sự ngiệp',
        'Công cụ',
      ],
    };
  },
};
</script>