<template>
  <div>
    <!-- 头部 -->
    <div class="header">
      <van-nav-bar fixed title="地址" left-text="返回" left-arrow @click-left="toBack" />
    </div>
    <!-- 地址体部 -->
    <div class="addressList">
      <van-address-list
        v-model="addressId"
        :list="addressData"
        default-tag-text="默认"
        @add="toAdd"
        @edit="toEdit"
      />
    </div>
  </div>
</template>
<script>
import axios from "../../utils/request";
export default {
  data() {
    return {
      addressId: null,
      addressData: [],
      customerId: 27,
    };
  },
  computed: {},
  methods: {
    // 返回
    toBack() {
      this.$router.push("/shop/my");
    },
    // 新增地址
    toAdd() {
      this.$router.push("/myDetail/addressAdd");
    },
    // 修改地址
    toEdit(item, index) {
      // item 是对应的地址对象
      this.$router.push({
        path: "/myDetail/addressAdd",
        // 在路由上携带的参数
        query: item,
      });
    },
  },
  created() {
    axios
      .get("/address/findByCustomerId", {
        params: {
          id: this.customerId,
        },
      })
      .then((res) => {
        // res.data.data
        // 处理后台给的数据，与address-list要的数据保持一致，然后再设置到addressData上
        let arr = res.data.data;
        let temp = [];
        // 遍历数组。拿出数组中的每一项，处理数据，添加到temp中
        arr.forEach((item) => {
          temp.push({
            ...item,
            // name:item.customerId,
            // name:item.realname,
            name: "高大山",
            tel: item.telephone,
            address: item.province + item.city + item.area + item.address,
          });
        });
        this.addressData = temp;
      });
  },
  mounted() {},
};
</script>
<style scoped>
.addressList {
  margin-top: 60px;
}
</style>