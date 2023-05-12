<template>
  <view class="container">
    <view class="searchBox">
      <uni-search-bar v-model="this.searchContent" placeholder="请输入" :focus="true" clearButton="auto" cancelButton="auto" @focus="focus" @confirm="search" @cancel="toHome"></uni-search-bar>
    </view>
    <view class="historyBox"  v-show="this.isInput">
      <uni-section class="mb-10" title="历史记录" type="line">
        <view class="historyList">
          <view class="item" @click="search({value: item})" v-for="item in this.historyList" :key="item">{{item}}</view>
        </view>
        <template v-slot:right>
          <view class="rightBox">
            <uni-icons v-show="this.historyList.length > 0" type="trash" size="20" @click="deleteAll"></uni-icons>
          </view>
        </template>
      </uni-section>
    </view>
    
    <!-- 帖子区域 -->
    <view class="postContainer"  v-show="!this.isInput">
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
    
  </view>
</template>

<script>
  import {qryPostPage, qryPostPageByContent} from "../../api/post.js"
  export default {
    data() {
      return {
        searchContent: '',
        historyList: [],
        user: {},
        isInput: true,
        postList: [],
        leftPostList: [],
        rightPostList: [],
        pageReq: {
          pageSize: 10,
          pageNum: 1,
          sortedType: "time",
          content: ""
        },
        isLoading: false,
        hasMore: true,
      };
    },
    methods: {
      toDetail(item) {
        let info = JSON.stringify(item)
        let url = "/pages/detail/detail?info=" + info
        uni.navigateTo({
          url
        })
      },
      deleteAll() {
        uni.showModal({
          title: "你确定要全部清除吗?",
          success: (res) => {
            if (res.confirm) {
              this.historyList = []
              uni.removeStorageSync(this.user.userId + "history")
            }
          }
        })
      },
      focus() {
        this.isInput = true
      },
      search(res) {
        this.isInput = false
        if (!this.searchContent) {
          this.searchContent = res.value
        }
        this.historyList = this.historyList.filter(item => item !== res.value)
        this.historyList.unshift(res.value)
        if (this.historyList.length > 15) {
          this.historyList.splice(15)
        }
        uni.setStorageSync(this.user.userId + "history", JSON.stringify(this.historyList))
        
        this.pageReq.pageNum = 1
        this.pageReq.content = res.value
        qryPostPageByContent(this.pageReq).then(res => {
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
        })
        
      },
      toHome() {
        if (this.isInput) {
          uni.navigateBack({delta: 1})
        } else {
          this.isInput = true
        }
      }
    },
    onReachBottom() {
      if (this.hasMore) {
        this.pageReq.pageNum++
        this.isLoading = true       
        qryPostPageByContent(this.pageReq).then(res => {
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
    onLoad() {
      this.user = JSON.parse(uni.getStorageSync("user") || '{}')
      if (!this.user.userId) {
        uni.showToast({
          title: "请先登录!",
          icon: "none"
        })
        uni.reLaunch({
          url: "/pages/login/login"
        })
      }
      this.historyList = JSON.parse(uni.getStorageSync(this.user.userId + "history") || '[]')
    }
  }
</script>

<style lang="less">
  .container {
    .historyBox {
      .historyList {
        display: flex;
        flex-wrap: wrap;
        overflow: hidden;
        .item {
          margin-left: 20rpx;
          margin-bottom: 10rpx;
          max-width: 200rpx;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          padding: 15rpx 10rpx;
          border: 1rpx solid #ccc;
          box-shadow: #b7b7b7 0 0 1px;
          border-radius: 15rpx;
        }
      }
    }
    
    .postContainer {
      display: flex;
      flex-wrap: wrap;
      align-items: flex-start;
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
          text-overflow: ellipsis;
          // 兼容英文/数字
          word-break: break-all;
          white-space: wrap;
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
