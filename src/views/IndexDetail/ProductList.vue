<template>
  <div>
    <!-- 头部 -->
    <div class="header">
      <van-nav-bar fixed title="产品列表" left-text="返回" left-arrow @click-left="toBack" />
    </div>
    <!-- 产品列表展示 左侧是分类，右侧是对应的产品 -->
    <div class="productList">
      <van-row>
        <van-col span="6">
          <van-sidebar v-model="activeKey" @change="categoryChange">
            <van-sidebar-item v-for="item in categoryData" :key="item.id" :title="item.name" />
          </van-sidebar>
        </van-col>
        <van-col span="18">
          <van-empty
            v-if="productList.length==0"
            class="custom-image"
            image="https://img.yzcdn.cn/vant/custom-empty-image.png"
            description="暂无数据"
          />
          <div v-else>
            <!-- 商品展示 -->
            <van-card
              v-for="it in productList"
              :key="it.id"
              :price="it.price"
              :desc="it.description"
              :title="it.name"
              :thumb="it.photo"
            >
              <template #num>
                <van-stepper
                  @change="stepChange"
                  default-value="0"
                  v-model="it.number"
                  theme="round"
                  button-size="22"
                  disable-input
                  min="0"
                  integer
                />
              </template>
            </van-card>
            <!-- {{productList}} -->
            <!-- {{productData}} -->
          </div>
        </van-col>
      </van-row>
    </div>
    <!-- 提交订单 -->
    <div class="toSubmit">
      <van-submit-bar :price="totalPrice" button-text="选择地址" @submit="toChoiceAddress" />
    </div>
    <div class="dialog">
      <van-dialog v-model="show" title="选择服务地址" show-cancel-button>
        <!-- 展示当前顾客的地址信息 -->
        <!-- {{addressId}} -->
        <div class="addressDiv">
          <van-address-list
            add-button-text="提交订单"
            v-model="addressId"
            :list="addressData"
            @add="toSave"
          />
        </div>
      </van-dialog>
    </div>
  </div>
</template>

<script>
import axios from "../../utils/request";
import qs from "qs";
export default {
  data() {
    return {
      // 是顾客选中的地址对象的id值，在保存订单的时候将来给后台
      addressId: null,
      // 顾客所有的地址
      addressData: [],
      // 顾客的id
      customerId: 27,
      // 模态框组件(Dialog弹出框)是否显示
      show: false,
      // 总金额
      totalPrice: 0,
      activeKey: 0,
      // 所有的产品分类数据
      categoryData: [],
      // 所有的产品数据
      productData: [],
      // 某一分类下的产品的数据
      productList: [],
    };
  },
  computed: {},
  methods: {
    // 去选择服务地址 第一种，来一个页面，该顾客的地址信息。第二种，弹出框，在弹出框里选择地址。
    toChoiceAddress() {
      // 获取当前顾客的地址信息
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
          // 将模态框显示出来
          this.show = true;
        });
    },
    // 步进器值改变时，计算总金额
    stepChange() {
      let total = 0;
      this.productData.forEach((item) => {
        // console.log(item);
        // item.price 单价  item.number  数量
        // console.log(item.price, item.number);
        total += item.price * (item.number || 0);
        // a += 1;  a=a+1;
      });
      this.totalPrice = total * 100;
    },
    // 提交订单
    async toSave() {
      // 提交订单 先选择服务地址，然后再保存订单
      // 给后台后台需要的数据
      // 获取用户选中的产品的id，产品的单价，产品的数量，构成一个订单项。用户选中多个产品的话，多个订单项，最后构成一个订单项数组。
      // this.productData   number  通过产品的数量来区分是否是用户选中的产品。   过滤
      let result = this.productData.filter((item) => {
        // return item.number>0;
        return item.number;
      });
      // console.log(result, "这是用户选中的产品");
      // 映射  map
      let result2 = result.map((item) => {
        return {
          productId: item.id,
          price: item.price,
          number: item.number,
        };
      });
      // console.log(result2, "这是订单项的数据");
      /** result内的对象格式
       * categoryId: 9442
          description: "500克/份"
          id: 9147
          name: "海南精品香蕉"
          number: 1
          photo: "http://47.93.206.13/iconfont/1.jpg"
          price: 3.5
          status: null
       */
      /**
       * result2内的对象格式
        number	
        price	
        productId	
       */
      let obj = {
        customerId: this.customerId,
        addressId: this.addressId,
        orderLines: result2,
      };
      // 判断数据全不全，如果数据全了然后再提交数据
      if (this.customerId && this.addressId) {
        let res = await axios.post("/order/save", obj);
        if (res.data.status == 200) {
          // 保存成功 关闭模态框，打开订单页
          this.show = false;
          this.$router.push("/home/order");
        }
      }
    },
    // 分类切换
    categoryChange(index) {
      // 方案二 前端过滤数据
      // 栏目id
      let id = this.categoryData[index].id;
      // 过滤产品  categoryId
      // 所有的产品  productData
      // 展示在页面的产品  productList
      this.productList = this.productData.filter((item) => {
        return item.categoryId == id;
      });

      /*  方案一 后台获取产品数据 方案一在产品数量选择的时候，不能一直留存数据，故修改
      // 通过index获取分类对象的id值，分类id
      let id = this.categoryData[index].id;
      // 发请求查找该分类的产品数据
      let res = await axios.get("/product/findByCategoryId", {
        params: { id },
      });
      // res.data.data  某一栏目的产品的数据
      this.productData = res.data.data;
      */
    },
    // 返回
    toBack() {
      this.$router.push("/shop/index");
      // this.$router.back(); 回退一步
      // this.$router.go(-1); 回退n步
    },
  },
  async created() {
    // 发请求，获取所有的分类数据  es6 异步编程解决方案，await等待，等待后边的异步请求回来，然后将获取到的数据返回。如果内部有await，那么包裹它的一个函数是异步函数，用async修饰。
    // es6 异步编程解决方案  Promise(then,catch)  异步函数  generator生成器
    let res = await axios.get("/category/findAll");
    // this.categoryData = res.data.data.reverse();
    this.categoryData = res.data.data;
    // 方案二 获取所有的产品数量
    let res2 = await axios.get("/product/findAll");
    this.productData = res2.data.data;
    // 方案一 方案二 发请求，获取第一个分类的产品数据，设置到数据模型中
    this.categoryChange(0);
  },
  mounted() {},
};
</script>
<style scoped>
.productList {
  margin-top: 60px;
}
.addressDiv {
  height: 300px;
  /* 处理内部内容溢出 自动产生滚动条 */
  overflow: auto;
}
</style>