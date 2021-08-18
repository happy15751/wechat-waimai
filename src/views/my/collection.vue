<template>
 <div class="main-bg">
    <div class="weui-navbar" style="position: fixed;width:100%;">
      <div class="main-top">
        <div ontouchend="history.back()" style="padding-left: 10px;"><i class="fa fa-arrow-left fa-lg" style="color: #fff;"></i></div>
        <div class="top-title">
          我的收藏
        </div>
        <div><i class="weui-icon-search" style="color: #fff;"></i></div>
      </div>
    </div>


    <div class="nr">
    <ul class="collec-list">
      <li v-for="item in collections" :key="item">
        <router-link to="" >
          <div class="weui-media-box weui-media-box_appmsg" style="padding-bottom: 5px;">
            <div class="weui-media-box__hd">
              <img class="weui-media-box__thumb label-img" :src="item.img">
            </div>
            <div class="weui-media-box__bd">
              <h4 class="two-title">
                {{item.title}}
              </h4>
            </div>
          </div>
          <div class="btm-txt">
            <span>{{item.type}}</span>
            <span>{{item.time}}</span>
          </div>
        </router-link>
      </li>
    </ul>
    <br/>
    <br/>
    </div>
  </div>
</template>
<script>
  export default {
    data (){
      return {
        collections: [
          {img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2865927209,1296044068&fm=26&gp=0.jpg' ,title: '深夜的小龙虾你想吃吗?', type: '深夜放毒', time: '2020-1-24'},
          {img: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1320386730,3153153183&fm=26&gp=0.jpg' ,title: '羊肉串你喜欢吗？！', type: '深夜放毒', time: '2020-1-23'},
          {img: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1355070550,5232740&fm=11&gp=0.jpg' ,title: '韩式烤冷面，你吃过吗！', type: '深夜放毒', time: '2020-1-22'},
          {img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2343148560,2821942974&fm=26&gp=0.jpg' ,title: '鱼肉小火锅，挑动你的味蕾！！！', type: '深夜放毒', time: '2020-1-21'},
          {img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwx2.sinaimg.cn%2Fcrop.0.69.1620.901%2Fc48bfeb1ly1gj476tdi5zj21900u041n.jpg&refer=http%3A%2F%2Fwx2.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1613962381&t=643cab9e62465183df9ffabe9e03ad56' ,title: '香喷喷的鱼丸来袭！', type: '丸子教材', time: '2020-1-20'},
          {img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=124813080,2789890940&fm=26&gp=0.jpg' ,title: '这样的红烧肉你爱了吗', type: '深夜放毒', time: '2020-1-19'}
        ]
      }
    }
  }
</script>
<style scoped>
  .main-top{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    width: 100%;
    height: 50px;
    padding: 0 15px;
    color: #fff;
    background: #000000;
  }
   .top-title{
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    height: 50px;
    line-height: 50px;
    padding-left: 15px;
    /*text-align: right;*/
  }
  .nr{
    padding-top: 50px;
  }

  .collec-list{
    margin: 0px 15px 0 15px;
  }
  .collec-list li{
    margin-top: 0px;
    background-color: #ffffff;
  }
  .btm-txt{
    padding: 0 0 15px 15px;
    color: #999;
  }
  .label-img{
    width: 100%;
    height: 100%;
  }
  .two-title{
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  .weui-media-box__hd{
    width: 90px;
    height: 90px;
  }
</style>
