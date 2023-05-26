<template>
  <view class="container">
    <view class="itemBox" v-for="(item, index) in itemList" :key="item.postId">
      <view class="topBox">
        <view class="left">
          <view class="user">
            <image class="avatar" :src="item.passiveAvatar"></image>
            <view class="info">            
              <view class="nickname">{{item.passiveNickname}}</view>
              <view click="type"></view>
            </view>
          </view>
          <view class="type">
            <view style="font-size: 13px;margin-right: 5px;">举报类型:</view>
            <view class="content">
              <view v-if="item.type === '0'">评论</view>
              <view v-if="item.type === '1'">帖子</view>
              <view v-if="item.type === '3'">帖子申诉</view>
            </view>
          </view>
        </view>
        <view class="right">
          <view class="appealSuccess" v-if="item.status === '00D'">已获积分:<view>{{item.scores}}</view></view>
          <view class="appealFail" v-else-if="item.status === '00E'">申诉失败!未获得积分</view>
          <view class="reportSuccess" v-else-if="item.status === '00B'">举报成功!</view>
          <view class="reportFail" v-else-if="item.status === '00C'">举报失败!</view>
          <view class="unhandle" v-else-if="item.status === '00A'">等待处理中...</view>
          <view class="invalid" v-else-if="item.status === '00X'">举报失败!</view>
        </view>
      </view>
      <view class="bottomBox">
        <view class="left">
          <view class="tip">举报时间：</view>
          <view class="time">{{item.createDate.slice(5)}}</view>
        </view>
        <view class="right" v-if="!!item.updateDate">
          <view class="tip">处理时间：</view>
          <view class="time">{{item.updateDate.slice(5)}}</view>
        </view>
        <view class="right" v-else>暂未处理</view>
      </view>
    </view>
    
    <view class="bottom" v-if="this.isLoading">
        <image class="loading" src="../../static/images/rank/loading.png"></image>
    </view>
    <view class="bottom" v-if="!this.isLoading && !this.hasMore">
        <view style="color: #b2a796;">没有更多记录了~~</view>
    </view>
  </view>
</template>

<script>
  import {qryMyWarning} from "../../api/warning.js"
  export default {
    data() {
      return {
        user: {},
        pageReq: {
          pageSize: 10,
          pageNum: 1,
          positiveUserId: 0
        },
        itemList: [],
        isLoading: false,
        hasMore: true,
      }
    },
    methods: {
    },
    onLoad() {
      this.user = JSON.parse(uni.getStorageSync("user"))
      this.pageReq.positiveUserId = this.user.userId
      qryMyWarning(this.pageReq).then(res => {
        this.itemList = res.data.records
        if (res.data.records.length < 10) {
          this.hasMore = false
        }
      })
    },
    onReachBottom() {
      if (this.hasMore) {
        this.pageReq.pageNum++
        this.isLoading = true
        qryMyWarning(this.pageReq).then(res => {
          if (res.data.records.length <= 0) {
            this.hasMore = false
          } else {
            this.itemList.push(...res.data.records)
          }
        }).catch(err => {
          this.pageReq.pageNum--
        }).finally(() => {
          this.isLoading = false
        })
      }
    }
  }
</script>

<style lang="less">
  .container {
    padding: 10rpx 20rpx;
    .itemBox {
      border-bottom: #cfcfcf 1px solid;
      padding-bottom: 10rpx;
      margin: 10rpx 0;
      .topBox {
        display: flex;
        justify-content: space-between;
        .left {
          display: flex;
          flex-direction: column;
          .user {
            display: flex;
            align-items: center;
            .avatar {
              width: 70rpx;
              height: 70rpx;
              border-radius: 50%;
              margin-right: 10rpx;
            }
            .nickname {
              font-size: 30rpx;
            }
          }
          .type {
            display: flex;
            align-items: center;
            padding: 10rpx 0;
            color: #878787;
            .content {
              color: #3d526d;
            }
          }
        }
        
        .right {
          display: flex;
          align-items: center;
          padding-right: 10px;
          
          .appealSuccess {
            display: flex;
            color: #1f8194;
            font-weight: 600;
          }
          
          .appealFail,.reportFail {
            color: #aa4646;
            font-weight: 600;
          }
          .reportSuccess {
            color: #41944d;
            font-weight: 600;
          }
        }
      }
      
      .bottomBox {
        display: flex;
        padding: 10rpx 0;
        justify-content: space-between;
        
        .left,.right {
          display: flex;
          flex: 1;
          font-size: 20rpx;
          color: #a8a8a8;
          
          padding-bottom: 8rpx;
        }
        .left {
          justify-content: flex-start;
        }
        .right {
          justify-content: flex-end;
        }
        .helpRightBox {
          display: flex;
          .text {
            color: #747474;
          }
          .scores {
            color: #50964f;
          }
        }
        .helpFailBox {
          .text {
            color: #989a1d;
          }
        }
        .helpUBox {
          .text {
            color: #1f8194;
          }
        }
      }
    }
    
    .bottom {
      text-align: center;
      .loading {
        width: 50rpx;
        height: 50rpx;
      }
    }
  }
</style>
