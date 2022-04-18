<template>
  <div class="naviList">
    <van-grid direction="horizontal" :column-num="4" :border="false">
      <van-grid-item v-for="item in navListArr" :icon="item.imgSrc"  :text="item.title">
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
export default {
  name: "NaviList",
  data() {
    return {
      navListArr: [
        {title:'大盘行情',imgSrc:'/imgs/nav1.png',linkTo:''},
        {title:'股票组合',imgSrc:'/imgs/nav2.png',linkTo:''},
        {title:'股票开户',imgSrc:'/imgs/nav3.png',linkTo:''},
        {title:'选股攻略',imgSrc:'/imgs/nav4.png',linkTo:''},
        {title:'指数选基',imgSrc:'/imgs/nav5.png',linkTo:''},
        {title:'基金组合',imgSrc:'/imgs/nav6.png',linkTo:''},
        {title:'私募基金',imgSrc:'/imgs/nav7.png',linkTo:''},
        {title:'基金必看',imgSrc:'/imgs/nav8.png',linkTo:''},
      ]
    }
  }
}
</script>

<style scoped lang="less">
::v-deep .van-grid-item__content--horizontal {
  flex-direction: column;
}
::v-deep .van-grid-item__content--horizontal .van-grid-item__icon+.van-grid-item__text {
  margin-top: 0.1rem;
}
</style>
