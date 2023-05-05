<template>
  <view class="container">
    <view class="topConatiner">
      <view class="itemBox" v-for="item in 5">
        
        <!-- <view class="left" v-if="item.sourceId === this.user.userId"> -->
        <view class="left" v-if="item % 2 === 0">
          <image class="avatar" :src="this.msgUser.avatar"></image>
          <view style="background-color: #f8f9f9;" class="content">你在干什么你在干什么你在干什么你在干什么</view>
        </view>
        <view class="right" v-else>
          <view style="background-color: aliceblue;" class="content">你在干什么你在干什么你在干什么你在干什么</view>
          <image class="avatar" :src="this.msgUser.avatar"></image>
        </view>
      </view>
    </view>
    <view class="bottomContainer">
      <uni-easyinput class="input" @confirm="sendMsg" @iconClick="sendMsg" trim="both" confirmType="send" 
        :clearable="true" :adjust-position="true" v-model="this.content" 
        placeholder="请输入内容" suffixIcon="chat"></uni-easyinput>
    </view>
  </view>
</template>

<script>
  import ws from "../../api/websocket.js"
  export default {
    data() {
      return {
        user: {},
        msgUser: {}, // 接收消息的人
        websocket: null,
        content: '',
        msgList: [],
      }
    },
    methods: {
      sendMsg() {
        if (this.content.trim() === '') {
          uni.showToast({
            title: "内容不能为空!",
            icon: "none"
          })
        }
        this.$websocket.send(JSON.stringify({
          content: this.content,
          userId: this.msgUser.userId + ''
        }))
      }
    },
    onLoad(option) {
      this.user = JSON.parse(uni.getStorageSync("user"))
      this.msgUser = JSON.parse(option.user)
      
      if (!this.$websocket) {
        console.log("连接前状态：", this.$websocket)
        this.$setWebsocket(this.user.userId)
        console.log("连接后状态：", this.$websocket)
      }
      // this.websocket = new ws("ws://110.41.146.56:8888/websocket/" + this.user.userId, 5000)
      
      uni.setNavigationBarTitle({
        title: this.msgUser.nickname
      })
      
    }
  }
</script>

<style lang="less">
  .container {
    padding: 0 20rpx;
    .topConatiner {
      .itemBox {
        display: flex;
        flex-direction: column;
        margin: 15rpx 0;
        .avatar {
          width: 80rpx;
          height: 80rpx;
          border-radius: 50%;
        }
        .content {
          padding: 15rpx;
          
          max-width: 550rpx;
          border-radius: 17rpx;
          overflow: auto;
        }
        .left,.right {
          display: flex;
        }
        .left {
          .content {
            margin-left: 10rpx;
          }
        }
        .right {
          .content {
            margin-right: 10rpx;
          }
        }
      }
    }
    .bottomContainer {
      position: absolute;
      bottom: 0;
      left: 0;
      padding: 30rpx 0;
      background-color: #fff;
      width: 100%;
      .input {
        width: 90%;
        margin: 0 auto;
      }
    }
  }
</style>
