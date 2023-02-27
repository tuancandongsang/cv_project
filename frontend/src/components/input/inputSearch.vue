<!-- 
placeholder=  'text',
label= 'text' 
-->

<template>
  <div style="width: 100%">
    <label for="search"
      ><b>{{ label }}</b></label
    >
    <a-input
      :placeholder="placeholder"
      v-model:value="valueSearch"
      class="padding_input"
    >
      <template #prefix>
        <search-outlined class="color_icon" />
      </template>
    </a-input>
  </div>
</template>

<script>
import './input.scss';
import { SearchOutlined } from '@ant-design/icons-vue';
export default {
  components: {
    SearchOutlined,
  },
  props: {
    placeholder: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      valueSearch: '',
    };
  },
};
</script>