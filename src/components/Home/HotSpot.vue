<template>
  <div class="hotspot">
    <h5 class="title">今日市场</h5>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="skyblue">
      <van-swipe-item v-for="i in 3" >
        <van-grid :column-num="3" :border="false">
          <van-grid-item v-for="item in hotspotData.slice((i-1)*3,(i-1)*3+3)" >
            <h5>{{ item.quote.name }}</h5>
            <h5 :class="parseFloat(item.quote.chg)>0?'red':'green'">{{ item.quote.chg }}%</h5>
            <h5 :class="parseFloat(item.quote.chg)>0?'red':'green'">{{ item.quote.current }}</h5>
          </van-grid-item>
        </van-grid>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import * as api from '@/api/homeApi'

export default {
  name: "HotSpot",
  data() {
    return {
      hotspotData: [],
    }
  },
  async mounted() {
    let res = await api.getHotspot();
    this.hotspotData = res.data.items;
  },
  computed: {
    hotLength() {
      return Math.ceil(this.hotspotData.length/3);
    }
  }
}
</script>

<style scoped lang="less">
h5 {
  font-size: 0.17rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  background-color: white;
  padding: 0.02rem;
}

.title {
  margin: auto auto;
  text-align: center;
}

::v-deep .van-grid-item {
  max-width: 33.33%;

  h5 {
    font-size: 0.15rem;
    margin: 0.02rem;
  }

  .green {
    color: forestgreen;
  }

  .red {
    color: orangered;
  }

  .bg {
    background-color: pink;
  }
}
::v-deep .van-swipe__indicators {
  bottom: 0;
  .van-swipe__indicator {
    background-color: grey;
  }
}
.test {
  width: 1.2rem;
  height: 10rem;
  background-color: pink;
}
</style>
