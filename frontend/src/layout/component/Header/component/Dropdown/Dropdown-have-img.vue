<template>
  <div id="components-dropdown-demo-placement">
    <a-dropdown placement="bottomLeft">
      <span>{{ content }}</span>
      <template #overlay>
        <div class="dropdown-container">
          <div class="dropdown-container-left">
            <a-menu>
              <a-menu-item class="alo">
                <div class="alo2">Tim viec</div>
              </a-menu-item>
              <a-menu-item class="alo">
                <div class="alo2">Tim viec</div>
              </a-menu-item>
              <a-menu-item class="alo">
                <div class="alo2">Tim viec</div>
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