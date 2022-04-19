<template>
  <div class="stock">
    <div class="title">
      <h5>股票榜单</h5>
    </div>
    <van-tabs v-model="active">
      <van-tab title="标签 1">内容 1</van-tab>
      <van-tab title="标签 2">内容 2</van-tab>
      <van-tab title="标签 3">内容 3</van-tab>
      <van-tab title="标签 4">内容 4</van-tab>
    </van-tabs>

  </div>
</template>

<script>
export default {
  name: "Stock"
}
</script>

<style scoped lang="less">
h5 {
  font-size: 0.15rem;
  margin: 0 0 0 0.1rem;
  line-height: 0.5rem;
  height: 0.5rem;
}
.title {
  background-color: white;
  border-bottom: 1px #e2e2e2 solid;
}
</style>
