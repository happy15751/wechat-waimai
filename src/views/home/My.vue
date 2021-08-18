<template>
<!-- 我的页面 -->
  <div>
    <div class="header"><van-nav-bar title="我的" /></div>


    <div>
    <div class="weui-panel weui-panel_access" style="margin-top: 20px">
      <!--<div class="weui-panel__hd">图文组合列表</div>-->
      <div class="weui-panel__bd">
        <router-link to="../my/user" class="weui-media-box weui-media-box_appmsg">
          <div class="weui-media-box__hd">
            <img class="weui-media-box__thumb" src="../../assets/tx.jpg"/>
          
          </div>
          <div class="weui-media-box__bd">
            <h4 class="weui-media-box__title">江湖毅然</h4>
            <p class="weui-media-box__desc">微信号：happy15751</p>
          </div>
          <div class="weui-media-box__ft"><i class="fa fa-qrcode fa-lg" style="color: #333;"></i></div>
        </router-link>
      </div>
    </div>
    

    </div>
  

    <br />

    <!-- 个人列表 -->
    <div class="list">
      <router-link to="../my/purse">
      <van-cell title="" icon="chat-o" is-link>
        <template #icon>
          <van-image width="25" height="25" src="./wcpay.png" />
          <span class="lb1"> 支付</span>
        </template>
      </van-cell>
      </router-link>
      <br/>
      <router-link to="../my/collection">
      <van-cell title="" icon="location-o" is-link >
        <template #icon>
          <van-image width="25" height="25" src="./me_more-my-favorites.png" />
          <span class="lb1"> 收藏</span>
        </template>
      </van-cell>
      </router-link>
      
      <van-cell title="" icon="gold-coin-o" is-link @click="toAddress">
        <template #icon>
          <van-image width="25" height="25" src="./me_more-my-album.png" />
          <span class="lb1"> 相册</span>
        </template>
      </van-cell>

      

      


      <van-cell title="" icon="phone-o" is-link @click="toAddress">
        <template #icon>
          <van-image
            width="25"
            height="25"
            src="./me_my-card-package-icon.png"
          />
          <span class="lb1">卡包 </span>
        </template>
      </van-cell>
  

      <van-cell title="" icon="phone-o" is-link @click="toAddress">
        <template #icon>
          <van-image width="25" height="25" src="./me_more-expression.png" />
          <span class="lb1">表情 </span>
        </template>
      </van-cell>
      <br />
      <br />
      <van-cell title="" icon="phone-o" is-link @click="toAddress">
        <template #icon>
          <van-image width="25" height="25" src="./me_more-setting.png" />
          <span class="lb1"> 设置</span>
        </template>
      </van-cell>
      <!-- 退出 -->
      <!-- <van-button class="logout" block round type="danger" @click="toLogin">退出</van-button> -->
    </div>
  </div>
</template>

<script>
//Dialog弹出框
import { Dialog } from "vant";

export default {
  data() {
    return {
      //         fileList: [
      //     { url: 'https://img.yzcdn.cn/vant/leaf.jpg' },
      //     // Uploader 根据文件后缀来判断是否为图片文件
      //     // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
      //     { url: 'https://cloud-image', isImage: true },
      //   ],
    };
  },
  computed: {},
  methods: {
    //联系我们
   
    //跳转到地址页
    // toAddress() {
    //   //路由api的形式去路由跳转,用的是路由编程式导航
    //   this.$router.push("/myDetail/address");
    // },
   
  },
  created() {},
  mounted() {},
};
</script>
<style scoped>
/* .circle{
  margin-top:25px;
}
van-button{
  margin-top: 10px;
  width: 20px;
} */
.info {
  margin-top: 40px;
  text-align: center;
}
.hello {
  width: 50%;
  border: 1px solid #e2e2e2;
  border-radius: 10px;
  padding: 10px;
  margin: 20px auto;
}
.logout {
  width: 80%;
  margin: 20px auto;
}
.lb {
  margin-left: 100px;
  /* margin-right: 100px; */
  display: block;
  float: left;
}
.lb2 {
  margin-left: 50px;
  float: left;
  display: block;
}
.lb1 {
  margin-left: 10px;
}

.lb3 {
  display: block;
  float: left;
}
</style>