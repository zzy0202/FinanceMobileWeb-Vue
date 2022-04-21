<template>
  <div class="article">
    <van-icon name="back-top" class="back" size="0.32rem" @click="returnTop"/>
    <div class="articleUnit" @load="getArticleList" v-for="(item,i) in articleArr" v-if="item!==undefined" :key="i" @click="jump(item.original_status.id,item)">
      <div class="header">
        <img
            :src="item.original_status.user.photo_domain+item.original_status.user.profile_image_url.split(',')[0]"
            alt="">
        <div style="margin-left: 0.1rem;">
          <div class="name">{{ item.original_status.user.screen_name }}</div>
          <div class="publishDate">{{ item.original_status.timeBefore }}</div>
        </div>
      </div>
      <div class="content" style="margin: 0 0.05rem 0 0.03rem">
        <p v-html="item.original_status.description"></p>
      </div>
      <div class="footer">
        <van-icon name="share-o" size="0.2rem" style="margin-left: 0.05rem;"/>
        <span>{{ item.original_status.retweet_count }}</span>
        <van-icon name="good-job-o" size="0.2rem"/>
        <span>{{ item.original_status.like_count }}</span>
        <van-icon name="chat-o" size="0.2rem"/>
        <span>{{ item.original_status.reply_count }}</span>
      </div>
    </div>
    <div class="bottom" v-if="loading">正在加载中</div>
    <div class="bottom" v-if="end">你到了世界的尽头</div>
  </div>
</template>

<script>
import {getArticle} from "@/api/homeApi";

export default {
  name: "Article",
  data() {
    return {
      articleArr: [],
      page: 1,
      end: false,
      loading: false,
    }
  },
  methods: {
    async getArticleList() {
      if (!this.end) {
        this.loading = true;
        let res = await getArticle({page: this.page});
        if (res.result && res.result.indexOf('已加载完') !== -1) {
          this.end = true;
          this.loading = false;
        }
        this.page++;
        this.articleArr = this.articleArr.concat(res.items);
      }
    },
    returnTop() {
      cancelAnimationFrame(timer);
      let speed = document.documentElement.scrollTop / 60;
      let timer = requestAnimationFrame(function fn() {
        var oTop = document.body.scrollTop || document.documentElement.scrollTop;
        if (oTop > 0) {
          document.documentElement.scrollTop -= speed;
          timer = requestAnimationFrame(fn);
        } else {
          cancelAnimationFrame(timer);
        }
      });
    },
    debounce(fn, delay) {
      let timer = null;
      return function () {
        if (!timer) {
          timer = setTimeout(fn, delay);
        } else {
          clearTimeout(timer);
          timer = setTimeout(fn, delay);
        }
      }
    },
    show() {
      console.log('loading');
    },
    jump(articleId,params) {
      this.$router.push({name:'Article',params});
    }
  },
  mounted() {
    this.getArticleList();
    let timer = null;
    window.addEventListener('scroll', this.debounce(() => {
      let scrollTop = document.documentElement.scrollTop;
      let scrollHeight = document.documentElement.scrollHeight;
      let innerHeight = window.innerHeight;
      if (scrollHeight - scrollTop - innerHeight < 50) {
        this.getArticleList();
      }
    }, 250));
  }
}
</script>

<style scoped lang="less">
.back {
  position: fixed;
  right: 0;
  top: 50%;
  border-radius: 0.25rem;
  background-color: #f8f6f6;
}

.articleUnit {
  span, div {
    font-size: 0.15rem;
  }

  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 3.68rem;
  border-radius: 0.1rem;
  margin: 0.1rem auto;
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
    margin: 0.12rem 0;

    p {
      font-size: 0.12rem;
      line-height: 0.25rem;
    }
  }

  .footer {
    margin: 0.06rem 0 0.12rem;
    display: flex;
    align-items: center;
    justify-content: start;

    span {
      margin: 0 0.2rem 0 0.07rem;
      font-size: 0.12rem;
    }
  }
}

.bottom {
  font-size: 0.12rem;
  color: darkgray;
  text-align: center;
  margin-bottom: 0.1rem;
}
</style>
