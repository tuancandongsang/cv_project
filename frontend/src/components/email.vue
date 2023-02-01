<template>
  <div class="components-input-demo-presuffix">
    <label for="email"><b>Email</b></label>
    <a-input placeholder="Email" v-model:value="userName" class="padding_input">
      <template #prefix>
        <user-outlined type="user" class="color_icon" />
      </template>
      <template #suffix>
        <a-tooltip title="Extra information">
          <div class="icon_infor">
            <info-circle-outlined />
          </div>
        </a-tooltip>
      </template>
    </a-input>
    <label for="email" class="label_password"><b>Password</b></label>
    <a-input-password
      v-model:value="value"
      placeholder="Password"
      class="padding_input"
    >
      <template #prefix>
        <safety-outlined class="color_icon" />
      </template>
      <template #suffix>
        <a-tooltip title="Extra information">
          <info-circle-outlined />
        </a-tooltip>
      </template>
    </a-input-password>
  </div>
</template>
<script>
import {
  SafetyOutlined,
  InfoCircleOutlined,
  UserOutlined,
} from '@ant-design/icons-vue';
export default {
  components: {
    UserOutlined,
    SafetyOutlined,
    InfoCircleOutlined,
  },
  data() {
    return {
      userName: '',
      value: '',
    };
  },
};
</script>
<style lang="scss" scoped>
label {
  margin-bottom: 4px;
  display: inline-block;
}
.label_password {
  margin-top: 16px;
}
.color_icon {
  color: #00b14f;
}
.padding_input {
  padding: 10px;
  span {
    margin-right: 20px;
  }
}
.icon_infor {
  color: #00b14f;
  padding: 0px !important;
  span {
    margin-right: 0px !important;
  }
}
</style>