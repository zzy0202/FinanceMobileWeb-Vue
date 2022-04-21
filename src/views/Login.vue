<template>
  <div class="login">
    <div class="header">
      <div style="flex: 1;">
        <img class="logo" src="/imgs/logo.png"><span class="name">熊熊财经通</span>
      </div>
      <div @click="$router.go(-1)" style="flex: 1">
        <img class="quit" src="/imgs/quit.png"><span style="line-height: 0.22rem">退出</span>
      </div>
    </div>
    <div class="content">
      <div class="logo">
        <img class="logoImg" src="/imgs/logo.png">
        <div>登录账户</div>
      </div>
      <div class="loginBox">
        <div class="choose">
          <span @click="move('left')">验证码登录</span>
          <span @click="move('right')">密码登录</span>
          <div ref="activeLine" class="activeLine"></div>
        </div>
        <transition :name="show" mode="out-in">
          <div class="input" style="margin-top: 0.1rem;" v-if="show==='right'" key="password">
            <input v-model="account" placeholder="账户名/手机号" class="phoneNumber">
            <input v-model="password" placeholder="密码" class="password">
          </div>
          <div class="input" style="margin-top: 0.1rem;position: relative" v-if="show==='left'" key="verifyCode">
            <input v-model="account" placeholder="手机号" class="phoneNumber">
            <input placeholder="验证码" class="password">
            <button class="verify" @click="getVerifyCode">获取验证码</button>
          </div>
        </transition>
      </div>
      <van-button @click="login" type="info" style="width: 3rem;border-radius: 0.06rem;margin-top: 0.2rem;">登录
      </van-button>
    </div>
  </div>
</template>

<script>
import {getVerifyCode} from "@/api/loginApi";
export default {
  name: "Login",
  data() {
    return {
      show: 'left',
      account: '',
      password: '',
    }
  },
  methods: {
    move(direction) {
      if (direction === 'right') {
        this.$refs.activeLine.style.left = '1.03rem'
        this.show = direction;
      } else {
        this.$refs.activeLine.style.left = '0';
        this.show = direction;
      }
    },
    async login() {
      let res =await this.$store.dispatch('asyncLogin', {account: this.account, password: this.password});
      if(res.successLogin) {    //登录成功,跳转回到/me
        this.$bus.$emit('hello',res.user);
        this.$router.go(-1);
      }
    },
    async getVerifyCode() {
      let res = await getVerifyCode({mobile:this.account});
      console.log(res);
    }
  }
}
</script>

<style scoped lang="less">
span {
  font-size: 0.16rem;
}

.login {
  background-color: white;
  width: 100%;
  position: absolute;
  bottom: 0;
  top: 0;
  height: 98vh;
  .header {
    margin-top: 0.1rem;
    height: 0.5rem;
    position: relative;
    border-bottom: 0.01rem lightgray solid;
    display: flex;
    align-items: center;
    justify-content: center;
    span, img {
      width: 0.40rem;
      height: 0.25rem;
      display: block;
      top: 0.09rem;
      right: 0.1rem;
      position: absolute;
      font-size: 0.16rem;
      color: grey;
    }

    .logo {
      left: 0.15rem;
      height: 0.3rem;
      width: 0.3rem;
      margin-bottom: 0.03rem;
      top: 0.07rem;
    }

    .quit {
      top: 0.1rem;
      right: 0.587rem;
      width: 0.2rem;
      height: 0.2rem;
    }

    .name {
      top: 0.12rem;
      left: 0.53rem;
      height: 0.2rem;
      width: 1rem;
    }
  }

  .content {
    width: 3.7rem;
    margin: 0.6rem auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    .logo {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      margin-top: 0.2rem;

      img {
        width: 0.4rem;
        height: 0.4rem;
      }

      div {
        font-size: 0.28rem;
        margin-top: 0.2rem;
        font-weight: 400;
      }
    }

    .loginBox {
      display: flex;
      flex-direction: column;
      //align-items: center;
      justify-content: center;

      span {
        width: 0.9rem;
        margin: 0.1rem;
      }

      .choose {
        border-bottom: 1px solid lightgrey;
        height: 1.05rem;
        width: 3.0rem;
        position: relative;

        span {
          font-size: 0.14rem;
          margin: 0.2rem;
          text-align: center;
          width: 1.2rem;
        }

        .activeLine {
          position: absolute;
          height: 0.01rem;
          width: 1.1rem;
          background-color: blue;
          bottom: 0;
          left: 0;
          transition: all 0.5s ease;
        }
      }

      input {
        width: 3.0rem;
        height: 0.3rem;
        font-size: 0.14rem;
        margin: 0.24rem auto 0.3rem;
        display: block;
        border: none;
        border-bottom: 0.01rem solid darkgray;
      }

      .verify {
        font-size: 0.15rem;
        background-color: rgba(51, 137, 245);
        border: none;
        color: white;
        width: 1rem;
        height: 0.33rem;
        position: absolute;
        bottom: 0.38rem;
        right: 0;
        border-radius: 0.1rem;
      }
    }
  }
}


.left-enter-active, .left-leave-active {
  transition: all 0.3s;
}

.left-enter {
  opacity: 0;
  transform: translateX(-0.2rem);
}

.left-leave-to {
  opacity: 0;
  transform: translateX(0.2rem);
}

.right-enter-active, .right-leave-active {
  transition: all 0.3s;
}

.right-enter {
  opacity: 0;
  transform: translateX(0.2rem);
}

.right-leave-to {
  opacity: 0;
  transform: translateX(-0.2rem);
}
</style>
