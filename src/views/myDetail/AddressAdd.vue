<template>
  <div>
    <!-- 头部 -->
    <div class="header">
      <van-nav-bar fixed :title="title" left-text="返回" left-arrow @click-left="toBack" />
    </div>
    <!-- 体部  表单 -->
    <div class="forms">
      <van-address-edit
        :address-info="addressInfo"
        :area-list="areaList"
        :area-columns-placeholder="['请选择', '请选择', '请选择']"
        @save="toSave"
      />
    </div>
  </div>
</template>

<script>
import areaList from "../../utils/area.js";
import { Toast } from "vant";
import axios from "../../utils/request";
// let areaList = {province_data:{},....}
export default {
  data() {
    return {
      title: "新增地址",
      // areaList:areaList,
      areaList,
      customerId: 27,
      // 新增或修改的表单的初始数据，如果是新增，那么初始数据是空对象{}，如果是修改，那么初始数据是当前用户修改的数据
      addressInfo: {},
    };
  },
  computed: {},
  methods: {
    // 保存按钮
    toSave(content) {
      // content是表单内容，将content的内容转为后台需要需要的数据
      let obj = {
        // 如果是新增的保存，那么id值为null，如果是修改的保存，id值为this.$route.query.id
        id: this.$route.query.id ? this.$route.query.id : null,
        province: content.province,
        city: content.city,
        area: content.county,
        address: content.addressDetail,
        telephone: content.tel,
        customerId: this.customerId,
      };
      // 发请求
      axios.post("/address/saveOrUpdate", obj).then((res) => {
        // 提示地址保存成功
        Toast("保存成功");
        // 路由跳转到地址列表页面
        this.$router.push("/myDetail/address");
      });
    },
    // 返回
    toBack() {
      this.$router.push("/myDetail/address");
    },
  },
  created() {
    // 接受其他页面路由跳转的时候传递的数据，从路由对象this.$route上接受数据
    /**
     * 
     * address: "北京市北京市朝阳区佳佳乐"
        area: "朝阳区"
        city: "北京市"
        customerId: "27"
        id: "2338"
        name: "高大山"
        province: "北京市"
        tel: "13548952459"
        telephone: "13548952459"
     */
    /**
     * id 	每条地址的唯一标识 	number | string
      name 	收货人姓名 	string
      tel 	收货人手机号 	string
      province 	省份 	string
      city 	城市 	string
      county 	区县 	string
      addressDetail
     */
    console.log(this.$route);
    if (this.$route.query.province) {
      // 修改，改标题，设置表单初始值
      this.title = "编辑地址";
      this.addressInfo = {
        ...this.$route.query,
        county: this.$route.query.area,
        addressDetail: this.$route.query.address,
      };
      // console.log(this.addressInfo, "---");
    } else {
      // 新增，改标题，设置表单初始值
      this.title = "新增地址";
    }

    // let address = this.$route.
  },
  mounted() {},
};
</script>
<style scoped>
.forms {
  margin-top: 60px;
}
</style>