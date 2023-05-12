<template>
  <view class="container">
    <view class="itemBox" @click="toDetail(item)" v-for="(item, index) in itemList" :key="item.postId">
      <view class="topBox">
        <view class="content">{{item.content}}</view>
        <view v-if="this.type === 'myPost' && item.resolved === '00R'" class="resolveBox">
          <uni-icons type="checkbox" color="#60a653" size="25"></uni-icons>
          <view class="resolve">
            已解决
          </view>
        </view>
      </view>
      <view class="bottomBox">
        <view class="left" v-if="this.type === 'myPost'">
          <view class="tip">发帖时间：</view>
          <view class="time">{{item.createDate}}</view>
        </view>
        <view class="leftBox" v-else>
          <image class="avatar" :src="item.avatar"></image>
          <view class="infoBox">
            <view class="nickname">{{item.nickname}}</view>
            <view class="box">
              <view class="tip">发帖时间：</view>
              <view class="time">{{item.createDate}}</view>
            </view>
          </view>
        </view>
        
        <view class="right" v-if="this.type === 'myPost'">
          <view class="viewsBox">
            <uni-icons type="eye-filled" size="15" color="#a8a8a8"></uni-icons>
            <view class="views">{{item.views}}</view>
          </view>
          <view class="collectsBox">
            <uni-icons type="star-filled" size="15" color="#a8a8a8"></uni-icons>
            <view class="collects">{{item.collects}}</view>
          </view>
        </view>
        <view v-else class="rightBox">
          <view class="box" @click.stop="addCollect(item, index)">
            <uni-icons v-if="!item.isCollect" type="star-filled" size="30" color="#ccc"></uni-icons>
            <uni-icons v-else type="star-filled" size="30" color="#e78282"></uni-icons>
          </view>
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
  import {qryPostPage, qryCollectPostPage, addCollect} from "../../api/post.js"
  export default {
    data() {
      return {
        type: 'myPost',
        user: {},
        pageReq: {
          pageSize: 10,
          pageNum: 1,
          sortedType: 'myself',
          userId: 0
        },
        itemList: [],
        isLoading: false,
        hasMore: true,
      }
    },
    methods: {
      addCollect(item, index) {
        addCollect({
          userId: this.user.userId,
          postId: item.postId
        }).then(res => {
          this.itemList[index]['isCollect'] = !item.isCollect
        })
      },
      toDetail(item) {
        if (typeof( item.images ) == 'string' ) {
          item.images = JSON.parse(item.images)
        }
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
      
      if (option.type === 'myPost') {
        uni.setNavigationBarTitle({
          title: "我的帖子"
        })
        qryPostPage(this.pageReq).then(res => {
          this.itemList = res.data.records
          if (res.data.records.length < 10) {
            this.hasMore = false
          }
        })
      } else {
        uni.setNavigationBarTitle({
          title: "我的收藏"
        })
        qryCollectPostPage(this.pageReq).then(res => {
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
        if (this.type === 'myPost') {
          qryPostPage(this.pageReq).then(res => {
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
          qryCollectPostPage(this.pageReq).then(res => {
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
        display: flex;
        justify-content: space-between;
        .content {
          flex: 3;
          display: -webkit-box;
          overflow: hidden;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          text-overflow: ellipsis;
          // 兼容英文/数字
          word-break: break-all;
          white-space: wrap;
          font-size: 35rpx;
        }
        padding: 2rpx 2rpx 0 5rpx;
        .resolveBox {
          flex: 1;
          display: flex;
          align-items: center;
          .resolve {
            color: #60a653;
            font-size: 30rpx;
          }
        }
      }
      
      .bottomBox {
        display: flex;
        padding: 10rpx 0;
        justify-content: space-between;
        font-size: 20rpx;
        color: #a8a8a8;
        .left {
          flex: 7;
          display: flex;
          align-items: flex-end;
          padding-bottom: 8rpx;
        }
        .leftBox {
          display: flex;
          align-items: center;
          .avatar {
            width: 70rpx;
            height: 70rpx;
            border-radius: 50%;
            margin-right: 10rpx;
          }
          .infoBox {
            display: column;            
            .nickname {
              font-size: 30rpx;
              color: #2d2d2d;
            }
            .box {
              display: flex;
            }
          }
          
          
        }
        .right {
          flex: 2;
          display: flex;
          .viewsBox {
            flex: 1;
            display: flex;
          }
          .collectsBox {
            flex: 1;
            display: flex;
          }
        }
        .rightBox {
          z-index: 100;
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
