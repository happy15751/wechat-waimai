<template>

<!--主页-->
  <div class="home">
     <van-tabbar fixed route v-model="active">  
       <!-- <van-tabbar-item replace to="/home/index" icon="home-o">微信</van-tabbar-item> -->
       <van-tabbar-item replace to="/home/index" icon="home-o">微信</van-tabbar-item>

       <van-tabbar-item replace to="/home/Chat" icon="search">通讯录</van-tabbar-item>
       <van-tabbar-item replace to="/home/faxian" icon="friends-o">发现
       <template #icon>
            <van-image  width="15px" height="15px" src="./fx.png" />
          </template>
       </van-tabbar-item>
       <van-tabbar-item replace to="/home/my" icon="friends-o">我的</van-tabbar-item>

     </van-tabbar>
     <!--给子组件提供容器-->
     <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  //数据模型
  data(){
    return{
      active:0,
    };
  },
};
</script>

