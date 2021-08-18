<template>
  <!-- 通讯录页面 -->
  <div>
    <!-- <div fixed class="titleclass">通讯录</div> -->
    <div class="header"><van-nav-bar fixed title="通讯录" /></div>

    <br />
    <br />
    <van-cell>
      <template slot="title">
        <svg class="icon" aria-hidden="true" style="font-size: 30px">
          <use xlink:href="#icon-pengyou"></use>
        </svg>

        <span class="cellspantitleclass">新的朋友</span>
      </template>
    </van-cell>
    <van-cell>
      <template slot="title">
        <svg class="icon" aria-hidden="true" style="font-size: 30px">
          <use xlink:href="#icon-qunliao"></use>
        </svg>
        <span class="cellspantitleclass">群聊</span>
      </template>
    </van-cell>
    <van-cell>
      <template slot="title">
        <svg class="icon" aria-hidden="true" style="font-size: 30px">
          <use xlink:href="#icon-biaoqian"></use>
        </svg>
        <span class="cellspantitleclass">标签</span>
      </template>
    </van-cell>

    <van-cell>
      
      <template slot="title">
 <router-link to="../my/neirong">
        <svg class="icon" aria-hidden="true" style="font-size: 30px">
          <use xlink:href="#icon-gongzhonghao"></use>
        </svg>
        <span class="cellspantitleclass">公众号</span>
 </router-link>
      </template>
      
    </van-cell>
    <br />
    <div class="titleclass">
      我的通讯录
      <van-index-bar>
        <van-index-anchor index="A" />
        <van-cell title="">
          <template #icon>
            <van-image width="40" height="40" src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3537964316,3840899981&fm=26&gp=0.jpg" />
            <span class="txl" style="">阿里巴巴</span>
          </template>
        </van-cell>

        <van-index-anchor index="B" />
        <van-cell title="">
          <template #icon>
            <van-image width="40" height="40" src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3538746430,3433996765&fm=26&gp=0.jpg" />
            <span class="txl" style="">杯里泡泡</span>
          </template>
        </van-cell>
        <van-cell title="">
          <template #icon>
            <van-image width="40" height="40" src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fbpic.588ku.com%2Foriginal_origin_min_pic%2F19%2F01%2F28%2F1a4b3ef35e7be34847a34859fd0b2494.jpg&refer=http%3A%2F%2Fbpic.588ku.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1613894344&t=9669735bdb58f019a134338baed7f07d" />
            <span class="txl" style="">被里躺躺</span>
          </template>
        </van-cell>

        <van-index-anchor index="C" />
        <van-cell title="">
          <template #icon>
            <van-image
              width="50"
              height="50"
              src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2308717593,2056457219&fm=26&gp=0.jpg"
            />
            <span class="txl" style="">车里看看</span>
          </template>
        </van-cell>

        <van-index-anchor index="J" />
        <van-cell title="">
          <template #icon>
            <van-image
              width="50"
              height="50"
              src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=116907225,3214345018&fm=26&gp=0.jpg"
            />
            <span class="txl" style="">江湖毅然</span>
          </template>
        </van-cell>
        <br />
        <br />
      </van-index-bar>
    </div>

    <mytabbar></mytabbar>
  </div>
</template>

<!-- js脚本代码片段 -->
<script>
</script>

<!-- 样式代码片段  scoped -->
<style scoped>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

.titleclass {
  margin-top: 0px;
  margin-left: 0px;
}

.cellspantitleclass {
  margin-left: 10px;
  font-size: 15px;
}
.txl {
  margin-left: 10px;
  margin-top: 10px;
  font-size: 20px;
}
</style>
