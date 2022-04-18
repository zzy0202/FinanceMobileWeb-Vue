<template>
  <div class="home">
    <!--    这个是Header导航栏-->
    <HeaderNav></HeaderNav>
    <!--    这个是导航列表-->

  </div>
</template>

<script>
// @ is an alias to /src
import HeaderNav from "@/components/Home/HeaderNav";

export default {
  name: 'Home',
  components: {
    HeaderNav,
  }
}
</script>
