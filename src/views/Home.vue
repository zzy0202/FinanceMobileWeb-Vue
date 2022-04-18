<template>
  <div class="home">
    <!--    这个是Header导航栏-->
    <HeaderNav></HeaderNav>
    <!--    这个是导航列表-->
    <NaviList></NaviList>
    <!--    这是热度内容-->
    <HotSpot></HotSpot>
    <!--这是文章推荐列表-->
    <Article></Article>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderNav from "@/components/Home/HeaderNav";
import NaviList from "@/components/Home/NaviList";
import HotSpot from "@/components/Home/HotSpot";
import Article from "@/components/Home/Article";

export default {
  name: 'Home',
  components: {
    HeaderNav, NaviList, HotSpot, Article,
  },
  data() {
    return {}
  }
}
</script>
