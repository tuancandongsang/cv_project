<template>
  <div class="header">
    <div class="header-img">
      <router-link to="/"
        ><img src="../../../assets/image/logo/topcv-logo.webp" alt=""
      /></router-link>
    </div>
    <div class="drawer-icon_menu-left">
      <menu-unfold-outlined @click="showDrawer" />
      <div>
        <Drawer
          placement="left"
          :visible="visible"
          @handleClose="handleClose"
        />
      </div>
    </div>
    <div class="header-container">
      <ul class="header-container-nav">
        <!-- <li
          class="header-container-nav_item"
          v-for="item in navBarList"
          :key="item"
        >
          <b>{{ item }}</b>
        </li> -->
        <li class="header-container-nav_item">
          <b><DropdownImg content="Việc làm" /></b>
        </li>
        <li class="header-container-nav_item">
          <b><DropdownImg content="Hồ sơ & CV" /></b>
        </li>
        <li class="header-container-nav_item">
          <b><DropdownImg content="Công Ty" /></b>
        </li>
        <li class="header-container-nav_item">
          <b><DropdownImg content="Phát triển sự ngiệp" /></b>
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
    <!-- <div class="drawer-icon_menu-right">
      <menu-fold-outlined @click="showDrawerLogin" />
      <div>
        <Drawer
          placement="right"
          :visible="visible"
          @handleClose="handleClose"
        />
      </div>
    </div> -->
  </div>
</template>

<script>
import './Header.scss';
import Button from '@/components/Button/Button.vue';
import {
  GiftOutlined,
  // MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons-vue';
import DropdownImg from './component/Dropdown/Dropdown-have-img.vue';
import Drawer from '@/components/Drawer/Drawer.vue';

export default {
  components: {
    GiftOutlined,
    Button,
    DropdownImg,
    // MenuFoldOutlined,
    Drawer,
    MenuUnfoldOutlined,
  },
  data() {
    return {
      navBarList: [
        'Việc Làm',
        'Hồ sơ & CV',
        'Công Ty',
        'Phát triển sự ngiệp',
        'Công cụ',
      ],
      visible: false,
    };
  },
  methods: {
    showDrawer() {
      this.visible = true;
    },
    // showDrawerLogin() {
    //   this.visible = true;
    // },
    handleClose() {
      this.visible = false;
    },
  },
};
</script>