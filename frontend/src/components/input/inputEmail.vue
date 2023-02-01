<template>
  <div>
    <label for="email"
      ><b>{{ label }}</b></label
    >
    <a-input
      :placeholder="placeholder"
      v-model:value="userName"
      class="padding_input"
    >
      <template #prefix>
        <mail-outlined type="user" class="color_icon" />
      </template>
    </a-input>
  </div>
</template>

<script>
import './input.scss';
import { MailOutlined } from '@ant-design/icons-vue';
export default {
  components: {
    MailOutlined,
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
      userName: '',
    };
  },
};
</script>