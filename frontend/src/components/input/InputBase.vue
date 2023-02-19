<!--
type="text"
placeholder="text"
 -->

<template>
  <a-input
    class="Input"
    v-model="valueInput"
    :placeholder="placeholder"
    :type="type"
  />
</template>
  <script>
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
  methods: {},
};
</script>
<style scoped>
.Input {
  border-radius: 8px;
}
</style>