<template>
  <view class="container">
    <view class="fixed">
      <!-- 头部搜索 -->
      <view class="search">
        <uni-search-bar placeholder="请输入" clearButton="auto" cancelButton="auto" @confirm="search"></uni-search-bar>
      </view>
      
      <!-- 分类 -->
      <view class="maskArea">
        <view class="typeArea">
          <view class="item" v-for="(item, index) in this.tagList">
            <view @click="changeActive(index)" class="tag" :class="{active: index === activeIndex}">{{item.label}}</view>
          </view>
        </view>
      </view>
    </view>
    
    <!-- 帖子区域 -->
    <view class="postContainer">
      <view class="left">
        <view class="itemBox" @click="toDetail(item)" v-for="item in this.leftPostList">
          <view class="imgBox" v-if="item.images"><image class="img" mode="widthFix" :src="item.images ? item.images[0].url : ''"></image></view>
          <text class="profile">{{item.content}}</text>
          <view class="bottom">
            <view class="person">
              <image class="avatar" :src="item.avatar"></image>
              <view class="name">{{item.nickname}}</view>
            </view>
            <view class="view">
              <uni-icons type="eye-filled" size="18" color="#999999"></uni-icons>
              <text>{{item.views}}</text>
            </view>
          </view>
        </view>
      </view>
      
      <view class="right">
        <view class="itemBox" @click="toDetail(item)" v-for="item in this.rightPostList">
          <view class="imgBox" v-if="item.images"><image class="img" mode="widthFix" :src="item.images ? item.images[0].url : ''"></image></view>
          <text class="profile">{{item.content}}</text>
          <view class="bottom">
            <view class="person">
              <image class="avatar" :src="item.avatar"></image>
              <view class="name">{{item.nickname}}</view>
            </view>
            <view class="view">
              <uni-icons type="eye-filled" size="18" color="#999999"></uni-icons>
              <text>{{item.views}}</text>
            </view>
          </view>
        </view>
      </view>
    </view>
    
    <view class="bottom" v-if="this.isLoading">
        <image class="loading" src="../../../static/images/rank/loading.png"></image>
    </view>
    <view class="bottom" v-if="!this.isLoading && !this.hasMore">
        <view style="color: #b2a796;">没有更多数据了~~</view>
    </view>
    
  </view>
</template>

