<template>
  <div class="comment"  style="z-index: 99">
    <h4>评论</h4>
    <div class="commentUnit" v-for="(item,i) in commentArr.comments" :key="i">
      <div class="header" style="margin-top: 0.1rem;">
        <img :src="item.user.photo_domain+item.user.profile_image_url.split(',')[0]">
        <span style="margin-left: 0.1rem;">{{item.user.screen_name}}</span>
      </div>
      <p v-html="item.text"></p>
      <div class="comment"></div>
    </div>
    <div style="font-size: 0.14rem;text-align:center; margin-top: 0.09rem;">因为后台服务限制,目前暂不支持发表评论</div>
  </div>
</template>

<script>
export default {
  name: "Comment",
  props:['commentArr'],
  mounted() {
    console.log(this.commentArr);
  },
  methods:{
    alert(hello) {
      alert('ksksks');
    }
  }
}
</script>

<style scoped lang="less">
.commentUnit {
  background-color: #efefef;
  display: flex;
  flex-direction: column;
  margin: 0.08rem 0.1rem 0;
  height: 1.2rem;
  .header {
    display: flex;
    align-items: center;
    justify-content: start;
  }
  img {
    width: 0.3rem;
    height: 0.3rem;
    border-radius: 0.3rem;
  }
  span {
    font-size: 0.14rem;
  }
  p {
    margin-top: 0.2rem;
    font-size: 0.14rem;
  }
}

h4 {
  font-size: 0.2rem;
  margin: 0.15rem 0.1rem;
}
</style>
