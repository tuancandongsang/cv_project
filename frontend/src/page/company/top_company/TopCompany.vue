<template>
  <div class="company">
    <div class="company-container">
      <div class="company-header">
        <div class="company-header_infor">
          <div class="company-header_infor-list">
            <ul>
              <li>Danh sách công ty</li>
              <li>Top công ty</li>
            </ul>
            <h2>Khám phá 100.000+ công ty nổi bật</h2>
            <p>
              Tra cứu thông tin công ty và tìm kiếm nơi làm việc tốt nhất dành
              cho bạn
            </p>
            <div>
              <InputSearch />
            </div>
          </div>
        </div>
        <div class="company-header-img">
          <img
            src="https://www.topcv.vn/v4/image/company-billBoard.svg"
            class="w-100"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import './topCompany.scss';
import InputSearch from '../../../components/input/inputSearch.vue';
export default {
  components: { InputSearch },
};
</script>

<style>
</style>