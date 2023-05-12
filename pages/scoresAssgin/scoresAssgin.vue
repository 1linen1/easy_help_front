<template>
  <uni-section class="mb-10" title="请选择用户" type="line">
    <view class="container">
      <view class="itemBox" @click="assignScores(item, index)" v-for="(item, index) in userList" :key="item.userId">
        <view class="left">
          <image class="avatar" :src="item.avatar"></image>
          <view class="box">
            <view class="nickname">{{item.nickname}}</view>
            <view class="follows">粉丝数:{{item.follows}}</view>
          </view>
        </view>
        <view class="right">
          <view class="box" v-if="!!item.assignedScores && item.assignedScores != '0'">
            <view class="tip">已分配: </view>
            <view class="assignedScores">{{item.assignedScores}}</view>
          </view>
        </view>
      </view>
    </view>
    
    <!-- 右侧插槽 -->
    <template v-slot:right>
    	<view class="validScores" style="color: #939393;">
        当前剩余可分配积分: <text class="scores" style="color: #467556;">{{this.validScores}}</text>
      </view>
    </template>
  </uni-section>
</template>

<script>
  import {qryHelpUserList, updateUserScores} from "../../api/user.js"
  import {qryValidScores, resolvePost} from "../../api/post.js"
  export default {
    data() {
      return {
        userList: [],
        user: {},
        postId: 0,
        comsumedScores: 0,
        scores: 0,
        postUserId: 0,
      }
    },
    methods: {
      assignScores(item, index) {
        if (this.validScores <= 0 && !item.assignedScores) {
          uni.showToast({
            title: "剩余积分不足!",
            icon:"none"
          })
          return;
        }
        let content = item.assignedScores || "0"
        uni.showModal({
          title: "积分剩余: " + this.validScores,
          editable: true,
          content: item.assignedScores || "",
          confirmText: "分配",
          confirmColor: "#4b883d",
          placeholderText: "请输入正整数积分",
          success: (res) => {
            if (res.confirm) {
              if (/^\d+$/.test(res.content)) {
                let preScore = parseInt(content)
                let score = parseInt(res.content)
                if (score > this.validScores && !item.assignedScores) {
                  uni.showToast({
                    title: "剩余积分不足!",
                    icon:"none"
                  })
                  return;
                }
                this.comsumedScores += score - preScore 
                this.userList[index]['assignedScores'] = res.content
              }
            }
          }
        })
      }
    },
    computed: {
      validScores() {
        return this.scores - this.comsumedScores
      }
    },
    onLoad(option) {
      this.postId = option.postId
      this.postUserId = option.userId
      this.user = JSON.parse(uni.getStorageSync("user"))
      qryHelpUserList({
        postId: this.postId,
        userId: this.user.userId
      }).then(res => {
        this.userList = res.data
      })
      
      qryValidScores(this.postId).then(res => {
        this.scores = res.data
      })
    },
    onNavigationBarButtonTap: function(e) {
      if (this.validScores != 0) {
        uni.showToast({
          title: "您还有积分未分配!",
          icon: "none"
        })
        return;
      }
      let userList = this.userList.map(item => {
        if (!!item.assignedScores && item.assignedScores != '0') {
          item.assignedScores = parseInt(item.assignedScores)
          return item
        }
      }).filter(item => !!item)

        console.log("已解决")
      resolvePost(this.postId).then(res => {
        console.log("已解决")
      })
      updateUserScores({
        userExtList: userList,
        postId: this.postId,
        userId: this.postUserId
      }).then(res => {
        uni.navigateBack({delta:1})
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
        .box {
          display: flex;
          .tip {
            color: #7a7a7a;
          }
          .assignedScores {
            color: #4b883d;
            font-weight: 600;
          }
        }
      }
    }
  }
</style>
