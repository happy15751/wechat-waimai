<template>
  <div>
    <!-- 头部 -->
    <div class="header">
      <van-nav-bar fixed title="江湖毅然外卖平台" @click-left="onClickLeft" @click-right="onClickRight">
        <template #left>
          <van-icon name="arrow-left" size="40" color="#fff" />
        </template>
      </van-nav-bar>
    </div>
    <!-- 轮播图 注释  ctrl+/-->
    <div class="images">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img :src="image" v-lazy="image" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 产品分类 -->
    <!-- 基本渲染，将数据模型中的数据显示在页面上 -->
    <!-- {{categoryData}} -->
    <div class="category">
      <van-grid :column-num="3">
        <van-grid-item
          @click="$router.push('/indexDetail/productList')"
          v-for="item in categoryData"
          :key="item.id"
          :icon="item.icon"
          :text="item.name"
        />
        <!-- <van-grid-item icon="../../assets/star.png" badge="更多" /> -->
        <van-grid-item badge="更多" @click="$router.push('/indexDetail/productList')">
          <template #icon>
            <van-image width="28" height="28" src="./star.png" />
          </template>
        </van-grid-item>
      </van-grid>
      <!-- <van-badge content="更多" /> -->
    </div>
    <!-- 产品展示 -->
    <!-- {{productData}}--{{total}} -->
    <div class="product">
      <!-- {{loading}} -->
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <!-- <van-cell v-for="item in list" :key="item" :title="item" /> -->
        <van-grid :column-num="2">
          <van-grid-item
            @click="$router.push('/indexDetail/productList')"
            v-for="item in productData"
            :key="item.id"
            :text="item.name"
          >
            <template #icon>
              <van-image width="90%" height="100" :src="item.photo" />
            </template>
          </van-grid-item>
        </van-grid>
      </van-list>
    </div>
    <br />
    <br />
    <br />
    <br />
    <br />
  </div>
</template>

<script>
import { Toast } from "vant";
// 导入axios
import axios from "../../utils/request.js";
export default {
  data() {
    return {
      // 产品的数据，初始的时候有10个，下拉触底后，每次加载10个，加载到60的时候，停，就不加载了
      productData: [],
      // 产品的总数，将来用它来判断是否结束加载
      total: 1,
      // 分页查找产品的页码，默认从0开始，依次累加为1，2，3....
      page: 0,
      loading: false,
      finished: false,
      // 分类数据，5个数据
      // categoryData: [{id:1,icon:'',name:''},{id:1,icon:'',name:''},{id:1,icon:'',name:''}],
      categoryData: [],
      images: [
        "https://img.yzcdn.cn/vant/apple-1.jpg",
        "https://img.yzcdn.cn/vant/apple-2.jpg",
      ],
    };
  },
  computed: {},
  methods: {
    // 加载产品
    onLoad() {
      if (this.productData.length >= this.total) {
        this.finished = true;
      } else {
        this.getProductData();
        this.loading = false;
        this.page++;
      }
    },
    onClickLeft() {
       this.$router.push("../home/index");
    },
    onClickRight() {
      Toast("按钮");
    },
    // 获取产品数据 axios
    getProductData() {
      axios
        .post("/product/query", {
          page: this.page,
          pageSize: 10,
        })
        .then((res) => {
          // 将后台获取到的数据追加到this.productData
          this.productData = [...this.productData, ...res.data.data.list];
          this.total = res.data.data.total;
          // let a = [1,2,3]
          // let b = [...a];    [1,2,3]
          // ...a   1,2,3
          // console.log(res.data.data.list);
          // console.log(res.data.data.total);
        });
    },
  },
  // 生命周期钩子函数，在vue实例创建完毕之后会执行的一个函数
  created() {
    // 发请求获取产品数据
    // this.getProductData();
    // 发post请求，并且还要携带数据给后台，接受响应的数据
    /* axios
      .post("/category/query", null, {
        params: {
          page: 0,
          pageSize: 5,
        },
      }) */
    axios
      .post("/category/query", {
        page: 0,
        pageSize: 5,
      })
      .then((res) => {
        // res.data 是后台给的数据
        // console.log(res.data);
        // console.log(res.data.data.list);
        // 将数组设置到数据模型里
        this.categoryData = res.data.data.list;
      });
    // 发get请求，并接受响应的数据
    /* axios.get("/category/findAll").then((res) => {
      // res就是响应的数据，经过axios封装了
      console.log(res, "响应的数据");
      // res.data是后台给的数据
      console.log(res.data.data, "数组");
    }); */
  },
  mounted() {},
};
</script>

<style>
.van-info {
  width: 32px;
}
</style>

<style scoped>
/* scoped代表内部样式代码仅能在当前组件内(当前vue页面)生效，但是在van-grid组件内不会生效。没有用scoped修饰的style标签内的样式是全局生效 */
.header {
  /* 行高 */
  line-height: 60px;
}
.images {
  margin-top: 60px;
}
.images img {
  width: 100%;
  height: 200px;
}
</style>