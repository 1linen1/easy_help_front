<template>
  <view class="container">
    <!-- 月积分/总积分选择区域 -->
    <view class="choose">
      <view :class="leftClass" @click="changeActive('Current')">现积分</view>
      <view :class="rightClass" @click="changeActive('Total')">总积分</view>
    </view>
    
    <!-- 前三名区域 -->
    <view class="top">
      <view class="secondArea">
        <image class="avatar" :src="this.userList[1].avatar"></image>
        <view class="name">{{this.userList[1].nickname}}</view>
        <view class="medalArea">
          <image class="medal" src="../../../static/images/rank/second.png"></image>
          <text>{{this.activeFlag === 'Current' ? this.userList[1].scoresCurrent : this.userList[1].scoresTotal}}</text>
        </view>
      </view>
      <view class="firstArea">
        <image class="avatar" :src="this.userList[0].avatar"></image>
        <view class="name">{{this.userList[0].nickname}}</view>
        <view class="medalArea">
          <image class="medal" src="../../../static/images/rank/first.png"></image>
          <text>{{this.activeFlag === 'Current' ? this.userList[0].scoresCurrent : this.userList[0].scoresTotal}}</text>
        </view>
      </view>
      <view class="thirdArea">
        <image class="avatar" :src="this.userList[2].avatar"></image>
        <view class="name">{{this.userList[2].nickname}}</view>
        <view class="medalArea">
          <image class="medal" src="../../../static/images/rank/third.png"></image>
          <text>{{this.activeFlag === 'Current' ? this.userList[2].scoresCurrent : this.userList[2].scoresTotal}}</text>
        </view>
      </view>
    </view>
    
    <!-- 我的区域 -->
    <view class="meArea">
      <view class="begin">
        <view>我的</view>
        <view>贡献</view>
      </view>
      <view class="me">
        <image class="avatar" :src="this.user.avatar"></image>
        <text>{{this.user.nickname}}</text>
      </view>
      <view class="scores">
        <text class="title">{{this.activeFlag === 'Current' ? '当前积分值' : '累计积分值'}}</text>
        <text class="sum">{{this.activeFlag === 'Current' ? this.user.scoresCurrent : this.user.scoresTotal}}</text>
      </view>
      <view class="rank">
        <image class="flag" src="../../../static/images/rank/rank.png"></image>
        <view class="name">
          第<text class="rank">{{this.user.rank}}</text>名
        </view>
      </view>
    </view>
    
    <!-- 其他用户区域 -->
    <view class="otherArea">
      <view class="title">
        <view>用户昵称</view>
        <view>{{this.activeFlag === 'Current' ? '当前积分值' : '累计积分值'}}</view>
        <view>排名</view>
      </view>
      <view class="row" v-for="(item, index) in otherUserList">
        <view class="name">{{item.nickname}}</view>
        <view class="scores">{{this.activeFlag === 'Current' ? item.scoresCurrent : item.scoresTotal}}</view>
        <view class="rank">{{index + 3}}</view>
      </view>
      <view class="bottom" v-if="this.isLoading">
          <image class="loading" src="../../../static/images/rank/loading.png"></image>
      </view>
      <view class="bottom" v-if="!this.isLoading && !this.hasMore">
          <view style="color: #b2a796;">没有更多数据了~~</view>
      </view>
    </view>
  </view>
</template>

<script>
  import {getRankPage, getMyRank} from '../../../api/rank.js'
  export default {
    data() {
      return {
        userList: [{
          avatar: '',
          nickname: '暂无',
        },{
          avatar: '',
          nickname: '暂无',
        },{
          avatar: '',
          nickname: '暂无',
        }],
        isLoading: false,
        activeFlag: 'Current',
        user: {},
        hasMore: true,
        pageReqData: {
          pageSize: 10,
          pageNum: 1,
          orderType: this.activeFlag || 'Current',
        }
      }
    },
    onReachBottom() {
      if (this.hasMore) {
        this.isLoading = true       
        this.pageReqData.pageNum++
        getRankPage(this.pageReqData).then(res => {
          if (res.data.records.length <= 0) {
            this.hasMore = false
          } else {
            console.log("现在的...res.data.records", ...res.data.records)
            for (let item of res.data.records) {
              console.log(item)
              this.userList.push(item)
            }
            // this.userList.push(...res.data.records)
            console.log("现在的this.userList", this.userList)
          }
        }).catch(err => {
          this.pageReqData.pageNum--
        }).finally(() => {
          this.isLoading = false
        })
      }
    },
    onLoad() {
      getRankPage(this.pageReqData).then(res => {
        this.userList = res.data.records
      })
      let user = JSON.parse(uni.getStorageSync("user") || '{}')
      
      getMyRank({userId: user.userId, orderType: 'Current'}).then(res => {
        this.user = res.data
        uni.setStorageSync("user", JSON.stringify(this.user))
      })
    },
    methods: {
      changeActive(po) {
        if (this.activeFlag === po) {
          return;
        }
        this.activeFlag = po
        this.pageReqData.orderType = this.activeFlag
        this.pageReqData.pageNum = 1
        getRankPage(this.pageReqData).then(res => {
          this.userList = res.data.records
          if (res.data.records.length <= 0) {
            this.hasMore = false
          } else { 
            this.hasMore = true
          }
        })
        let user = JSON.parse(uni.getStorageSync("user") || '{}')
        
        getMyRank({userId: user.userId, orderType: this.activeFlag}).then(res => {
          this.user = res.data
          uni.setStorageSync("user", JSON.stringify(this.user))
        })
      }
    },
    computed: {
      leftClass() {
        return {
          active: this.activeFlag === 'Current',
          left: true
        }
      },
      rightClass() {
        return {
          active: this.activeFlag === 'Total',
          right: true
        }
      },
      otherUserList() {
        return this.userList.slice(3, this.userList.length)
      }
    },
  }
