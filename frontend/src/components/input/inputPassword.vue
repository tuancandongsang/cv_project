<template>
  <div>
    <label for="email" class="label_password"
      ><b>{{ label }}</b></label
    >
    <a-input-password
      v-model:value="password"
      :placeholder="placeholder"
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
import { SafetyOutlined, InfoCircleOutlined } from '@ant-design/icons-vue';
import './input.scss';
export default {
  components: {
    SafetyOutlined,
    InfoCircleOutlined,
  },
  props: {
    placeholder: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: 'Text',
    },
  },
  data() {
    return {
      password: '',
    };
  },
};
</script>