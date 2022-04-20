<template>
  <div class="fund">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item,i) in bannerArr">
        <van-image :src="item.icon_url" fit="fill"/>
      </van-swipe-item>
    </van-swipe>
    <van-tabs type="card" v-if="loadingEnd">
      <van-tab :title="item.tab_name" v-for="item in tabListArr">
        <div class="content">
          <div class="title">{{ item.comment }}</div>
          <div class="tips">{{ item.tips }}</div>
          <div class="box" style="margin: 0.1rem auto">
            <div class="data" v-for="(content) in item.items">
              <img :src="content.img_src">
              <span class="name">{{ content.name }}</span>
              <span class="pe">
              <span class="description">{{ content.content[0].desc }}</span>
              <span class="description">{{ content.content[0].value }}</span>
            </span>
              <span class="percentage">
              <span class="description">{{ content.content[1].desc }}</span>
              <span class="description">{{ content.content[1].value }}</span>
            </span>
            </div>
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
import {getFund, getFundTabList} from "@/api/fundApi";

export default {
  name: "Fund",
  data() {
    return {
      bannerArr: [],
      tabListArr: [],
      loadingEnd:false,
    }
  },
  async mounted() {
    getFund().then(res => {
      this.bannerArr = res.data.items;
    });
    getFundTabList().then(res => {
      this.tabListArr = res.data.tab;
      console.log(this.tabListArr);
      this.loadingEnd = true;
    });
  }
}
</script>

<style scoped lang="less">
::v-deep .van-swipe__indicators {
  bottom: 0.32rem;
}

::v-deep .van-swipe__indicator {
  background-color: #666;
}
.box {
  background-color: white;
  width: 3.5rem;
  border-radius: 0.1rem;
}

.content {
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  div {
    margin: 0.1rem 0.1rem 0.04rem 0.1rem;
    font-size: 0.14rem;
  }

  .title {
    color: orange;
    font-weight: 800;
    margin-top: 0.18rem;
  }

  .tips {
    color: grey;
    line-height: 0.20rem;
  }
  .data {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border-bottom: 0.02rem rgb(245,247,249) solid;
    div {
      font-size: 0.12rem;
    }
    img {
      width: 0.90rem;
      height: 0.90rem;
    }
    .name {
      flex: 2;
      text-align: center;
      line-height: 0.25rem;
    }
    .pe,.percentage {
      flex: 1.5;
      display: flex;
      text-align: center;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      span {
        margin-bottom: 0.11rem;
      };
    }
  }
}
</style>
