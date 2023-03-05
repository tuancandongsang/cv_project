<!--
type="text"
placeholder="text"
 -->

<template>
  <a-input v-model="valueInput" :placeholder="placeholder" :type="type" />
</template>
  <script>
import './input.scss';
export default {
  props: {
    placeholder: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
  },
  data() {
    return {
      valueInput: '',
    };
  },
};
</script>