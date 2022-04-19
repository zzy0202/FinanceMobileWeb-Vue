<template>
  <div class="bottomNav">
    <van-tabbar v-model="active" v-show="show">
      <van-tabbar-item icon="wap-home-o" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="chart-trending-o" to="/stock">股票</van-tabbar-item>
      <van-tabbar-item icon="after-sale" to="/fund">基金</van-tabbar-item>
      <van-tabbar-item icon="contact" to="/me">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "BottomNav",
  data() {
    return {
      active:null,
      show:true,
      showNavPath : ['/','/me','/stock','/fund'],
    }
  },
  watch:{
    $route:{
      handler(newRoute,OldRoute) {
        this.show = this.showNavPath.indexOf(newRoute.path) !== -1;
      }
    }
  }
}
</script>

<style scoped>
.bottomNav {
  margin-top: 0.65rem;
}
</style>
