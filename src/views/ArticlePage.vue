<template>
  <div class="articlePage">
    <div class="articleUnit">
      <van-icon name="revoke" size="0.3rem" @click="quit"/>
      <div class="header">
        <img
            :src="articleDetails.original_status.user.photo_domain+articleDetails.original_status.user.profile_image_url.split(',')[0]"
            alt="">
        <div style="margin-left: 0.1rem;">
          <div class="name">{{ articleDetails.original_status.user.screen_name }}</div>
          <div class="publishDate">{{ articleDetails.original_status.timeBefore }}</div>
        </div>
      </div>
      <h5 class="title">{{articleDetails.original_status.title}}</h5>
      <p class="content" v-html="articleDetails.original_status.text"></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ArticlePage",
  props: ['article'],
  mounted() {
   if(this.article&&this.article.original_status) {
     sessionStorage[this.article.id] = JSON.stringify(this.article);
   }
  },
  computed: {
    articleDetails() {
      document.documentElement.scrollTop = 0;
      console.log(document.documentElement.scrollTop)
      return (this.article&&this.article.original_status)?this.article:JSON.parse(sessionStorage[this.$route.params.id]);
    }
  },
  methods:{
    quit() {
      this.$router.go(-1);
    }
  }
}
</script>

<style scoped lang="less">
.articleUnit {
  span, div {
    font-size: 0.12rem;
  }
  h5 {
    font-size: 0.16rem;
    margin: 0.1rem 0.1rem;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  background-color: white;
  box-shadow: 0.01rem 0.01rem 0.01rem #dcdcdc;

  .header {
    margin: 0.12rem 0 0.06rem 0.05rem;
    display: flex;
    justify-content: start;
    align-items: center;

    img {
      width: 0.3rem;
      height: 0.3rem;
      border-radius: 0.3rem;
    }

    div {
      font-size: 0.08rem;
      color: darkgrey;
    }
  }
  .content {
    margin: 0.1rem 0.1rem;
    font-size: 0.135rem;
    line-height:0.2rem;
    ::v-deep img {
      width: 3.4rem;
      height: 2.5rem;
      display: block;
      margin: 0.08rem auto;
    }
  }
}
</style>
