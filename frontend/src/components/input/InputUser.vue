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
        <user-outlined type="user" class="color_icon" />
      </template>
    </a-input>
  </div>
</template>

<script>
import './input.scss';
import { UserOutlined } from '@ant-design/icons-vue';
export default {
  components: {
    UserOutlined,
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