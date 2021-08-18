<template>
  <!-- 首页 -->
  <div>
    <div class="header">
      <van-nav-bar
        fixed
        title="江湖毅然外卖平台"
        left-arrow
        @click-left="onClickLeft"
      />
    </div>
    <div class="zj">

      <van-grid :border="false" :column-num="1">
  <van-grid-item>
    <van-image src="./mt.png" />
    <br/>
  </van-grid-item>
</van-grid>

        
    </div>

    <div class="bottom">
      <div class="sp1" @click="toAddress">我要订餐</div>
      <div class="sp1">关注必读</div>
      <div class="sp1">联系我们</div>

      <!-- <van-row>
        <van-col span="8" class="sp1">&nbsp;&nbsp;我要订餐</van-col>
        <van-col span="8" class="sp1">关注必读</van-col>
        <van-col span="8" class="sp1">联系我们</van-col>
      </van-row> -->
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";

export default {
  data() {
    return {
      //   onClickLeft() {
      //   this.$router.push("../home/index");
      // },
      // imgUrl:require('./mt.png')
    };
  },
  computed: {},
  methods: {
    toAddress() {
      //路由api的形式去路由跳转,用的是路由编程式导航
      this.$router.push("../../shop/index");
    },
    onClickLeft() {
      this.$router.push("../../home/index");
    },
  },
  created() {},
  mounted() {},
};
</script>
<style scoped>
.weui-media-box {
  padding: 8px 15px;
}
.xx {
  padding-bottom: 53px;
  padding-left: 0px;
  padding-top: 0px;
}
.bottom {
  position: fixed;
  left: 0px;
  bottom: 0px;
  width: 100%;
  height: 50px;
  background-color: #fafafa;
  z-index: 999;
}
.weui-media-box__title-after {
  float: right;
  color: #ecebeb;
}
.weui-media-box__hd {
  float: left;
}
.sp1 {
  text-align: center;
  float: left;
  width: 33%;
  padding-top: 10px;
}
.zj{
  padding-top: 30px;
}
/* .weui-media-box__thumb{
    left: +60em
} */
</style>