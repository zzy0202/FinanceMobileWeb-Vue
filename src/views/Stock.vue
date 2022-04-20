<template>
  <div class="stock">
    <div class="title">
      <h5>股票榜单</h5>
    </div>
    <van-tabs v-model="active">
      <van-tab :title="item" v-for="(item,i) in stockType">
        <div class="rank">
          <div class="content" v-for="(item,index) in stockRanking[i]">
            <span class="number">{{ index + 1 }}</span>
            <span class="name">{{ item.name }}</span>
            <span class="arrow">
              <img src="/imgs/up.png" v-if="item.chg>0">
              <img src="/imgs/down.png" v-else>
            </span>
            <span class="current">{{ item.current }}</span>
          </div>
        </div>
      </van-tab>
    </van-tabs>
    <div class="loading" style="margin: 0 auto" v-if="!loadingEnd">
      <van-loading style="text-align:center;"/>
    </div>
  </div>
</template>

<script>
import {getStockRank} from "@/api/stockApi";

export default {
  name: "Stock",
  data() {
    return {
      active: null,
      stockRanking: [],
      stockType: ['全球', '沪深', '港股', '美股'],
      loadingEnd:false,
    }
  },
  async mounted() {
    for (let i = 0; i < 4; i++) {
      let res = await getStockRank({type: i});
      this.loadingEnd = true;
      this.stockRanking[i] = res.data.items;
      this.$forceUpdate();
    }
  }
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

.rank {
  width: 3.5rem;
  background-color: white;
  margin: 0.15rem auto;
  border-radius: 0.1rem;
  overflow: hidden;
}

.content {
  display: flex;
  margin: 0.1rem 0.1rem 0.2rem;
  align-items: center;

  span {
    font-size: 0.14rem;
    line-height: 0.2rem;
    height: 0.2rem;
  }

  .name {
    flex: 7;
  }

  .number {
    flex: 1;
  }

  .current {
    flex: 2;
  }

  .arrow {
    flex: 1;
    margin-right: 0.08rem;
    img {
      width: 0.14rem;
      height: 0.14rem;
      margin: auto auto;
    }
  }
}
</style>
