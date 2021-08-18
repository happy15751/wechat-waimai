<template>
<!-- // 发现页面 -->
    <div>
        <!-- <div class="titleclass">发现</div> -->
        <div fixed class="header"><van-nav-bar title="发现"  /></div>
        <br>
        <van-cell is-link
                  @click="friendscircleClick">
            <template slot="title">
                <svg class="icon"
                     aria-hidden="true"
                     style="font-size:20px;">
                    <use xlink:href="#icon-friends"></use>
                </svg>
                <span class="cellspantitleclass">朋友圈</span>
            </template>
        </van-cell>
        <br>
        <van-cell>
            <template slot="title">
                <svg class="icon"
                     aria-hidden="true"
                     style="font-size:20px;">
                    <use xlink:href="#icon-saoyisao"></use>
                </svg>
                <span class="cellspantitleclass">扫一扫</span>
            </template>
        </van-cell>
        <van-cell>
            <template slot="title">
                <svg class="icon"
                     aria-hidden="true"
                     style="font-size:20px;">
                    <use xlink:href="#icon-yaoyiyao"></use>
                </svg>
                <span class="cellspantitleclass">摇一摇</span>
            </template>
        </van-cell>
        <br>
        <van-cell>
            <template slot="title">
                <svg class="icon"
                     aria-hidden="true"
                     style="font-size:20px;">
                    <use xlink:href="#icon-kanyikan"></use>
                </svg>
                <span class="cellspantitleclass">看一看</span>
            </template>
        </van-cell>
        <van-cell>
            <template slot="title">
                <svg class="icon"
                     aria-hidden="true"
                     style="font-size:20px;">
                    <use xlink:href="#icon-souyisou"></use>
                </svg>
                <span class="cellspantitleclass">搜一搜</span>
            </template>
        </van-cell>
        <br>
        <van-cell>
            <template slot="title">
                <svg class="icon"
                     aria-hidden="true"
                     style="font-size:20px;">
                    <use xlink:href="#icon-fujinderen"></use>
                </svg>
                <span class="cellspantitleclass">附近的人</span>
            </template>
        </van-cell>
        <br>
        <van-cell>
            <template slot="title">
                <svg class="icon"
                     aria-hidden="true"
                     style="font-size:20px;">
                    <use xlink:href="#icon-gouwu-copy-copy"></use>
                </svg>
                <span class="cellspantitleclass">购物</span>
            </template>
        </van-cell>
        <van-cell>
            <template slot="title">
                <svg class="icon"
                     aria-hidden="true"
                     style="font-size:20px;">
                    <use xlink:href="#icon-youxi"></use>
                </svg>
                <span class="cellspantitleclass">游戏</span>
            </template>
        </van-cell>
        <br>
        <van-cell>
            <template slot="title">
                <svg class="icon"
                     aria-hidden="true"
                     style="font-size:20px;">
                    <use xlink:href="#icon-xiaochengxu"></use>
                </svg>
                <span class="cellspantitleclass">小程序</span>
            </template>
        </van-cell>

        <mytabbar></mytabbar>
    </div>

</template>

<script>
// 引入阿里图标js
    import "../../assets/ali/iconfont/iconfont"
export default {
  data() {
    return {};
  },
  computed: {},
  methods: {
     friendscircleClick () {
                this.$router.push( '/friendscircle' );
            } ,
  },
  created() {},
  mounted() {},
};
</script>
<style scoped>
.icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
}

.titleclass {
    margin-left: 10px;
}

.cellspantitleclass {
    margin-left: 10px;
}

</style>