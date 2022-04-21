<template>
  <div class="meContent">
    <h5>服务</h5>
    <van-cell icon="edit" title="申请专栏" is-link />
    <van-cell icon="cash-back-record" title="创作者权益" is-link />
    <van-cell icon="comment-circle-o" title="建议反馈" is-link />

    <h5>其他</h5>
    <van-cell icon="service-o" title="帮助与客服" is-link />
    <van-cell icon="setting-o" title="设置" is-link />
  </div>
</template>

<script>
export default {
  name: "MeContent"
}
</script>

<style scoped lang="less">
h5 {
  font-size: 0.18rem;
  margin: 0.3rem 0.2rem 0.15rem 0.14rem;
}
::v-deep .van-cell__title {
  height: 0.24rem;
  line-height: 0.24rem;
}
</style>
