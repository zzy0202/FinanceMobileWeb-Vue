<template>
  <div id="app">
    <keep-alive>
      <router-view>
      </router-view>
    </keep-alive>
    <BottomNav></BottomNav>
  </div>
</template>

<script>
  import Home from "@/views/Home";
  import BottomNav from "@/components/Home/BottomNav";
  import Stock from "@/views/Stock";
  export default {
    name:"App",
    data() {
      return {
        active:null,
      }
    },
    components:{
      Home,BottomNav,Stock
    }
  }
</script>
<style lang="less">
* {
  padding: 0;
  margin: 0;
}
html {
  background-color: rgb(245, 247, 249);
}
</style>
