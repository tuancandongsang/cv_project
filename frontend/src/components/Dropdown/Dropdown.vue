<template>
  <div id="components-dropdown-demo-placement">
    <a-dropdown placement="bottomLeft">
      <b>bottomLeft</b>
      <template #overlay>
        <div class="dropdown-container">
          <div class="dropdown-container-left">
            <a-menu>
              <a-menu-item>
                <div class="alo">
                  <div class="alo1"><audit-outlined /></div>
                  <div class="alo2">Tim viec</div>
                </div>
              </a-menu-item>
              <a-menu-item>
                <div class="alo">
                  <div class="alo1"><audit-outlined /></div>
                  <div class="alo2">Tim viec</div>
                </div>
              </a-menu-item>
              <a-menu-item>
                <div class="alo">
                  <div class="alo1"><audit-outlined /></div>
                  <div class="alo2">Tim viec</div>
                </div>
              </a-menu-item>
            </a-menu>
          </div>
          <div class="dropdown-container-right">
            <img
              src="../../assets/image/img_header_dropdown/nav-job.webp"
              alt=""
            />
          </div>
        </div>
      </template>
    </a-dropdown>
  </div>
</template>
<script>
import './dropdown.scss';
import { AuditOutlined } from '@ant-design/icons-vue';
export default {
  components: { AuditOutlined },
};
</script>
<style lang="scss" scoped>
#components-dropdown-demo-placement .ant-btn {
  margin-right: 8px;
  margin-bottom: 8px;
}
.alo {
  display: flex;
  .alo1 {
  }
  .alo2 {
    flex: 1;
    background-color: red;
    padding-left: 12px;
  }
}
</style>