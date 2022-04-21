<template>
  <div class="articlePage">
    <div class="articleUnit">
      <van-nav-bar
          left-arrow
          left-text="返回"
          @click-left="quit"
          :fixed="true"
          :placeholder="true"
      />
      <div class="header">
        <img
            :src="articleDetails.original_status.user.photo_domain+articleDetails.original_status.user.profile_image_url.split(',')[0]"
            alt="">
        <div style="margin-left: 0.1rem;">
          <div class="name">{{ articleDetails.original_status.user.screen_name }}</div>
          <div class="publishDate">{{ articleDetails.original_status.timeBefore }}</div>
        </div>
      </div>
      <h5 class="title">{{ articleDetails.original_status.title }}</h5>
      <p class="content" v-html="articleDetails.original_status.text"></p>
    </div>
    <div class="position" ref="hook"></div>
    <Comment :commentArr="commentArr"></Comment>
    <div class="wrap" style="margin-top: 0.4rem;">
      <div class="bottomNav">
      <span class="operation" @click="like($event)">
        <div class="iconfont icon-like"></div>
        <div>{{ articleDetails.original_status.like_count }}</div>
      </span>
        <span class="operation" @click="star($event)">
        <div class="iconfont icon-star"></div>
        <div>{{ articleDetails.original_status.retweet_count }}</div>
      </span>
        <span class="operation" @click="moveComment">
        <div class="iconfont icon-comment"></div>
        <div>{{ commentArr.count }}</div>
      </span>
      </div>
    </div>
  </div>

</template>

<script>
import {getComment} from "@/api/articleApi";
import Comment from "@/components/Article/Comment";

export default {
  name: "ArticlePage",
  props: ['article'],
  data() {
    return {
      articleId: this.$route.params.id,
      commentArr: [],
      liked: false,
      stared: false,
      showComment: false,
    }
  },
  components: {
    Comment,
  },
  async mounted() {
    if (this.article && this.article.original_status) {
      console.log(this.articleId);
      sessionStorage[this.article.id] = JSON.stringify(this.article);
    }
    console.log(this.articleId);
    this.commentArr = await getComment({id: this.articleId.toString()});
  },
  updated() {
    if (this.article && this.article.original_status) {
      console.log(this.articleId);
      sessionStorage[this.article.id] = JSON.stringify(this.article);
    }
  },
  computed: {
    articleDetails() {
      document.documentElement.scrollTop = 0;
      return (this.article && this.article.original_status) ? this.article : JSON.parse(sessionStorage[this.articleId]);
    }
  },
  methods: {
    quit() {
      this.$router.go(-1);
    },
    like(event) {
      this.liked = !this.liked;
      event.currentTarget.style.color = this.liked ? 'red' : 'black';
      if (this.liked) {
        this.articleDetails.original_status.like_count++;
      } else {
        this.articleDetails.original_status.like_count--;
      }
      this.$forceUpdate();
    },
    star(event) {
      this.stared = !this.stared;
      event.currentTarget.style.color = this.stared ? 'orange' : 'black';
      if (this.stared) {
        this.articleDetails.original_status.retweet_count++;
      } else {
        this.articleDetails.original_status.retweet_count--;
      }
      this.$forceUpdate();
    },
    moveComment() {
      console.log(this.$refs.hook);
      document.documentElement.scrollTop = this.$refs.hook.offsetTop;
    }
  }
}
</script>

<style scoped lang="less">
.articlePage {
  height: 100%;
}

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
    line-height: 0.2rem;

    ::v-deep img {
      width: 3.4rem;
      display: block;
      margin: 0.08rem auto;
    }
  }
}

h5 {
  font-size: 0.17rem;
}

.bottomNav {
  width: 100%;
  background-color: white;
  display: flex;
  position: fixed;
  bottom: 0;
  right: 0;
  justify-content: end;
  border-top: 1px #e5e4e4 solid;

  .operation {
    height: 0.35rem;
    margin: 0 0.1rem 0.1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }

  .iconfont {
    margin: 0.08rem 0.05rem 0.05rem;
    font-size: 0.18rem;
    transition: 0.5s all ease;
  }

  span {
    font-size: 0.14rem;
    display: inline-block;
  }
;
}

.show-enter-active, .show-leave-active {
  transition: all 0.5s;
}

.show-enter, .show-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translateY(1rem);
}
</style>
