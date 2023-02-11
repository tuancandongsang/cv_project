<template>
  <div class="login_right-tuyendung">
    <a-carousel autoplay>
      <div class="login_item">
        <img
          src="../../assets/image/img_calosel_login_tuyendung/img_calosel_login_1.svg"
          alt=""
        />
      </div>
      <div class="login_item">
        <img
          src="../../assets/image/img_calosel_login_tuyendung/img_calosel_login_2.svg"
          alt=""
        />
      </div>
      <div class="login_item">
        <img
          src="../../assets/image/img_calosel_login_tuyendung/img_calosel_login_3.svg"
          alt=""
        />
      </div>
    </a-carousel>
  </div>
</template>
  
<style scoped lang="scss">
@import '@/styles/index.scss';
.ant-carousel :deep(.slick-slide) {
  text-align: center;
  height: 100%;
  overflow: hidden;
}

.ant-carousel :deep(.slick-slide h3) {
  color: $bg-second;
}
.login_right-tuyendung {
  padding-top: 10px;
  width: 100%;
  background-color: #fff;
  .login_item {
    display: flex;

    img {
      width: 95%;
      padding: 0 20px 20px;
      display: inline-block;
    }
  }
}
</style>