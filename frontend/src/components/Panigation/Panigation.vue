<!-- 
pageSize = number
totalSize = number
 -->
<template>
  <a-pagination
    :pageSize="pageSize"
    v-model:current="current"
    :total="totalSize"
    show-less-items
    @change="changePagePagination"
  />
</template>
  <script>
export default {
  props: {
    pageSize: {
      type: Number,
      default: 10,
    },
    totalSize: {
      type: Number,
      default: 10,
    },
  },
  data() {
    return {
      current: 1,
    };
  },
  methods: {
    changePagePagination(page, pageSize) {
      console.log(page, pageSize);
    },
  },
};
</script>