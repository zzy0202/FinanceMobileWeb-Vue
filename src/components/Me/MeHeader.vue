<template>
  <div class="meHeader">
    <div class="bg" style="background-image:url('./imgs/meBg.png');"></div>
    <div class="content">
      <div class="upperInfo">
        <van-cell-group inset v-if="!user">
          <van-cell title="登录财经通" to="/login" is-link value="登录个人账号"/>
        </van-cell-group>

        <van-cell v-else style="border-radius: 0.07rem;border-bottom: 0.01rem solid #efefef;">
          <template #title>
            <div class="profile">
              <img :src="user.avatar">
              <span >{{user.nickname}}</span>
            </div>
          </template>
        </van-cell>
      </div>
      <div class="bottomInfo">
        <span class="bookmark">
          <img src="/imgs/me1.png">
          <div>收藏</div>
        </span>
        <span class="comment">
          <img src="/imgs/me2.png">
          <div>评论</div>
        </span>
        <span class="liked">
          <img src="/imgs/me3.png">
          <div>赞过</div>
        </span>
        <span class="history">
          <img src="/imgs/me4.png">
          <div>最近</div>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex';

export default {
  name: "MeHeader",
  computed: {
    ...mapState({
      user: state => state.user,
    })
  },
  methods:{
  }
}
</script>

<style scoped lang="less">
.bg {
  height: 1.4rem;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.meHeader {
  position: relative;
}

.content {
  width: 3.4rem;
  height: 1.8rem;
  background-color: white;
  margin: -1rem auto 0;
  border-radius: 0.1rem;
}

.bottomInfo {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 0.2rem;

  span {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    div {
      font-size: 0.13rem;
      margin-top: 0.1rem;
    }

    img {
      width: 0.3rem;
      height: 0.3rem;
    }
  }
}
.profile {
  display: flex;
  justify-content: start;
  margin-left:0.04rem;
  border-radius: 0.3rem;
  img {
    width: 0.4rem;
    height: 0.4rem;
    border-radius: 0.4rem;
  }
  span {
    margin-top: 0.05rem;
    margin-left: 0.1rem;
    line-height: 0.38rem;
  }
}
</style>
