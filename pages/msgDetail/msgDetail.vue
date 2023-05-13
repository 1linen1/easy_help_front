<template>
  <view class="container">
    <scroll-view scroll-y @scrolltoupper="toUpper" upper-threshold="200" :refresher-enabled="true" @refresherrefresh="refresh" :refresher-triggered="this.refreshFlag">
      <view class="topConatiner">
        <view class="itemBox" v-for="item in msgList">
          <!-- <view class="left" v-if="item.sourceId === this.user.userId"> -->
          <view class="left" v-if="item.sourceId !== this.user.userId">
            <image class="avatar" :src="this.msgUser.avatar"></image>
            <view style="background-color: #f8f9f9;" class="content">{{item.content}}</view>
          </view>
          <view class="right" v-else>
            <view style="background-color: aliceblue;" class="content">{{item.content}}</view>
            <image class="avatar" :src="this.user.avatar"></image>
          </view>
        </view>
      </view>
    </scroll-view>
    <view class="bottomContainer">
      <uni-easyinput class="input" @confirm="sendMsg" @iconClick="sendMsg" trim="both" confirmType="send" 
        :clearable="true" :adjust-position="true" v-model="this.content" 
        placeholder="请输入内容" suffixIcon="chat"></uni-easyinput>
    </view>
  </view>
</template>

<script>
  import ws from "../../api/websocket.js"
  import {qryMessagePage} from "../../api/message.js"
  export default {
    data() {
      return {
        user: {},
        msgUser: {}, // 接收消息的人
        websocket: null,
        content: '',
        msgList: [],
        flag: true,
        pageReq: {
          sourceId: 0,
          targetId: 0,
          pageSize: 10,
          pageNum: 1
        },
        refreshFlag: false,
      }
    },
    methods: {
      refresh() {
        console.log(this.refreshFlag)
        this.refreshFlag = true
        this.pageReq.pageNum++
        qryMessagePage(this.pageReq).then(res => {
          for (let msg of res.data.records) {
            this.msgList.unshift(msg)
          }
        }).catch(err => {
          this.pageNum--
        }).finally(() => {
          this.refreshFlag = false
        })
      },
      toUpper() {
        console.log("到顶部了")
      },
      sendMsg() {
        if (this.content.trim() === '') {
          uni.showToast({
            title: "内容不能为空!",
            icon: "none"
          })
          return;
        }
        let content = this.content
        this.content = ''
        this.$websocket.send(JSON.stringify({
          content: content,
          userId: this.msgUser.userId + ''
        }), res => {
          let data = JSON.parse(res.data)
          console.log("接收消息：", data)
          if (!data.messageId) {
            return;
          }
          this.msgList.push(data)
        })
      }
    },
    
    onLoad(option) {
      this.user = JSON.parse(uni.getStorageSync("user"))
      this.msgUser = JSON.parse(option.user)
      
      if (!this.$websocket || (this.$websocket && !this.$websocket.is_open_socket)) {
        console.log("连接前状态：", this.$websocket)
        this.$setWebsocket(this.user.userId)
        console.log("连接后状态：", this.$websocket)
      }
      
      uni.setNavigationBarTitle({
        title: this.msgUser.nickname
      })
      
      this.$websocket.getMessage(res => {
        let data = JSON.parse(res.data)
        console.log("接收消息：", data)
        if (!data.messageId) {
          return;
        }
        this.msgList.push(data)
      })
      this.pageReq.sourceId = this.user.userId
      this.pageReq.targetId = this.msgUser.userId
      qryMessagePage(this.pageReq).then(res => {
        for (let msg of res.data.records) {
          this.msgList.unshift(msg)
        }
      })
      console.log("123")
    }
  }
</script>

<style lang="less">
  // uni-scroll-view .uni-scroll-view::-webkit-scrollbar {
  //   display: none;
  // }
  // ::-webkit-scrollbar {
  //   display: none;
  // }
  .container {
    padding: 0 20rpx;
    scorll-view {
      max-height: 1000rpx;
    }
    .topConatiner {
      max-height: 1000rpx;
      // overflow-y: auto;
      padding-bottom: 100rpx;
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
          
          display: -webkit-box;
          -webkit-line-clamp: 5;
          -webkit-box-orient: vertical;
          text-overflow: ellipsis;
          // 兼容英文/数字
          word-break: break-all;
          word-wrap: break-word;
          white-space: pre-wrap;
          max-width: 550rpx;
          border-radius: 17rpx;
          // overflow: auto;
        }
        .left,.right {
          display: flex;
        }
        .left {
          justify-content: flex-start;
          .content {
            margin-left: 10rpx;
          }
        }
        .right {
          justify-content: flex-end;
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