<script>
  import {qryPostPage} from "../../../api/post.js"
  export default {
    data() {
      return {
        tagList: [
          {
            label: '猜你喜欢',
            value: 'guess'
          },
          {
            label: '最新发布',
            value: 'time'
          },
          {
            label: '最多浏览',
            value: 'views'
          },
          {
            label: '最多积分',
            value: 'scores'
          }
        ],
        postList: [],
        leftPostList: [],
        rightPostList: [],
        pageReq: {
          pageSize: 10,
          pageNum: 1,
          sortedType: "time"
        },
        isLoading: false,
        hasMore: true,
        activeIndex: 1,
        debounce1: this.debounce()
      }
    },
    methods: {
      search() {
        
      },
      changeActive(index) {
        this.activeIndex = index;
        
      },
      debounce() {
        // 防抖动
        let timer = null
        return function() {          
          if (timer) {
            clearTimeout(timer)
          }
          timer = setTimeout(() => {
            const activeItem = uni.createSelectorQuery().in(this).select('.active');
            activeItem.boundingClientRect(data => {
              console.log("得到布局位置信息" + JSON.stringify(data));
              uni.getSystemInfo({
                success(res) {
                  console.log("当前屏幕宽度为: ", res.screenWidth)
                }
              })
              timer = null
            }).exec();
          }, 300)
        }
      },
      toDetail(item) {
        let info = JSON.stringify(item)
        let url = "/pages/detail/detail?info=" + info
        uni.navigateTo({
          url
        })
      },
    },
    onLoad() {
      qryPostPage(this.pageReq).then(res => {
        let records = res.data.records
        if (records.length <= 0) {
          this.hasMore = false
        }
        for (let i = 0; i < records.length; i++) {
          if (records[i]['images'] && records[i]['images'].length > 0) {
            records[i]['images'] = JSON.parse(records[i]['images'])
          }
          if (i % 2 === 0) {
            this.leftPostList.push(records[i])
          } else {
            this.rightPostList.push(records[i])
          }
        }
        this.postList = records
      }).catch(err => {
        console.log(err)
      })
      
    },
    onPullDownRefresh() {
      this.pageReq.pageNum = 1
      qryPostPage(this.pageReq).then(res => {
        this.leftPostList = []
        this.rightPostList = []
        let records = res.data.records
        if (records.length <= 0) {
          this.hasMore = false
        }
        for (let i = 0; i < records.length; i++) {
          if (records[i]['images'] && records[i]['images'].length > 0) {
            records[i]['images'] = JSON.parse(records[i]['images'])
          }
          if (i % 2 === 0) {
            this.leftPostList.push(records[i])
          } else {
            this.rightPostList.push(records[i])
          }
        }
        this.postList = records
      }).catch(err => {
        console.log(err)
      }).finally(() => {
        uni.stopPullDownRefresh()
      })
    },
    onReachBottom() {
      if (this.hasMore) {
        this.pageReq.pageNum++
        this.isLoading = true       
        qryPostPage(this.pageReq).then(res => {
          if (res.data.records.length <= 0) {
            this.hasMore = false
          } else {
            let records = res.data.records
            for (let i = 0; i < records.length; i++) {
              if (records[i]['images'] && records[i]['images'].length > 0) {
                records[i]['images'] = JSON.parse(records[i]['images'])
              }
              if (i % 2 === 0) {
                this.leftPostList.push(records[i])
              } else {
                this.rightPostList.push(records[i])
              }
            }
          }
          
        }).catch(err => {
          this.pageReq.pageNum--
        }).finally(() => {
          this.isLoading = false
        })
      }
    },
  }
</script>

<style lang="less">
  .container {
    .fixed {
      position: fixed;
      top: var(--window-top);
      left: 0;
      width: 100%;
      background-color: #fff;
      z-index: 10000;
      .search {
        width: 750rpx;
      }
      // 分类区域
      .maskArea {
        overflow: hidden;
        height: 100rpx;
        width: 100%;
        padding: 0 10rpx;
        .typeArea {
          display: flex;
          width: 100%;
          white-space: nowrap;
          overflow: auto;
          padding: 20rpx 20rpx;
          padding-bottom: 50rpx;
          .item {
            .tag {
              padding: 12rpx 14rpx;
              margin-right: 40rpx;
              border-radius: 17rpx;
              color: #695959;
              box-shadow: #b7b7b7 0 0 10px;
            }
            .active {
              background-color: #d4feff;
              font-weight: 600;
              color: #5895e5;
            }
          }
        }
      }
    }
  
    .postContainer {
      display: flex;
      flex-wrap: wrap;
      align-items: flex-start;
      padding-top: 200rpx;
      .itemBox {
        width: 330rpx;
        min-width: 330rpx;
        margin: 20rpx 20rpx;
        border-radius: 20rpx;
        overflow: hidden;
        box-shadow: #b7b7b7 0 0 10px;
        .img {
          width: 340rpx;
          max-height: 270rpx;
          margin-bottom: -10rpx;
        }
        .profile {
          margin-top: 10rpx;
          display: -webkit-box;
          overflow: hidden;  
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          font-size: 25rpx;
          padding: 2rpx 2rpx 0 13rpx;
        }
        .bottom {
          display: flex;
          position: relative;
          justify-content: space-between;
          .person {
            display: flex;
            align-items: center;
            vertical-align: middle;
            .avatar {
              width: 50rpx;
              height: 50rpx;
              border-radius: 50%;
              margin: 10rpx;
            }
            .name {
              font-size: 12rpx;
              color: #999999;
            }
          }
          .view {
            position: absolute;
            display: flex;
            align-items: center;
            color: ;
            right: 13rpx;
            bottom: 15rpx;
            font-size: 12px;
            color: #999999;
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
