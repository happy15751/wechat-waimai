<template>
<!-- 首页 -->
  <div>
    <div class="header"><van-nav-bar fixed title="微信" />
    
    
    </div>
   
    <div class="search" style=" ">
 <van-search fixed
      v-model="value"
      shape="round"
      background="#fff"
      placeholder="搜索"
    />
    </div>
    <div class="xx">
      <div class="weui-panel weui-panel_access" style="padding-bottom: 0px;padding-left:0px;">
        <!--<div class="weui-panel__hd">图文组合列表</div>-->
        <div class="weui-panel__bd">
          <router-link
            v-for="item in list"
            :key="item.index"
            :to="item.navigator"
            class="weui-media-box weui-media-box_appmsg"
          >
            <div class="weui-media-box__hd" style="left:0em">
              <img class="weui-media-box__thumb" :src="item.img" />
              <span
                v-if="item.newsNums > 0"
                class="weui-badge"
                style="position: absolute; top: 0em; left: +5.5em"
                >{{ item.newsNums }}</span
              >
            </div>
            <div class="weui-media-box__bd">
              <h4 class="weui-media-box__title">
                {{ item.name }}
                <span class="weui-media-box__title-after">{{ item.time }}</span>
              </h4>
              <p class="weui-media-box__desc">{{ item.desc }}</p>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        //列表数据
        {
          img:require('../../assets/ftx.jpg'),
          name: "冯三胖",
          desc: "明天吃啥呀？？",
          newsNums: 3,
          time: "08:56",
          navigator: "",
        },
        {
          img: "http://jqweui.com/dist/demos/images/avatar2.jpg",
          name: "冯胖胖",
          desc: "咱们去吃火锅吧",
          newsNums: 5,
          time: "08:57",
          navigator: "",
        },
        {
          img: "http://jqweui.com/dist/demos/images/avatar3.jpg",
          name: "李大胖",
          desc: "咱们去谷园吃饭吧，哪里的饭好好吃",
          newsNums: 1,
          time: "08:56",
          navigator: "",
        },
        {
          // img: "../../assets/tx.jpg",
          img:require('../../assets/dyh.png'),
          name: "订阅号消息",
          desc: "[ 66条]厨达人：精品美食推荐",
          newsNums: 0,
          time: "08:56",
          navigator: "",
        },
        {
          // img: require:("@/assets/tx.jpg"),
          img:require('../../assets/xyt.jpg'),
          name: "山农校园通",
          desc: "快来查询期末成绩吧",
          newsNums: 1,
          time: "08:56",
          navigator: "",
        },
        {
          img:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=116907225,3214345018&fm=26&gp=0.jpg",
          name: "江湖毅然",
          desc: "明天一起去吃饭",
          newsNums: 0,
          time: "08:56",
          navigator: "",
        },
        {
          img:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201412%2F31%2F20141231121437_utmNz.png&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1613898669&t=752964447b9fcaf9339adef5b6edd7c0",
          // img:require('../../assets/xyt.jpg'),
          name: "江湖小毅然",
          desc: "明天再一起去吃饭",
          newsNums: 0,
          time: "08:56",
          navigator: "",
        },
        {
          img: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2390156932,1793376635&fm=26&gp=0.jpg",
          name: "江湖毅然外卖平台",
          desc: "快来点好吃的外卖吧",
          newsNums: 0,
          time: "08:56",
          navigator: "../my/neirong",
        },
      ],
    };
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {},
};
</script>
<style scoped>
.weui-media-box{
    padding: 8px 15px;
  }
.xx{
padding-bottom: 53px;
padding-left:0px;
padding-top:0px ;
}
.search{
padding-bottom: 0px;
padding-left:0px;
padding-top:50px ;
position: relative;
/* top: 50px; */
}
.weui-media-box__title-after{
    float:right;
    color: #ecebeb;
}
.weui-media-box__hd{
    float:left;
}
/* .weui-media-box__thumb{
    left: +60em
} */
</style>