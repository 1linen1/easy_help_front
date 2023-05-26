<template>
  <view class="container">
    <view class="itemBox" v-for="(item, index) in userList" :key="item.userId">
      <view class="left" @click="toDetail(item.userId)">
        <image class="avatar" :src="item.avatar"></image>
        <view class="box">
          <view class="nickname">{{item.nickname}}</view>
          <view class="follows">粉丝数:{{item.follows}}</view>
        </view>
      </view>
      <view class="right">
        <view class="cancel" @click="toFollow(false, item.userId, index)" v-show="item.isFollow">
          √ 已关注
        </view>
        <view class="focus" @click="toFollow(true, item.userId, index)" v-show="!item.isFollow">
          + 关注
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  import {qryConcernsOrFollowsPage, addFollow, removeFollow} from "../../api/follows.js"
  export default {
    data() {
      return {
        user: {},
        userList: [],
        pageReq: {
          userId: 0,
          type: "follows",
          pageSize: 10,
          pageNum: 1
        }
      }
    },
    methods: {
      toDetail(userId) {
        console.log("123")
        uni.navigateTo({
          url: "/pages/userHome/userHome?userId=" + userId
        })
      },
      toFollow(flag, userId, index) {
        if (flag) {
          addFollow({
            userId: userId,
            followId: this.user.userId
          }).then(res => {
            console.log(res)
            this.userList[index]['isFollow'] = true
            this.user.concerns++
            uni.setStorageSync("user", JSON.stringify(this.user))
          })
        } else {
          removeFollow({
            userId: userId,
            followId: this.user.userId
          }).then(res => {
            console.log(res)
            this.userList[index]['isFollow'] = false
            this.user.concerns--
            uni.setStorageSync("user", JSON.stringify(this.user))
          })
        }
      }
    },
    onLoad(option) {
      this.user = JSON.parse(uni.getStorageSync("user"))
      
      this.pageReq.type = option.type
      this.pageReq.userId = option.userId
      
      if (option.type === 'follows') {
        uni.setNavigationBarTitle({
          title: "粉丝列表"
        })
      } else {
        uni.setNavigationBarTitle({
          title: "关注列表"
        })
      }
      
      qryConcernsOrFollowsPage(this.pageReq).then(res => {
        this.userList = res.data.records
      })
    }
  }
</script>

<style lang="less">
  .container {
    padding: 10rpx 20rpx;
    .itemBox {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 20rpx;
      .left {
        display: flex;
        align-items: center;
        .avatar {
          width: 100rpx;
          height: 100rpx;
          border-radius: 50%;
        }
        .box {
          margin-left: 15rpx;
          .follows {
            font-size: 14px;
            color: #c3c3c3;
          }
        }
      }
      .right {
        .focus {
          padding: 12rpx 14rpx;
          margin-right: 40rpx;
          color: #58ac6c;
          box-shadow: #b9ffbc 0 0 5px;
        }
        .cancel {
          padding: 12rpx 14rpx;
          margin-right: 40rpx;
          color: #0e1d12;
          box-shadow: #2f412f 0 0 2px;
        }
      }
    }
  }
</style>
