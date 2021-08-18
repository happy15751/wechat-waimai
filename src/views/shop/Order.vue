<template>
  <div>
    <!-- 头部 -->
    <div class="header">
      <van-nav-bar fixed title="订单"  @click-left="onClickLeft">
        <template #left>
          <van-icon name="arrow-left" size="40" color="#fff" />
        </template>
      </van-nav-bar>
    </div>
    <!-- 订单分类和内容 -->
    <div class="order">
      <van-tabs swipeable animated v-model="active" sticky>
        <van-tab v-for="item in types" :key="item.name" :name="item.value" :title="item.name">
          <van-empty
            v-if="orderList.length==0"
            class="custom-image"
            image="https://img.yzcdn.cn/vant/custom-empty-image.png"
            description="暂无数据"
          />
          <!-- 订单 -->
          <div v-else class="orderDetail" v-for="item in orderList" :key="item.id">
            <div class="divText">订单编号：{{item.id}}</div>
            <!-- 商品展示 -->
            <van-card
              v-for="it in item.orderLines"
              :key="it.id"
              :num="it.number"
              :price="it.price"
              :desc="it.product.description"
              :title="it.product.name"
              :thumb="it.product.photo"
            >
              <template #tags>
                <van-tag plain type="danger">
                  <!-- 2021-01-20 15:27:40 -->
                  下单时间：{{moment(item.orderTime).format('YYYY-MM-DD HH:mm:ss')}}
                </van-tag>
              </template>
            </van-card>
            <div
              class="divText"
            >服务地址：{{item.address.province}}{{item.address.city}}{{item.address.area}}{{item.address.address}}</div>
            <div class="divText">
              <van-button
                @click="toPay(item)"
                v-if="item.status==='待支付'"
                type="info"
                size="small"
              >支付</van-button>
            </div>
          </div>
        </van-tab>
      </van-tabs>
    </div>
    <br />
    <br />
    <br />
  </div>
</template>

<script>
import axios from "../../utils/request";
import qs from "qs";
// 导入moment函数
let moment = require("moment");
export default {
  data() {
    return {
      active: "",
      orderData: [],
      customerId: 27,
      types: [
        {
          name: "全部",
          value: "",
        },
        {
          name: "待派单",
          value: "待派单",
        },
        {
          name: "待接单",
          value: "待接单",
        },
        {
          name: "待确认",
          value: "待确认",
        },
        {
          name: "待支付",
          value: "待支付",
        },
        {
          name: "已完成",
          value: "已完成",
        },
      ],
    };
  },
  // 计算属性
  computed: {
    // orderList是每个标签页显示的内容，与orderData和active变量有关系
    // 点击的标签，在总数据里过滤出对应种类的订单。
    orderList() {
      return this.orderData.filter((item) => {
        // item是orderData中的每一项
        // active有值的话，就是true，非全部选项
        // active 待派单
        if (this.active) {
          return item.status == this.active;
        }
        // active ""  全部
        return true;
      });
    },
  },
  methods: {
    onClickLeft() {
       this.$router.push("../home/index");
    },
    moment,
    // 支付
    toPay(order) {
      // order是订单对象
      // 总金额
      let total = 0;
      order.orderLines.forEach((item) => {
        total += item.price * item.number;
      });
      // 封装给后台的数据
      let obj = {
        orderid: order.id,
        order_money: total,
        customer_id: this.customerId,
        order_name: "test",
        description: "test2",
      };
      // console.log(obj, "给后台数据");
      // 打开一个新页面  'hello?'+qs.stringify(obj)
      let url = "http://47.93.206.13:5588/order/paymoney?" + qs.stringify(obj);
      window.open(url);
      // 刷新数据
      setTimeout(() => {
        this.orderQuery();
      }, 3000);
      // window.open(
      //   "http://47.93.206.13:5588/order/paymoney?orderid=1161&customer_id=27&order_name=test&order_money=3.5&description=test"
      // );
    },
    // 发送请求，获取所有的订单和级联信息
    orderQuery() {
      axios
        .get("/order/query", {
          params: {
            customerId: this.customerId,
          },
        })
        .then((res) => {
          // res.data.data
          this.orderData = res.data.data;
        });
    },
  },
  created() {
    this.orderQuery();
  },
  mounted() {},
};
</script>
<style scoped>
.order {
  margin-top: 60px;
}
.orderDetail {
  border: 1px solid #e2e2e2;
  padding: 10px 0;
  margin: 10px;
  box-shadow: 0px 0px 3px #e2e2e2;
  border-radius: 10px;
}
.divText {
  text-align: center;
}
</style>