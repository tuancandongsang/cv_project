<!-- 
  :option = "object[{value: number , lable}]" 
-->
<template>
  <a-select
    label-in-value
    v-model:value="value"
    style="width: 100%"
    :options="option"
    @change="handleChange"
  ></a-select>
</template>
<script>
export default {
  props: {
    option: {
      type: Object,
    },
  },
  data() {
    return {
      value: 365,
    };
  },
  methods: {
    handleChange(value) {
      this.value = value.value; // { key: "lucy", label: "Lucy (101)" }
    },
  },
};
</script>