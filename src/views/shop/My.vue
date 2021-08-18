<template>
  <div>
    <!-- 头部 -->
    <div class="header">
      <van-nav-bar fixed title="我的"  @click-left="onClickLeft">
        <template #left>
          <van-icon name="arrow-left" size="40" color="#fff" />
        </template>
      </van-nav-bar>
    </div>
    <!-- 个人信息 -->
    <div class="info">
      <van-image round width="10rem" height="10rem" src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=116907225,3214345018&fm=26&gp=0.jpg" />
      <div class="hello">您好，江湖毅然</div>
      <!-- <van-button block round type="default">您好，briup</van-button> -->
    </div>
    <!-- 个人列表 -->
    <div class="list">
      <van-cell title="账户余额" icon="gold-coin-o" is-link value="8.88" />
      <van-cell title="常用地址" icon="location-o" is-link @click="toAddress" />
      <van-cell title="我的评论" icon="chat-o" is-link />
      <van-cell title="联系我们" icon="phone-o" @click="toCallUs" />
      <!-- 退出 -->
      <van-button class="logout" block round type="danger" @click="toLogin">退出</van-button>
    </div>
  </div>
</template>

<script>
import { Dialog } from "vant";
export default {
  data() {
    return {};
  },
  computed: {},
  methods: {
    onClickLeft() {
       this.$router.push("../home/index");
    },
    // 跳转到登录页
    toLogin() {
      this.$router.push("/login");
    },
    // 联系我们
    toCallUs() {
      Dialog({ message: "请拨打电话：0471-1234-888" });
    },
    // 跳转到地址页
    toAddress() {
      // 路由api的形式去跳转路由 编程式导航
      this.$router.push("/myDetail/address");
    },
  },
  created() {},
  mounted() {},
};
</script>
<style scoped>
.info {
  margin-top: 100px;
  text-align: center;
}
.hello {
  width: 50%;
  border: 2px solid #e2e2e2;
  border-radius: 10px;
  padding: 10px;
  margin: 20px auto;
}
.logout {
  width: 80%;
  margin: 20px auto;
}
</style>