</script>

<style lang="less">
  * {
    box-sizing: border-box;
  }
  .container {
    
    padding-bottom: 25rpx;
    
    // 月积分/总积分选择区域
    .choose {
      display: flex;
      justify-content: center;
      height: 100rpx;
      line-height: 100rpx;
      margin-top: 20rpx;
      .active {
        border: 2px solid #797300;
        font-weight: 700;
      }
      .left {
        padding: 0 60rpx;
        background-color: #faff9f;
        border-radius: 35rpx 0 0 35rpx;
      }
      .right {
        padding: 0 60rpx;
        background-color: #9affa5;
        border-radius: 0 35rpx 35rpx 0;
      }
    }
    
    // 前三名区域
    .top {
      display: flex;
      margin-top: 20rpx;
      width: 100%;
      height: 370rpx;
      .secondArea,.firstArea,.thirdArea {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        .name {
          padding: 10rpx 0;
          font-weight: 600;
        }
      }
      .secondArea {
        margin: 100rpx 0 0 50rpx;
        .avatar {
          width: 120rpx;
          height: 120rpx;
          border-radius: 50%;
          border: 3px #bfc5d6 solid;
          box-shadow: #bfc5d6 0 0 15px;
        }
        .name {
          color: #bfbfbf;
        }
        .medalArea {
          display: flex;
          line-height: 60rpx;
          color: #41b5ac;
          .medal {
            width: 60rpx;
            height: 60rpx;
          }
        }
      }
      .firstArea {
        .avatar {
          width: 150rpx;
          height: 150rpx;
          border-radius: 50%;
          border: 3px #fcd16d solid;
          box-shadow: #fcd16d 0 0 20px;
        }
        .name {
          color: #f8b643;
        }
        .medalArea {
          display: flex;
          line-height: 70rpx;
          color: #41b5ac;
          .medal {
            width: 70rpx;
            height: 70rpx;
          }
        }
      }
      .thirdArea {
        margin: 120rpx 50rpx 0 0rpx;
        .avatar {
          width: 100rpx;
          height: 100rpx;
          border-radius: 50%;
          border: 3px #d8ad74 solid;
          box-shadow: #d8ad74 0 0 10px;
        }
        .name {
          color: #d8ad74;
        }
        .medalArea {
          display: flex;
          line-height: 55rpx;
          color: #41b5ac;
          .medal {
            width: 55rpx;
            height: 55rpx;
          }
        }
      }
    }
    
    // 我的区域
    .meArea {
      display: flex;
      justify-content: space-evenly;
      margin: 0 20rpx;
      padding: 15rpx 10rpx 15rpx 20rpx;
      box-shadow: #b0b0b0 0 0 10px;
      .begin {
        display: flex;
        flex-direction: column;
        margin-right: 10rpx;
        color: #116500;
        font-weight: 700;
        view {
          white-space: nowrap;
        }
      }
      .me {
        display: flex;
        font-size: 12px;
        .avatar {
          width: 80rpx;
          height: 80rpx;
          border-radius: 50%;
        }
        text {
          width: 100rpx;
          margin: auto;
          font-weight: 700;
          font-size: 13px;
          align-items: center;
          text-align: center;
        }
      }
      .scores {
        display: flex;
        white-space: nowrap;
        line-height: 90rpx;
        text {
          white-space: nowrap;
          font-size: 14px;
          color: #101010;
        }
        .title {
          
        }
        .sum {
          color: #3fb3aa;
          padding-left: 10rpx;
          font-weight: 700;
          font-size: 16px;
        }
      }
      .rank {
        display: flex;
        flex-direction: row;
        justify-content: right;
        .flag {
          margin-top: 10rpx;
          width: 70rpx;
          height: 70rpx;
        }
        .name {
          display: flex;
          color: #367e7e;
          font-size: 15px;
          font-weight: 600;
          line-height: 90rpx;
          .rank {
            color: #2e6c6c;
          }
        }
      }
    }
  
    // 其他用户区域
    .otherArea {
      margin-top: 20rpx;
      .title {
        display: flex;
        color: #978686;
        text-align: center;
        margin-bottom: 10rpx;
        view {
          flex: 1;
        }
      }
      .row {
        display: flex;
        padding: 15rpx 0;
        text-align: center;
        view {
          flex: 1;
        }
        .name {
          color: #000000;
        }
        .scores {
          color: #9cccd0;
          font-weight: 600;
        }
        .rank {
          color: #3f3f3f;
          font-weight: 600;
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
  .loading {
    animation: rotating 1s infinite linear;
  }
  @keyframes rotating {
    from { transform: rotate(0deg);}
    to { transform: rotate(360deg);}
  }
</style>
