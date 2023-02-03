<template>
  <div id="components-dropdown-demo-placement">
    <a-dropdown placement="bottomLeft">
      <span>{{ content }}</span>
      <template #overlay>
        <div class="dropdown-container">
          <div class="dropdown-container-left">
            <a-menu>
              <a-menu-item class="item-dropdown">
                <div class="link-dropdown"><router-link to="/login">Tim viec</router-link></div>
              </a-menu-item>
              <a-menu-item class="item-dropdown">
                <div class="link-dropdown"><router-link to="/login">Tim viec</router-link></div>
              </a-menu-item>
              <a-menu-item class="item-dropdown">
                <div class="link-dropdown"><router-link to="/login">Tim viec</router-link></div>
              </a-menu-item>
            </a-menu>
          </div>
          <div class="dropdown-container-right"></div>
        </div>
      </template>
    </a-dropdown>
  </div>
</template>
<script>
import './dropdown.scss';
export default {
  props: {
    content: {
      type: String,
      default: '',
    },
  },
};
</script>