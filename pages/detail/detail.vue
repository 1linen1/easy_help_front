<template>
  <view class="container">
    <view class="top">
      <view class="userInfo">
        <image class="avatar" :src="this.info.avatar"></image>
        <view class="profile">
          <view class="name">{{this.info.nickname}}</view>
          <view class="time">{{this.info.createDate}}</view>
        </view>
      </view>
      <view class="focus">
        + 关注
      </view>
    </view>
    
    <view class="middle">
      <textarea class="content" :value="this.info.content" disabled></textarea> 
      <view class="hr"></view>
      <view class="image">
        <uni-file-picker readonly v-model="this.info.images"></uni-file-picker>
      </view>
    </view>
    
    <view class="hr"></view>
    <view class="bottom">
      <view class="title" style="color: #343434; font-weight: 700;">我要帮助</view>
      <view class="inputArea">
        <image class="avatar" :src="this.user.avatar"></image>
        <view class="comment">  
          <uni-easyinput class="info" v-model="this.comment" type="textarea" :autoHeight="true" confirmType="send" @iconClick="sendMsg" @confirm="sendMsg" placeholder="懂得的话赶紧评论帮助一下吧^O^" suffixIcon="chat"></uni-easyinput>
        </view>
      </view>
      
      <view class="commentContainer">
        <view class="item" @longpress="commentLongPress(item)" v-for="item in commentList" :key="item.commentId">
          <view class="avatarBox">
            <image class="avatar" :src="item.avatar"></image>
          </view>
          <view class="contentBox">
            <view class="box">
              <view class="name">{{item.nickname}}</view>
              <view class="time">{{item.createDate}}</view>
            </view>
            <view class="content">{{item.content}}</view>
          </view>
          
          <!-- <view class="endBox">
            <uni-icons v-if="item.userId === this.user.userId" class="delete" type="trash" size="24" color="#b4b3b5"></uni-icons>
            <view v-else class="warning">
              <view class="warningImg iconfont icon-yichang_weixian_jubao"></view>
            </view>
          </view> -->
        </view>
      </view>
      <view class="bottom" v-if="this.isLoading">
          <image class="loading" src="../../static/images/rank/loading.png"></image>
      </view>
      <view class="bottom" v-if="!this.isLoading && !this.hasMore">
          <view style="color: #b2a796;">没有更多评论了~~</view>
      </view>
    </view>
    
    <!-- 遮罩层 -->
    <!-- <view v-if="maskShow" class="mask">
      <view class="pop" :style="popStyles">
        <view class="delete" @click="deleteComment">删除</view>
        <view class="report" @click="reportComment">举报</view>
      </view>
    </view> -->
    
  </view>


</template>

