<template>
  <view class="container">
    <view class="itemBox" @click="toDetail(item)" v-for="(item, index) in itemList" :key="item.postId">
      <view class="topBox">
        <view class="content">{{item.content}}</view>
      </view>
      <view class="bottomBox" @longpress="toReport(item)">
        <view class="left">
          <image class="avatar" :src="item.avatar"></image>
          <view class="nickname">{{item.nickname}}</view>
        </view>
        <view class="right" v-if="this.type === 'view'">
          <view class="tip">浏览时间：</view>
          <view class="time">{{item.updateDate ? item.updateDate : item.createDate}}</view>
        </view>
        <view v-else-if="item.resolved == '00R' && item.assignedScores != 0" class="helpRightBox">
          <view class="text">已获得积分：</view>
          <view class="scores">{{item.assignedScores}}</view>
        </view>
        <view v-else-if="item.resolved == '00R' && item.assignedScores == 0" class="helpFailBox">
          <view class="text">未获得积分</view>
        </view>
        <view v-else-if="item.resolved == '00U'" class="helpUBox">
          <view class="text">帖子未结束</view>
        </view>
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
  import {qryHistoryPage, qryHelpPostPage} from "../../api/post.js"
  import {addWarning} from "../../api/warning.js"
  export default {
    data() {
      return {
        type: 'view',
        user: {},
        pageReq: {
          pageSize: 10,
          pageNum: 1,
          userId: 0
        },
        itemList: [],
        isLoading: false,
        hasMore: true,
      }
    },
    methods: {
      toReport(item) {
        if (item.resolved != '00R' || item.assignedScores != 0) {
          return;
        }
        uni.showActionSheet({
        	itemList: ['申诉'],
        	success: (res) => {
        	  uni.showModal({
        	    title: "您确定举报该评论吗?",
        	    success: (res) => {
        	      if (res.confirm) {
        	        addWarning({
                    positiveUserId: this.user.userId,
                    passiveUserId: item.userId,
                    commentPostId: item.commentId,
                    type: "3" // 0评论，1帖子，2用户，3帖子申诉
                  })
        	      } else if (res.cancel) {
        	        console.log('用户点击取消2');
        	      }
        	    }
        	  })
        	}
        });
      },
      toDetail(item) {
        item.images = JSON.parse(item.images)
        let info = JSON.stringify(item)
        let url = "/pages/detail/detail?info=" + info
        uni.navigateTo({
          url
        })
      }
    },
    onLoad(option) {
      this.type = option.type
      this.user = JSON.parse(uni.getStorageSync("user"))
      this.pageReq.userId = this.user.userId
      console.log("123")
      if (option.type === 'view') {
        uni.setNavigationBarTitle({
          title: "浏览历史"
        })
        qryHistoryPage(this.pageReq).then(res => {
          this.itemList = res.data.records
          if (res.data.records.length < 10) {
            this.hasMore = false
          }
        })
        
      } else {
        uni.setNavigationBarTitle({
          title: "帮助历史"
        })
        qryHelpPostPage(this.pageReq).then(res => {
          this.itemList = res.data.records
          if (res.data.records.length < 10) {
            this.hasMore = false
          }
        })
      }
    },
    onReachBottom() {
      if (this.hasMore) {
        this.pageReq.pageNum++
        this.isLoading = true
        if (this.type === 'view') {          
          qryHistoryPage(this.pageReq).then(res => {
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
        } else {
          qryHelpPostPage(this.pageReq).then(res => {
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
        display: -webkit-box;
        overflow: hidden;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
        // 兼容英文/数字
        word-break: break-all;
        white-space: wrap;
        font-size: 35rpx;
        padding: 2rpx 2rpx 0 5rpx;
      }
      
      .bottomBox {
        display: flex;
        padding: 10rpx 0;
        justify-content: space-between;
        .left {
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
        .right {
          display: flex;
          font-size: 20rpx;
          color: #a8a8a8;
          align-items: flex-end;
          padding-bottom: 8rpx;
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
