<template>
  <div>
  <!-- 头部 -->
  <div class="header">
    <van-nav-bar fixed title="订单" ></van-nav-bar>
  </div>
  <!-- 订单分类和内容 -->
  <div class="order">
    <!-- {{orderData}}
    {{active}} -->
    <van-tabs v-model="active" sticky animated swipeable> 
       <van-tab 
          v-for="item in types" :key="item.name" :name="item.value" :title="item.name" >
           <!-- {{orderList}} -->
           <van-empty v-if="orderList.length==0"
               class="custom-image"
               image="https://img.yzcdn.cn/vant/custom-empty-image.png"
               description="暂无数据"
            />
           <!-- 订单 -->
           <div  v-else class="orderDetail" v-for="item in orderList" :key="item.id">
             订单编号：{{item.id}}
           <!-- 商品展示 -->
          <van-card  
            v-for="it in item.orderLines" 
            :key="it.id" 
            :num="it.number"  
            :price="it.price"  
            :desc="it.product.description" 
            :title="it.product.name"
            :thumb="it.product.photo" >
              <template #tags>
                <van-tag plain type="danger">
                  下单时间:{{moment(item.orderTime).format('YYYY-MM-DD HH:mm:ss')}}
                </van-tag>
              </template>
          </van-card>
       服务地址：{{item.address.province}}{{item.address.city}}
       {{item.address.area}}{{item.address.address}}
       <van-button v-if="item.status=='待支付'" type="info" size="small">支付</van-button>
           </div>
      <br>
      <br>
      <br>
      </van-tab>
    </van-tabs>
  </div>
</div>
</template>

<script>
let moment=require("moment");
import axios from '../../utils/request'
export default {
  data() {
    return {
      active:"",
      orderData:[],
      customerId:27,
      types:[{
        name:'全部',
        value:''
      },
      {
        name:'待派单',
        value:'待派单'
      },
      {
        name:'待接单',
        value:'待接单'
      },
      {
        name:'待确认',
        value:'待确认'
      },
      {
        name:'待支付',
        value:'待支付'
      },

      {
        name:'已完成',
        value:'已完成'
      },
    ],
    };
  },
  //计算属性:有依赖关系的变量
  computed: {
    //每个标签页显示的内容，从orderData中过滤active数据,
    orderList(){
      return this.orderData.filter((item)=>{
        if(this.active){
          return item.status==this.active;
        }
        //active "" true
        return true;
      })
    },
  },
  methods: {
    moment,
  },
  created() {
     //发两次请求，获取所有的订单和级联信息
     axios.get('/order/query',{
       params:{
        customerId:this.customerId,
       },  
     }).then((res)=>{
       this.orderData=res.data.data;
     });
  },
  mounted() {}
};
</script>

<style scoped>
  .order{
    margin-top: 60px;
  }
  .orderDetail{
    border: 1px solid grey;
    padding: 10px 0;
    margin: 10px;
    box-shadow: 0px 0px 3px grey;
    border-radius: 5px;
  }
</style>