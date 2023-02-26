<template>
  <div>
    <select
      class="form-select form-select-sm mb-3"
      id="city"
      aria-label=".form-select-sm"
      v-model="location.Province"
      placeholder="Chọn tỉnh thành"
    >
      <option value="Chọn tỉnh thành" disabled selected>Chọn tỉnh thành</option>
      <option v-for="item in Province" :key="item" :value="item">
        {{ item }}
      </option>
    </select>

    <select
      class="form-select form-select-sm mb-3"
      id="district"
      aria-label=".form-select-sm"
      v-model="location.Districts"
    >
      <option value="Chọn quận huyện" disabled selected>Chọn quận huyện</option>
      <option v-for="item in Districts" :key="item" :value="item">
        {{ item }}
      </option>
    </select>
    <button @click="alo">aa</button>
  </div>
</template>


<script>
import axios from 'axios';

export default {
  data() {
    return {
      location: {
        Province: 'Chọn tỉnh thành',
        Districts: 'Chọn quận huyện',
      },

      Parameter: {
        url: 'https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json',
        method: 'GET',
        responseType: 'application/json',
      },
      dataPlace: null,
      Province: ['one', 'two', 'three'],
      Districts: ['one', 'two', 'three'],
    };
  },
  async created() {
    try {
      const data = await axios(this.Parameter);
      this.dataPlace = JSON.parse(data.data);
      this.Province = this.dataPlace.map((item) => item.Name);
      console.log(this.dataPlace);
    } catch (error) {
      console.log('error', error);
    }
  },
  methods: {
    alo() {
      console.log('aaa', this.location);
    },
  },
  updated() {
    let i = this.dataPlace.findIndex((item) => item.Name === this.location.Province);
    console.log(this.dataPlace[i]);
    this.Districts = this.dataPlace[i]?.Districts.map((item) => item.Name);
  },
};
</script>