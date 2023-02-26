<template>
  <div class="location-container">
    <select
      class="location-container-select"
      id="city"
      aria-label=".form-select-sm"
      v-model="location.Province"
      placeholder="Chọn tỉnh thành"
    >
      <option value="Chọn tỉnh thành" disabled selected>
        --Chọn tỉnh thành--
      </option>
      <option
        v-for="item in Province"
        :key="item"
        :value="item"
        class="location-container-select_item"
      >
        {{ item }}
      </option>
    </select>

    <select
      class="location-container-select"
      id="district"
      aria-label=".form-select-sm"
      v-model="location.Districts"
    >
      <option value="Chọn quận huyện" disabled selected>
        --Chọn quận huyện--
      </option>
      <option v-for="item in Districts" :key="item" :value="item">
        {{ item }}
      </option>
    </select>
    <button class="location-container_submit">submit</button>
  </div>
</template>


<script>
import axios from 'axios';
import './selectLocation.scss';
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
      DistrictsInit: [],
    };
  },
  async created() {
    try {
      const data = await axios(this.Parameter);
      this.dataPlace = JSON.parse(data.data);
      this.Province = this.dataPlace.map((item) => item.Name);
    } catch (error) {
      console.log('error', error);
    }
  },
  computed: {
    Districts() {
      if (this.dataPlace) {
        let i = this.dataPlace.findIndex(
          (item) => item.Name === this.location.Province
        );
        return this.dataPlace[i]?.Districts.map((item) => item.Name);
      }
      return this.DistrictsInit;
    },
    changeProvince() {
      return this.location.Province;
    },
  },
  watch: {
    changeProvince() {
      this.location.Districts = 'Chọn quận huyện';
    },
  },
};
</script>