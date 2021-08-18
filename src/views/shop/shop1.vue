<template>
  <!-- 主页 -->
  <div class="home">
    <van-tabbar fixed route v-model="active">
      <van-tabbar-item replace to="/shop/index" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/shop/order" icon="search">订单</van-tabbar-item>
      <van-tabbar-item replace to="/shop/my" icon="friends-o">我的</van-tabbar-item>
    </van-tabbar>
    <!-- 给子组件提供容器 -->
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  // 数据模型
  data() {
    return {
      active: 0,
    };
  },
};
</script>
