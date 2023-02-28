<template>
  <div class="container-header">
    <div class="header">
      <div class="header-img">
        <router-link to="/"
          ><img src="../../../assets/image/logo/topcv-logo.webp" alt=""
        /></router-link>
      </div>
      <div class="header-container">
        <div class="drawer-icon_menu-left">
          <menu-unfold-outlined @click="showDrawerContainer" />
          <div>
            <Drawer
              placement="left"
              :visible="visibleContainer"
              @handleClose="handleClose"
            />
          </div>
        </div>
        <div class="header-container-nav">
          <ul class="header-container-nav_list">
            <li class="header-container-nav_list_item">
              <b
                ><DropdownImg
                  content="Việc làm"
                  :dataNavbarHeader="dataNavbarHeader.job"
              /></b>
            </li>
            <li class="header-container-nav_list_item">
              <b
                ><DropdownImg
                  content="Công ty"
                  :dataNavbarHeader="dataNavbarHeader.company"
              /></b>
            </li>
            <li class="header-container-nav_list_item">
              <b
                ><DropdownImg
                  content="Tiện Ích"
                  :dataNavbarHeader="dataNavbarHeader.utility"
              /></b>
            </li>
            <li class="header-container-nav_list_item">
              <b
                ><DropdownImg
                  content="Hồ Sơ, Cv"
                  :dataNavbarHeader="dataNavbarHeader.cv"
                  :img="dataNavbarHeader.imgJob"
              /></b>
            </li>
          </ul>
        </div>
        <div class="header-container-login">
          <ul class="header-container-login_list">
            <li class="header-container-login_list-item">
              <router-link to="/login"
                ><Button btn_css="button_second" content="Đăng Nhập"
              /></router-link>
            </li>
            <li class="header-container-login_list-item">
              <router-link to="/sign-up">
                <Button btn_css="btn_green" content="Đăng Ký"
              /></router-link>
            </li>
            <li class="header-container-login_list-item">
              <Button
                @click="handleSignUp"
                btn_css="button_grey"
                content="Đăng tuyển & tìm hồ sơ"
              />
            </li>
          </ul>
        </div>
        <div class="drawer-icon_menu-right">
          <menu-fold-outlined @click="showDrawerLogin" />
          <div>
            <Drawer
              placement="right"
              :visible="visibleLogin"
              @handleClose="handleClose"
            >
              <ul class="header-container-login_list">
                <li class="header-login_list-item">
                  <router-link to="/login"
                    ><Button btn_css="button_second" content="Đăng Nhập"
                  /></router-link>
                </li>
                <li class="header-container-login_list-item">
                  <router-link to="/sign-up">
                    <Button btn_css="btn_green" content="Đăng Ký"
                  /></router-link>
                </li>
                <li class="header-container-login_list-item">
                  <Button
                    btn_css="button_grey"
                    content="Đăng tuyển & tìm hồ sơ"
                  />
                </li>
              </ul>
            </Drawer>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import './Header.scss';
import Button from '@/components/Button/Button.vue';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons-vue';
import DropdownImg from './component/Dropdown/Dropdown-have-img.vue';
import Drawer from '@/components/Drawer/Drawer.vue';

export default {
  components: {
    Button,
    DropdownImg,
    MenuFoldOutlined,
    Drawer,
    MenuUnfoldOutlined,
  },
  data() {
    return {
      dataNavbarHeader: {
        imgJob: '../../../assets/image/img_header_dropdown/nav-contest.webp',
        job: [
          {
            tittle: 'CV',
            link: '/login',
          },
          {
            tittle: 'Việc Làm Nhật',
            link: '/login',
          },
          {
            tittle: 'Việc Làm Châu Âu',
            link: '/login',
          },
          {
            tittle: 'Việc Làm Hàn Quốc',
            link: '/ssss',
          },
          {
            tittle: 'Các nước khác',
            link: '/sing-up',
          },
        ],
        company: [
          {
            tittle: 'Danh Sách Công Ty',
            link: '/list-company',
          },
          {
            tittle: 'Top Công Ty',
            link: '/top-company',
          },
        ],
        utility: [
          {
            tittle: 'Gross,<-->Net',
            link: '/login',
          },
          {
            tittle: 'Lãi xuất kép',
            link: '/lai-xuat-kep',
          },
          {
            tittle: 'Thu nhập cá nhân',
            link: '/login',
          },
          {
            tittle: 'bảo hiểm xã hội',
            link: '/ssss',
          },
          {
            tittle: 'Bảo hiểm thất nghiệp',
            link: '/sing-up',
          },
        ],
        cv: [
          {
            tittle: 'Mẫu CV',
            link: '/login',
          },
          {
            tittle: 'Dịch vụ tư vấn Cv',
            link: '/login',
          },
          {
            tittle: 'Chuyển đổi Cv từ tiếng Việt sang tiếng nhật',
            link: '/login',
          },
          {
            tittle: 'Chuyển đổi Cv từ tiếng Việt sang tiếng Đức',
            link: '/ssss',
          },
          {
            tittle: 'Chuyển đổi Cv từ tiếng Việt sang tiếng hàn',
            link: '/sing-up',
          },
        ],
      },
      visibleContainer: false,
      visibleLogin: false,
    };
  },
  methods: {
    showDrawerLogin() {
      this.visibleLogin = true;
    },
    showDrawerContainer() {
      this.visibleContainer = true;
    },
    handleClose() {
      this.visibleContainer = false;
      this.visibleLogin = false;
    },
    handleSignUp() {
      this.$router.push('/signup-tuyendung');
    },
  },
};
</script>