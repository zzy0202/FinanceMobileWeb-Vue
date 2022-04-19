<template>
  <div class="headerNav">
    <van-nav-bar :fixed="true">
      <template #left>
        <span class="iconfont icon-gerenzhongxin"></span>
      </template>
      <template #title>
        <van-search
            v-model="value"
            shape="round"
            placeholder="请输入搜索关键词"
        />
      </template>
      <template #right>
        <span class="icon-youxiang1 iconfont" style="font-size: 0.26rem"></span>
      </template>
    </van-nav-bar>
  </div>
</template>

<script>
export default {
  name: "HeaderNav",
  data() {
    return {
      value:"",
      show:false,
    }
  },
  mounted() {
    window.addEventListener('scroll',()=>{
      if(document.documentElement.scrollTop<40) {
        this.show = false;
      }
      else {
        this.show = true;
      }
    })
  }
}
</script>

<style scoped lang="less">
.iconfont {
  font-size: 0.22rem;
}
::v-deep .van-nav-bar__title {
  max-width: 100%;
  width: 2.5rem;
}
</style>