<script>
  import {qryPostCommentPage, addComment, deleteComment} from "../../api/comment.js"
  import {addWarning} from "../../api/warning.js"
  
  export default {
    data() {
      return {
        info: {},
        comment: '',
        commentList: [],
        user: {},
        pageReq: {
          pageSize: 5,
          pageNum: 1,
          postId: 0,
        },
        isLoading: false,
        hasMore: true,
        maskShow: false,
        popStyles: {}
      }
    },
    methods: {
      sendMsg() {
        if (!this.comment.trim()) {
          uni.showToast({
            title: "评论不能为空!",
            icon: "none"
          })
        } else {
          addComment({
            postId: this.info.postId,
            content: this.comment,
            userId: this.user.userId
          }).then(res => {
            this.comment = ''
            this.pageReq.pageNum = 1
            qryPostCommentPage(this.pageReq).then(res => {
              this.commentList = res.data.records;
              if (res.data.records.length === 5) {                
                this.pageNum++
                this.isMoreComment = true
              }
            })
          })
        }
      },
      commentLongPress(item) {
        if (item.userId === this.user.userId) {
          uni.showActionSheet({
          	itemList: ['删除该评论'],
          	success: (res) => {
              uni.showModal({
                title: "您确定要删除该评论吗?",
                success:  (res) => {
                  if (res.confirm) {
                    deleteComment(item.commentId).then((res) => {
                      this.commentList = this.commentList.filter(comment => comment.commentId != item.commentId)
                    })
                  } else if (res.cancel) {
                    console.log('用户点击取消');
                  }
                }
              })
          	}
          });
        } else {
          uni.showActionSheet({
          	itemList: ['举报该评论'],
          	success: (res) => {
          	  uni.showModal({
          	    title: "您确定举报该评论吗?",
          	    success: (res) => {
          	      if (res.confirm) {
          	        addWarning({
                      positiveUserId: this.user.userId,
                      passiveUserId: item.userId,
                      commentPostId: item.commentId,
                      type: "0" // 0评论，1帖子，2用户
                    })
          	      } else if (res.cancel) {
          	        console.log('用户点击取消2');
          	      }
          	    }
          	  })
          	}
          });
        }
      },
      deleteComment() {
        
      },
      reportComment() {
        
      }
    },
    onLoad(option) {
      this.info = JSON.parse(option.info)
      console.log("数据:", this.info)
      this.user = JSON.parse(uni.getStorageSync("user"))
      this.pageReq.postId = this.info.postId
      qryPostCommentPage(this.pageReq).then(res => {
        this.commentList = res.data.records;
        if (res.data.records.length < 5) {
          this.isMoreComment = false
        }
      })
    },
    onReachBottom() {
      if (this.hasMore) {
        this.pageReq.pageNum++
        this.isLoading = true       
        qryPostCommentPage(this.pageReq).then(res => {
          if (res.data.records.length <= 0) {
            this.hasMore = false
          } else {
            let records = res.data.records
            this.commentList.push(...records)
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
    position: relative;
    
    .mask {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: 100;
      background-color: #ccc;
      opacity: 0.5;
    }
    
    .pop {
      display: flex;
      flex-direction: column;
      text-align: center;
      width: 350rpx;
      height: 200rpx;
      background-color: #abb2bf;
      z-index: 1100;
      .delete {
        flex: 1;
        line-height: 100rpx;
        border-bottom: #797979 solid 1rpx;
      }
      .report {
        flex: 1;
        line-height: 100rpx;
      }
    }
    
    .hr {
      height: 0;
      border-bottom: 1rpx #eee dotted;
      margin: 30rpx 0;
    }
    
    .top {
      display: flex;
      justify-content: space-between;
      padding: 20rpx 0rpx 20rpx 20rpx;
      vertical-align: middle;
      align-items: center;
      text-align: center;
      .userInfo {
        display: flex; 
        .avatar {
          width: 100rpx;
          height: 100rpx;
          border-radius: 50%;
        }
        .profile {
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          margin-left: 10rpx;
          .name {
            color: #000;
            font-weight: 600;
          }
          .time {
            color: #ccc;
            font-size: 13px;
          }
        }
      }
      .focus {
        padding: 12rpx 14rpx;
        margin-right: 40rpx;
        border-radius: 35rpx;
        color: #58ac6c;
        box-shadow: #b9ffbc 0 0 5px;
      }
    }
    
    .middle {
      padding: 10rpx;
      .content {
        display: inline-block;
        width: 100%;
        min-height: 200rpx;
        font-size: 38rpx;
      }
    }
    
    .bottom {
      display: flex;
      flex-direction: column;
      .title {
        color: #000;
        padding: 0 0 10rpx 20rpx;
      }
      .inputArea {
        display: flex;
        padding: 0 10rpx;
        .avatar {
          width: 80rpx;
          height: 80rpx;
          border-radius: 50%;
        }
        .comment {
          margin-left: 20rpx;
          width: 80%;
        }
      }
      
      // 评论项
      .commentContainer {
        padding: 0 10rpx;
        margin-top: 20rpx;
        .item {
          display: flex;
          flex-direction: row;
          margin-bottom: 30rpx;
          .avatarBox {
            flex: 1;
            .avatar {
              width: 75rpx;
              height: 75rpx;
              border-radius: 50%;
            }
          }
          .contentBox {
            flex: 7;
            display: flex;
            flex-direction: column;
            margin-left: 10rpx;
            .box {
              display: flex;
              align-items: center;
              margin-bottom: 10rpx;
              .name {
                font-weight: 700;
                color: #797979;
              }
              .time {
                color: #ccc;
                font-size: 12rpx;
                margin-left: 10rpx;
              }
            }
            .content {
              font-size: 30rpx;
            }
          }
        
          .endBox {

            .warning {
              display: flex;
              flex-direction: column;
              align-items: center;
              text-align: center;
              vertical-align: middle;
              .warningImg {
                width: 60rpx;
                height: 60rpx;
                font-size: 40rpx;
                color: #b4b3b5;
              }
            }
          }
        }
      }
      
      .bottom {
        text-align: center;
        margin-bottom: 40rpx;
        .loading {
          width: 50rpx;
          height: 50rpx;
        }
      }
    }
  }
</style>
