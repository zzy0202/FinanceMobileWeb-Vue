<template>
  <div id="app">
    <Home></Home>
  </div>
</template>

<script>
  import Home from "@/views/Home";
  export default {
    name:"App",
    components:{
      Home,
    }
  }
</script>
<style lang="less">
* {
  padding: 0;
  margin: 0;
}
html {
  background-color: rgb(247,248,250);
}
</style>
