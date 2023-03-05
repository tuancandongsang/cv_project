<template>
  <div class="laixuatkep">
    <div class="container">
      <div class="main">
        <router-view></router-view>
      </div>
      <div class="news">
        <div class="news-img defaul-container">
          <img
            src="https://static.topcv.vn/manual/dang-tin-tuyen-dung-mien-phi-tim-kiem-ung-vien-topcv.png"
            alt=""
          />
        </div>
        <div class="news-list defaul-container">
          <h3>Bài viết liên quan</h3>
          <ul>
            <li v-for="item in newsList" :key="item.content">
              <router-link :to="item.link">{{ item.content }}</router-link>
            </li>
          </ul>
        </div>
        <div class="news-support defaul-container">
          <h3>Hỗ trợ</h3>
          <p>Bạn có chia sẻ hay cần tư vấn về cách tính lãi suất kép?</p>
          <p>Hãy gửi email đề xuất tới hotro@topcv.vn.</p>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
import './layoutTienich.scss';
export default {
  data() {
    return {
      newsList: [
        { content: 'Giấy tờ thủ tục hồ sơ xin việc', link: '/login' },
        { content: 'Tải mẫu sơ yếu lý lịch chuẩn miễn phí', link: '/login' },
        { content: 'Cách viết Email xin việc tiếng Anh', link: '/login' },
        { content: 'Các mẫu CV tham khảo theo nhóm ngành', link: '/login' },
        { content: 'Mẫu đơn xin nghỉ việc chuẩn', link: '/login' },
        { content: 'Hướng dẫn viết CV tiếng Nhật', link: '/login' },
        { content: 'Các mẫu CV tham khảo theo nhóm ngành', link: '/login' },
      ],
    };
  },
};
</script>