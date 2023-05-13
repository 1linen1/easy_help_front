<template>
  <view class="container">
    <view class="topContainer">
      <view class="itemBox">
        <view class="left">
          <image class="img" src="../../../static/images/message/sysMsg.png"></image>
        </view>
        <view class="right">
          <view class="box">
            <view class="nickname">系统消息</view>
            <view class="content">内容。。。一些内45665555555555555555555555555555555555555555555555</view>
          </view>
          <view class="time">05-02 17:43</view>
        </view>
      </view>
    </view>
    
    <view class="hr"></view>
    
    <view class="bottomContainer">
      <view class="itemBox" v-for="item in chatUserList" @click="toMsgDetail(item)">
        <view class="left">
          <image class="img" :src="item.avatar"></image>
        </view>
        <view class="right">
          <view class="box">
            <view class="nickname">{{item.nickname}}</view>
            <view class="content">{{item.lastMessage?.content || ''}}</view>
          </view>
          <view class="time">{{item.lastMessage?.createDate?.slice(5) || ''}}</view>
        </view>
      </view>
    </view>
    
    
    
  </view>
</template>

<script>
  import ws from "../../../api/websocket.js"
  import {qryChatList} from "../../../api/user.js"
  export default {
    data() {
      return {
        user: {},
        chatUserList: [],
      }
    },
    methods: {
      toMsgDetail(item) {
        uni.navigateTo({
          url: "/pages/msgDetail/msgDetail?user=" + JSON.stringify(item)
        })
      }
    },
    onLoad() {
      this.user = JSON.parse(uni.getStorageSync("user"))
      console.log(this.$websocket)
      if (!this.$websocket || (this.$websocket && !this.$websocket.is_open_socket)) {
        console.log("连接前状态：", this.$websocket)
        this.$setWebsocket(this.user.userId)
        console.log("连接后状态：", this.$websocket)
      }
      qryChatList(this.user.userId).then(res => {
        this.chatUserList = res.data
      })
    },
    onShow() {
      qryChatList(this.user.userId).then(res => {
        this.chatUserList = res.data
      })
    }
  }
</script>

<style lang="less">
  .container {
    padding: 20rpx 10rpx;
    .itemBox {
      position: relative;
      display: flex;
      flex-direction: row;
      padding: 10rpx;
      margin-bottom: 20rpx;
      
      .left {
        display: flex;
        flex-direction: row;
        .img {
          width: 70rpx;
          height: 70rpx;
          border-radius: 50%;
        }
      }
      .right {
        flex: 1;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-left: 10rpx;
        padding-bottom: 10rpx;
        border-bottom: 1px solid #c3c3c3;
        .box {
          display: flex;
          flex-direction: column;
          .nickname {
            font-weight: bold;
          }
          .content {
            width: 450rpx;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            font-size: 15rpx;
            color: #c3c3c3;
          }
        }
        .time {
          position: absolute;
          right: 20rpx;
          top: 40rpx;
          font-size: 17rpx;
        }
      }
    }
    .hr {
      padding: 10rpx;
      background-color: #eeeeee;
    }
  }
</style>
