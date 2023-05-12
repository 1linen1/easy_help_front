<template>
  <view class="container">
    <!-- 首部 -->
    <view class="top">
      <view class="left">
        <image class="avatar" :src="this.anotherUser.avatar"></image>
        <view class="content">
          <view class="name">
            <view class="username">{{this.anotherUser.nickname}}</view>
          </view>
          <view class="email">{{this.anotherUser.email}}</view>
        </view>
      </view>
      <view class="right">
        <view class="title">
          <view class="honorBox">
            <image class="honor" src="../../static/images/personal/honor.png"></image>
            <text class="name">{{this.anotherUser.titleName}}</text>
          </view>
          <view class="num">
            {{this.anotherUser.scoresTotal}}
            <text style="color: #191919; font-weight: 400;">积分</text>
          </view>
        </view>
      </view>
    </view>
    
    <view class="middle">
      <uni-section class="mb-10" title="发布的帖子" type="line" titleFontSize="15px">
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
            <image class="loading" src="../../static/images/rank/loading.png"></image>
        </view>
        <view class="bottom" v-if="!this.isLoading && !this.hasMore">
            <view style="color: #b2a796;">没有更多帖子了!</view>
        </view>
        
      </uni-section>
    </view>
    
  </view>
</template>

<script>
  import {getUserInfo, qryPostPage} from "../../api/post.js"
  export default {
    data() {
      return {
        user: {},
        anotherUser: {},
        pageReq: {
          pageSize: 5,
          pageNum: 1,
          postId: 0,
          sortedType: 'myself',
          userId: 0
        },
        postList: [],
        leftPostList: [],
        rightPostList: [],
        isLoading: false,
        hasMore: true,
        maskShow: false,
        popStyles: {},
        isFollow: false,
        isCollect: false
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
    async onLoad(option) {
      this.user = JSON.parse(uni.getStorageSync("user"))
      await getUserInfo(option.userId).then(res => {
        let data = res.data
        let list = res.data.email.split('@')
        let str1 = list[0].substring(0, 3)
        let str2 = list[0].substring(list[0].length - 2)
        
        data.email = str1 + "***" + str2 + "@" + list[1]
        
        this.anotherUser = data
        
        uni.setNavigationBarTitle({
          title: this.anotherUser.nickname + "的主页"
        })
      })
      console.log(this.anotherUser)
      this.pageReq.pageNum = 1
      this.pageReq.userId = this.anotherUser.userId
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
      })
      
    }
  }
</script>

<style lang="less">
  .container {
    padding: 15rpx 0;
    // 首部
    .top {
      display: flex;
      flex-direction: row;
      padding: 0 20rpx;
      justify-content: space-between;
      .left {
        display: flex;
        align-items: center;
        .avatar {
          border-radius: 50%;
          width: 120rpx;
          height: 120rpx;
        }
        .content {
          display: flex;
          flex-direction: column;
          vertical-align: middle;
          padding: 30rpx 10rpx;
          .name {    
            display: flex;
            flex-direction: row;
            .username {
              font-size: 20px;
              font-weight: 700;
            }
            .edit {
              height: 45rpx;
              width: 45rpx;
            }
          }
          .email {
            margin-top: 10rpx;
            font-size: 12px;
            color: #ada2a2;
          }
        }
      }
      .right {
        margin-left: 10rpx;
        padding: 10rpx 0;
        text-align: center;
        .title {
          .honorBox {
            display: flex;
            height: 70rpx;
            line-height: 70rpx;
            text-align: center;
            .honor {
              width: 70rpx;
              height: 70rpx;
            }
            .name {
              color: #f0ae6c;
              font-weight: 700;
              vertical-align: middle;
            }
          }
          .num {
            display: flex;
            flex-direction: row;
            justify-content: space-evenly;
            color: #28b64e;
            font-weight: 700;
          }
        }
      }
    }
    
    .middle {
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
