<template>
  <div>
    <!-- 头部导航栏区域 -->
    <div class="header"><van-nav-bar fixed title="一起来识别吧" /></div>
    <!--照片区域-->
    <div class="body">
      <input type="file" id="uploadimg" />
      <input type="button" value="识别" class="jj1" />

      <div>
        <img src="#" id="img" alt="" style="display: block" />
        <span id="ret"></span>
      </div>
    </div>
  </div>
</template>
 
<script >
import $ from "jquery";
export default {
  data() {
    return {
      imgs: [],
    };
  },
  methods: {
    
  },
  mounted() {},
  created() {},

  components: {},
};

$(function () {
  $(".jj").click(function () {
    alert(1);
  });
});
$(function () {
  $(".jj1").click(function () {
    var formData = new FormData();
    var f = document.getElementById("uploadimg").files[0];
    formData.append("img", f);

    $("#img").attr("src", window.URL.createObjectURL(f));

    $.ajax({
      url: "http://localhost:1234/",
      type: "post",
      data: formData,
      mimeType: "multipart/form-data",
      contentType: false,
      processData: false,
      success: function (res) {
        if (res) $("#ret").text("预测结果: " + JSON.parse(res)["class"]);
      },
      error: function (err) {
        alert("Error: ", err);
      },
    });
  });
});
</script>

<style scoped>
.body{
  margin-top: 50px;
}

</style>
