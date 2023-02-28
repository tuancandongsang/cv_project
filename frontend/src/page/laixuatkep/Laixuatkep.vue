<template>
  <div class="laixuatkep">
    <div class="container">
      <div class="main">
        <div class="main-recipe">
          <h2 class="main-recipe-title">
            Công cụ tính Lãi Kép, Giá trị tiền gửi, Lợi nhuận đầu tư Miễn Phí
          </h2>
          <p class="main-recipe-decreption">
            Công cụ ứng dụng lãi suất kép để tính toán tiền gửi, lợi nhuận đầu
            tư thu được trong tương lai dựa trên kế hoạch tiết kiệm, đầu tư hàng
            tháng và lãi suất kỳ vọng hoàn toàn miễn phí trên TopCV.
          </p>
          <div>
            <div class="">
              <h3>Bước 1: Đầu tư ban đầu</h3>
              <div>
                <div>
                  <p><b>Số tiền gốc ban đầu (VNĐ)</b></p>
                  <p>Số tiền bạn có sẵn để đầu tư ban đầu.</p>
                </div>
                <div>input</div>
              </div>
            </div>
            <div>
              <h3>Bước 1: Đầu tư ban đầu</h3>
              <div>
                <div>
                  <p><b>Số tiền gốc ban đầu (VNĐ)</b></p>
                  <p>Số tiền bạn có sẵn để đầu tư ban đầu.</p>
                </div>
                <div>input</div>
              </div>
            </div>
            <div>
              <h3>Bước 2: Khoản đóng góp</h3>
              <div>
                <div>
                  <p><b>Số tiền gửi mỗi tháng (VNĐ)</b></p>
                  <p>Số tiền bạn định thêm vào tiền gốc hàng tháng.</p>
                </div>
                <div>input</div>
              </div>
              <div>
                <div>
                  <p><b>Thời gian gửi (Năm)</b></p>
                  <p>
                    Khoảng thời gian, tính bằng năm, mà bạn dự định tiết kiệm.
                  </p>
                </div>
                <div>input</div>
              </div>
            </div>
            <div>
              <h3>Bước 3: Lãi suất</h3>
              <div>
                <div>
                  <p><b>Lãi suất (%)</b></p>
                  <p>Lãi suất ước tính theo kỳ hạn gửi của bạn.</p>
                </div>
                <div>input</div>
              </div>
            </div>
            <div>
              <h3>Bước 4: Kỳ hạn</h3>
              <div>
                <div>
                  <p><b>Định kỳ gửi</b></p>
                  <p>Kỳ hạn nhận lãi tiền gửi của bạn.</p>
                </div>
                <div>input</div>
              </div>
            </div>
          </div>
          <div>
            <Button content="Tính Lãi" btn_css="btn_green" />
          </div>
        </div>
      </div>
      <div class="news">pahi</div>
    </div>
  </div>
</template>

<script>
import './laixuatkep.scss';
import Button from '../../components/Button/Button.vue';
export default {
  components: { Button },
};
</script>

<style>
</style>