<template>
  <div>
    <div class="main-recipe defaul-container">
      <h2 class="main-recipe-title">
        Công cụ tính Lãi Kép, Giá trị tiền gửi, Lợi nhuận đầu tư Miễn Phí
      </h2>
      <p class="main-recipe-decreption">
        Công cụ ứng dụng lãi suất kép để tính toán tiền gửi, lợi nhuận đầu tư
        thu được trong tương lai dựa trên kế hoạch tiết kiệm, đầu tư hàng tháng
        và lãi suất kỳ vọng hoàn toàn miễn phí trên TopCV.
      </p>
      <div class="main-recipe-form">
        <div class="main-recipe-form-item">
          <h3>Bước 1: Đầu tư ban đầu</h3>
          <div class="main-recipe-form-item-detail">
            <div class="main-recipe-form-item-detail-text">
              <p><b>Số tiền gốc ban đầu (VNĐ)</b></p>
              <p>Số tiền bạn có sẵn để đầu tư ban đầu.</p>
            </div>
            <div class="main-recipe-form-item-detail-input">
              <Input placeholder="VD: 10,000,000 (VND) " />
            </div>
          </div>
        </div>
        <div class="main-recipe-form-item">
          <h3>Bước 2: Khoản đóng góp</h3>
          <div class="main-recipe-form-item-detail">
            <div class="main-recipe-form-item-detail-text">
              <p><b>Số tiền gửi mỗi tháng (VNĐ)</b></p>
              <p>Số tiền bạn định thêm vào tiền gốc hàng tháng.</p>
            </div>
            <div class="main-recipe-form-item-detail-input">
              <Input placeholder="VD: 10,000,000 (VND) " />
            </div>
          </div>
          <div class="main-recipe-form-item-detail">
            <div class="main-recipe-form-item-detail-text">
              <p><b>Thời gian gửi (Năm)</b></p>
              <p>Khoảng thời gian, tính bằng năm, mà bạn dự định tiết kiệm.</p>
            </div>
            <div class="main-recipe-form-item-detail-input">
              <Input placeholder="VD: 10" />
            </div>
          </div>
        </div>
        <div class="main-recipe-form-item">
          <h3>Bước 3: Lãi suất</h3>
          <div class="main-recipe-form-item-detail">
            <div class="main-recipe-form-item-detail-text">
              <p><b>Lãi suất (%)</b></p>
              <p>Lãi suất ước tính theo kỳ hạn gửi của bạn.</p>
            </div>
            <div class="main-recipe-form-item-detail-input">
              <Input placeholder="VD: 10" />
            </div>
          </div>
        </div>
        <div class="main-recipe-form-item">
          <h3>Bước 4: Kỳ hạn</h3>
          <div class="main-recipe-form-item-detail">
            <div class="main-recipe-form-item-detail-text">
              <p><b>Định kỳ gửi</b></p>
              <p>Kỳ hạn nhận lãi tiền gửi của bạn.</p>
            </div>
            <div class="main-recipe-form-item-detail-input">
              <SelectOption :option="optionSelectTimeB4" ref="SelectOption" />
            </div>
          </div>
        </div>
      </div>
      <div class="main-recipe-button">
        <div class="main-recipe-button-item">
          <Button
            content="Tính Lãi"
            btn_css="btn_green"
            @click="handleTinhLai"
          />
        </div>
      </div>
    </div>
    <div class="main-maybe defaul-container">
      Có thể bạn quan tâm
      <a href="#"
        >Công cụ lập kế hoạch tiết kiệm ứng dụng lãi suất kép miễn phí chính xác
        nhất</a
      >
    </div>
    <div class="main-detail defaul-container">
      <h3>Công cụ tính lãi suất kép</h3>
      <p>
        Lãi suất kép trong tiếng Anh là Compound Interest, được Einstein nhận
        định là “kỳ quan thứ 8 của thế giới. Những ai hiểu được nó từ đó sẽ kiếm
        được tiền, ai không hiểu sẽ phải trả chi phí cho điều đó”. “Thiên tài
        đầu tư” Warren Buffett cũng từng chia sẻ lý do mà ông giàu có: “Sự giàu
        có của tôi kết hợp từ cuộc sống tại Mỹ, gen tốt và Lãi suất kép”.
      </p>
      <p>
        Bạn hoàn toàn có thể trở nên giàu có như Warren Buffett nếu bạn biết tận
        dụng sức mạnh của lãi kép, kết hợp với việc đầu tư thường xuyên, nhất
        quán trong một thời gian dài. Công cụ tính lãi suất kép của TopCV dưới
        đây sẽ giúp bạn tính toán và dự báo được sự tăng trưởng kép "khối tài
        sản" (khoản gửi tiết kiệm, đầu tư) của mình trong một thời gian nhất
        định.
      </p>
      <h3>Lãi suất kép là gì?</h3>
      <p>
        Lãi suất kép (lãi kép) hay còn được gọi là lãi cộng dồn, có nghĩa là khi
        đến kỳ nhận lãi của khoản đầu tư thì bạn lấy lãi đó nhập vào thành gốc
        và tiếp tục đầu tư chuỗi chu kỳ tiếp theo. Cứ lặp đi lặp lại như vậy
        xuyên suốt thời gian đầu tư hoặc gửi tiết kiệm thì được coi là lãi suất
        kép.
      </p>
      <h3>Công thức tính lãi suất kép trong toán học</h3>
      <div class="Img_congthuctinhlaikep">
        <img src="https://www.topcv.vn/v4/image/cong-thuc-lai-kep.png" alt="" />
      </div>
      <p>Trong đó:</p>
      <ul>
        <li>
          Fn là giá trị của khoản đầu tư trong khoảng thời gian n năm mà bạn
          nhận được.
        </li>
        <li>P là giá trị khoản đầu tư hiện tại của bạn.</li>
        <li>
          i là lãi suất hàng năm của khoản đầu tư đó. Ví dụ lãi suất 10%/năm,
          thì i được hiểu là 0,1.
        </li>
        <li>n là số năm bạn dự tính đầu tư.</li>
        <li>
          m là số lần ghép lãi trong 1 năm, nếu lãi nhận hàng năm thì m là 1.
        </li>
      </ul>
      <h3>Sức mạnh của lãi suất kép</h3>
      <p>
        Bạn đang có trong tay 100 triệu. Bạn muốn đầu tư với lãi suất 8%/năm.
      </p>
      <p>
        Nếu áp dụng lãi đơn, sau 5 năm bạn nhận được: 100 * (1 + 8%*5) = 140
        triệu đồng. Số tiền này còn cao hơn khi bạn sử dụng công thức lãi kép
        như sau: 100 * (1 + 8%)^5 = 146,93 triệu đồng.
      </p>
      <p>
        Sức mạnh của lãi kép trở nên rõ ràng hơn khi bạn nhìn vào biểu đồ tăng
        trưởng dài hạn dưới đây:
      </p>
      <div>
        <img
          src="https://www.topcv.vn/v4/image/bieu-do-tang-truong-lai-kep.jpeg"
          alt=""
        />
      </div>
      <p>
        Đây là biểu đồ ví dụ về khoản đầu tư $ 1000 ban đầu. Giả thiết thời gian
        đầu tư là 20 năm ở mức 10% mỗi năm. Khi so sánh lợi ích của lãi suất kép
        so với lãi suất đơn hay không có lãi suất nào, rõ ràng là chúng ta có
        thể thấy lãi suất kép có thể giúp tăng giá trị đầu tư của bạn như thế
        nào.
      </p>
      <p>
        Vì vậy, so với lãi đơn thì lãi kép có sức mạnh kì diệu hơn hẳn và đem
        lại cho chúng ta mức lợi nhuận cao hơn cùng một khoản đầu tư.
      </p>
      <p>
        Nếu công thức trên khá phức tạp với bạn, sử dụng ngay công cụ tính lãi
        kép từ TopCV. Bạn chỉ cần nhập số liệu, hệ thống sẽ đưa ra kết quả cuối
        cùng.
      </p>
      <h3>Sử dụng công cụ tính lãi kép từ TopCV để tiết kiệm cho tương lai</h3>
      <p>
        Bộ công cụ tính lãi kép từ TopCV giúp bạn tính được số tiền mà bạn sẽ
        nhận được khi gửi tiết kiệm hoặc đầu tư. Bộ công cụ bao gồm Lãi Kép và
        Gửi Lãi Định Kỳ dành cho 2 hình thức gửi tiết kiệm hoặc đầu tư. Cụ thể:
      </p>
      <p><b>Gửi Lãi Định Kỳ</b></p>
      <div>
        <img
          src="https://www.topcv.vn/v4/image/tinh-lai-kep.png?v=1.0"
          alt=""
        />
      </div>
      <p>Giải nghĩa các biến số trong công thức tính Gửi Lãi Định Kỳ</p>
      <ul>
        <li>
          Số tiền gốc ban đầu: Là số tiền mà bạn bỏ ra ngay từ đầu để gửi tiết
          kiệm ngân hàng hoặc đầu tư
        </li>
        <li>
          Số tiền gửi mỗi kỳ: Số tiền bạn gửi vào tài khoản tiết kiệm ngân hàng
          hoặc đầu tư định kỳ
        </li>
        <li>
          Thời gian gửi: Khoảng thời gian mà bạn gửi tiết kiệm ngân hàng hoặc
          đầu tư
        </li>
        <li>
          Lãi suất (%): Là lãi suất mà bạn nhận được từ việc gửi tiết kiệm ngân
          hàng hoặc đầu tư. Lãi suất này được quy theo năm hoặc tháng
        </li>
        <li>
          Định kỳ gửi: Là tần suất mà bạn gửi tiền vào tài khoản tiết kiệm hoặc
          đầu tư, tính theo năm hoặc tháng.
        </li>
      </ul>
      <p>
        Không chỉ đưa ra con số cuối cùng mà bạn nhận được, hành trình tiết kiệm
        hay đầu tư của bạn còn được biểu diễn dưới dạng biểu đồ một cách trực
        quan nhất.
      </p>
      <p>
        Hãy bắt đầu tích lũy và đầu tư sớm nhất có thể ngay từ bây giờ. Thời
        gian quả thực đóng vai trò rất quan trọng trong việc gia tăng sức mạnh
        của lãi kép.
      </p>
      <h3>Câu hỏi thường gặp</h3>
      <h4>Mức lãi suất là bao nhiêu?</h4>
      <p>
        Lãi suất là tỷ lệ mà theo đó tiền lãi được người vay trả cho việc sử
        dụng tiền mà họ vay từ người cho vay. Tùy vào chính sách của mỗi ngân
        hàng hay đơn vị/tổ chức tài chính sẽ có mức lãi suất khác nhau. Nếu bạn
        gửi tiết kiệm - tức là bạn đang cho ngân hàng vay tạm thì lãi suất càng
        cao càng có lợi cho bạn. Tham khảo càng nhiều ngân hàng hay gói tiết
        kiệm / đầu tư để lựa chọn được nơi gửi tiết kiệm / đầu tư hiệu quả nhất.
      </p>
      <h4>Lãi suất hàng năm, hàng tháng là gì?</h4>
      <p>
        Với dịch vụ gửi tiết kiệm có kỳ hạn, số tiền gửi sẽ được quy định một
        mức kỳ hạn đi kèm với mức lãi suất cam kết. Ngân hàng sẽ đưa ra nhiều
        mức kỳ hạn khác nhau cho khách hàng lựa chọn theo nhu cầu, ví dụ gửi
        tiết kiệm hàng tháng, quý, năm,… Công cụ tính lãi kép của TopCV bao gồm
        2 tùy chọn đơn vị lãi kép phổ biến nhất đó là theo năm và theo tháng.
      </p>
      <h3>Làm thế nào để tận dụng được sức mạnh của lãi kép?</h3>
      <p><b>Hãy bắt đầu tiết kiệm / đầu tư từ sớm</b></p>
      <p>
        Dù bạn bao nhiêu tuổi, bạn cũng nên bắt đầu tiết kiệm ngay. Kể cả với số
        tiền nhỏ, lãi kép sẽ giúp nhân số tiền tiết kiệm của bạn lên nhiều lần
        cùng thời gian.
      </p>
      <p><b>Hãy tiết kiệm / đầu tư thường xuyên</b></p>
      <p>
        Hãy giữ nguyên tắc và tiết kiệm mỗi tháng. Như bạn thấy, chỉ cần tiết
        kiệm dù chỉ 1 triệu / tháng cũng có thể sinh ra số tiền lớn tới gần 500
        triệu sau 20 năm. Và nếu bạn tiết kiệm lâu hơn, là 40 năm thay vì 20
        năm, con số mà bạn nhận được sẽ lên tới 2.356.274.847 VNĐ sau 40 năm!
      </p>
      <p><b>Lựa chọn kênh tiết kiệm / đầu tư hiệu quả nhất</b></p>
      <p>
        Mỗi ngân hàng hay tổ chức tài chính trên thị trường phần lớn đều có mức
        lãi suất khác nhau dựa vào chính sách dành cho khách hàng và lợi thế
        cạnh tranh mà họ mong muốn. Thậm chí, trong cùng một ngân hàng cũng sẽ
        có nhiều gói tiết kiệm / đầu tư với mức lãi suất và chính sách khác
        nhau. Vì vậy, hãy tham khảo nhiều chương trình tiết kiệm / đầu tư đang
        có mặt trên thị trường để lựa chọn được kênh phù hợp nhất với mức tài
        chính và kế hoạch của bạn.
      </p>
      <p>
        Trên đây là những chia sẻ của TopCV về lãi suất kép và công cụ tính lãi
        kép chính xác nhất 2022. Hy vọng qua bài viết này bạn sẽ tận dụng được
        sức mạnh của lãi kép để tiết kiệm và đầu tư, từ đó đạt được mục tiêu tài
        chính của riêng mình.
      </p>
    </div>
  </div>
</template>

<script>
import './laixuatkep.scss';
import Button from '../../../components/Button/Button.vue';
import Input from '../../../components/input/InputBase.vue';
import SelectOption from '../../../components/SelectOption/SelectOption.vue';
export default {
  components: { Button, Input, SelectOption },
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
      optionSelectTimeB4: [
        { value: 365, label: 'Hằng năm' },
        { value: 30, label: 'Hằng tháng' },
        { value: 120, label: 'Hằng quý' },
        { value: 1, label: 'Hằng ngày' },
      ],
    };
  },
  methods: {
    handleTinhLai() {
      console.log(this.$refs.SelectOption.value);
    },
  },
};
</script>