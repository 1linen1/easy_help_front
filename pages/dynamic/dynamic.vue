<template>
  <view class="container">
    <view class="itemBox" @longpress="updateDynamicStatus(item, index)" @click="toDetail(item)" v-for="(item, index) in this.itemList" :key="item.postId">
      <view class="topBox">
        <view class="leftBox">
          <image class="avatar" :src="item.avatar"></image>
          <view class="info">
            <view class="nickname">{{item.nickname}}</view>
            <view class="time">{{item.createDate}}</view>
          </view>
        </view>
      </view>
      
      <view class="contentBox">
        <view class="content">{{item.content}}</view>
      </view>
      <view class="imageBox">
        <image mode="scaleToFill" class="img" :src="item.images[0]['url'] || ''"></image>
      </view>
      <view class="bottomBox">
        <view class="view">
          <uni-icons type="eye-filled" size="18" color="#999999"></uni-icons>
          <text>{{item.views}}</text>
        </view>
      </view>
      
    </view>
    <view class="tipBox" v-if="!this.itemList || this.itemList.length <= 0">
      <view class="tip">暂时没有数据哦~~</view>
    </view>
    
    <view class="box" v-else>
      <view class="bottom" v-if="this.isLoading">
          <image class="loading" src="../../static/images/rank/loading.png"></image>
      </view>
      <view class="bottom" v-if="!this.isLoading && !this.hasMore">
          <view style="color: #b2a796;">没有更多帖子了~~</view>
      </view>
    </view>
  </view>
</template>

<script>
  import {qryDynamicPage, updatePost} from "../../api/post.js"
  export default {
    data() {
      return {
        user: {},
        pageReq: {
          pageSize: 10,
          pageNum: 1,
          sortedType: 'time',
          userId: 0
        },
        itemList: [],
        isLoading: false,
        hasMore: true,
      };
    },
    methods: {
      updateDynamicStatus(item, index) {
        if (item.userId != this.user.userId) {
          return;
        }
        uni.showActionSheet({
        	itemList: ['删除该帖子'],
        	success: (res) => {
            uni.showModal({
              title: "您确定要删除吗?",
              success:  (res) => {
                if (res.confirm) {
                  updatePost({
                    postId: item.postId,
                    status: '00X'
                  }).then(res => {
                    uni.showToast({
                      title: res.msg,
                      icon: 'success'
                    })
                    this.itemList = this.itemList.filter(post => post.postId != item.postId)
                  })
                } else if (res.cancel) {
                  console.log('用户点击取消');
                }
              }
            })
        	}
        });
      },
      toDetail(item) {
        let info = JSON.stringify(item)
        uni.navigateTo({
          url: "/pages/detail/detail?info=" + info + "&type=dynamic"
        })
      }
    },
    onPullDownRefresh() {
      this.pageReq.pageNum = 1
      qryDynamicPage(this.pageReq).then(res => {
        let records = res.data.records
        records = records.map(item => {
          item.images = JSON.parse(item.images || '[]')
          return item
        })
        console.log(records)
        this.itemList = records
        if (res.data.records.length < 10) {
          this.hasMore = false
        }
      }).catch(() => {
        uni.stopPullDownRefresh()
      }).finally(() => {
        uni.stopPullDownRefresh()
      })
    },
    onLoad() {
      this.user = JSON.parse(uni.getStorageSync("user"))
      
      this.pageReq.userId = this.user.userId
      qryDynamicPage(this.pageReq).then(res => {
        let records = res.data.records
        records = records.map(item => {
          item.images = JSON.parse(item.images || '[]')
          return item
        })
        console.log(records)
        this.itemList = records
        if (res.data.records.length < 10) {
          this.hasMore = false
        }
      })
    },
    onNavigationBarButtonTap: function(e) {
      uni.navigateTo({
        url: "/pages/post/post?type=" + "dynamic"
      })
    },
    onReachBottom() {
      if (this.hasMore) {
        this.pageReq.pageNum++
        this.isLoading = true
        qryDynamicPage(this.pageReq).then(res => {
          if (res.data.records.length <= 0) {
            this.hasMore = false
          } else {
            let records = res.data.records
            records = records.map(item => item.images = JSON.parse(item.images || '[]'))
            this.itemList.push(...records)
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
  uni-page-body {
    width: 100%;
    height: 100%;
  }
  .container {
    padding: 10rpx 15rpx;
    display: block;
    .itemBox {
      margin-bottom: 20rpx;
      border-bottom: 1rpx #e7e7e7 solid;
      .topBox {
        .leftBox {
          display: flex;
          align-items: center;
          .avatar {
            width: 80rpx;
            height: 80rpx;
            border-radius: 50%;
            margin: 10rpx;
          }
          .info {
            display: flex;
            flex-direction: column;
            .nickname {
              
            }
            .time {
              font-size: 13rpx;
              color: #a5a5a5;
            }
          }
        }
      }
      .contentBox {
        padding: 10rpx 0;
        .content {
          display: -webkit-box;
          overflow: hidden;
          -webkit-line-clamp: 5;
          -webkit-box-orient: vertical;
          text-overflow: ellipsis;
          // 兼容英文/数字
          word-break: break-all;
          white-space: wrap;
        }
      }
      .imageBox {
        display: block;
        .img {
          width: 100%;
          max-height: 350rpx;
        }
      }
      .bottomBox {
        .view {
          text-align: end;
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
    
    .tipBox {
      display: flex;
      width: 100%;
      height: 100%;
      align-items: center;
      .tip {
        flex: 1;
        text-align: center;
        color: #ccc;
      }
    }
  }
</style>
