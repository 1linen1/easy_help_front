<template>
  <view class="container">
    <!-- 首部 -->
    <view class="top">
      <view class="left">
        <uni-file-picker limit="1" :del-icon="false" disable-preview :imageStyles="imageStyles"
        					file-mediatype="image" file-extname="png,jpg" :auto-upload="false" v-model="fileList" @select="select">选择</uni-file-picker>
        <view class="content">
          <view class="name" @click="updateNickname">
            <view class="username">{{this.user.nickname}}</view>
            <image class="edit" src="../../../static/images/personal/edit.png"></image>
          </view>
          <view class="email">{{this.user.email}}</view>
        </view>
      </view>
      <view class="right">
        <view class="title">
          <view class="honorBox">
            <image class="honor" src="../../../static/images/personal/honor.png"></image>
            <text class="name">{{this.user.titleName}}</text>
          </view>
          <view class="num">
            {{this.user.scoresTotal}}
            <text style="color: #191919; font-weight: 400;">积分</text>
          </view>
        </view>
      </view>
    </view>
    
    <!-- 中部 -->
    <view class="middle">
      <view class="top">
        <view class="dynamic">
          <view class="num">{{this.user.dynamics}}</view>
          <text>动态</text>
        </view>
        <view class="concerns" @click="toFollows('concerns')">
          <view class="num">{{this.user.concerns}}</view>
          <text>关注</text>
        </view>
        <view class="follows" @click="toFollows('follows')">
          <view class="num">{{this.user.follows}}</view>
          <text>粉丝</text>
        </view>
      </view>
      <view class="bottom">
        <view class="posts">
          <image src="../../../static/images/personal/posts.png"></image>
          <text>我的帖子</text>
        </view>
        <view class="viewHistory">
          <image src="../../../static/images/personal/viewHistory.png"></image>
          <text>浏览历史</text>
        </view>
        <view class="helpHistory">
          <image src="../../../static/images/personal/helpHistory.png"></image>
          <text>帮助历史</text>
        </view>
        <view class="collects">
          <image src="../../../static/images/personal/collects.png"></image>
          <text>我的收藏</text>
        </view>
      </view>
    </view>
    
    <!-- 底部 -->
    <view class="bottom">
      <view class="item">
        <view class="left">
          <image class="warning" src="../../../static/images/personal/warning.png"></image>
          <view class="text">举报结果</view>
        </view>
        <uni-icons type="forward" size="30" color="#b9b9b9"></uni-icons>
      </view>
      <view class="item">
        <view class="left">
          <image class="warning" src="../../../static/images/personal/associate.png"></image>
          <view class="text">联系我们</view>
        </view>
        <uni-icons type="forward" size="28" color="#b9b9b9"></uni-icons>
      </view>
    </view>
    
  </view>
</template>

<script>
  import {updateNickname, logout} from "../../../api/user.js"
  import {fileUpload} from "../../../api/file.js"
  export default {
    data() {
      return {
        user: {},
        imageStyles: {
          width: 83,
          height: 83,
          border: {
            radius: '50%'
          },
        },
        fileList: [{
          url: "",
          extname: 'png',
          name: 'avatar.png'
        }],
      }
    },
    methods: {
      toFollows(type) {
        uni.navigateTo({
          url: "/pages/follows/follows?type=" + type + "&userId=" + this.user.userId
        })
      },
      updateNickname() {
        uni.showModal({
          title: "请输入新昵称",
          editable: true,
          placeholderText: "请输入1~6个字符",
          success: (res) => {
            if (res.confirm) {
              console.log(this.user)
              console.log(res.content)
              let content = res.content.trim()
              if (/^[\u4E00-\u9FA5A-Za-z0-9_]{1,6}$/.test(content)) {
                console.log("正则匹配成功!", content)
                updateNickname({
                  userId: this.user.userId,
                  nickname: content
                }).then(res => {
                  uni.showToast({
                    title: "昵称修改成功!",
                    icon: "success"
                  })
                  this.user['nickname'] = content
                  uni.setStorageSync("user", JSON.stringify(this.user))
                })
              } else {
                uni.showToast({
                  title: "请输入1~6个字符",
                  icon: "none"
                })
              }
              
            } else if (res.cancel) {
              console.log('用户点击取消');
            }
          }
        })
      },
      select: async function(e) {
        console.log("选择了文件:", e)
        if (e.tempFiles[0]['size'] > 3145728) {
          uni.showToast({
            title: "上传图片大小不能大于3M",
            icon: "error"
          })
          this.fileList = []
          return;
        }
        this.fileList = []
        this.fileList = await fileUpload(e, this.fileList, this.user.userId, 'avatar/')        
        if (this.fileList[0]['url']) {
          this.user['avatar'] = this.fileList[0]['url']
          uni.setStorageSync("user", JSON.stringify(this.user))
        }
        this.fileList = [{
          url: this.user.avatar,
          extname: 'png',
          name: 'avatar.png'
        }]
      }
    },
    onShow() {
      let user = uni.getStorageSync("user")
      if (!user) {
        uni.showToast({
          title: "当前未登陆，请登录！",
          icon: "none"
        })
      } else {
        this.user = JSON.parse(user)
        if (this.user.avatar) {          
          this.fileList = [
            {
              url: this.user.avatar,
              extname: 'png',
              name: 'avatar.png'
            }
          ]
          console.log("fileList：", this.fileList)
        }
      }
    },
    onNavigationBarButtonTap() {
      uni.showModal({
        title: "温馨提示",
        content: "您确定要退出吗?",
        success(res) {
          if (res.confirm) {            
            uni.clearStorageSync("user");
            uni.reLaunch({
              url: "/pages/login/login"
            })
          }
        }
      }) 
    }
  }
</script>

<style lang="less">
  .container {
    padding: 15rpx 10rpx;
    // 首部
    .top {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      .left {
        display: flex;
        .content {
          display: flex;
          height: 140rpx;
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
    
    // 中部
    .middle {
      .top {
        .dynamic,.concerns,.follows {
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: center;
          font-weight: 500;
          text {
            margin-top: 10rpx;
            font-weight: 400;
            font-size: 15px;
          }
        }
      }
      .bottom {
        display: flex;
        margin-top: 70rpx;
        .posts, .viewHistory, .helpHistory, .collects {
          display: flex;
          flex: 1;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          font-weight: 500;
          image {
            width: 50rpx;
            height: 50rpx;
          }
          text {
            margin-top: 10rpx;
            font-weight: 400;
            font-size: 15px;
            // color: #191919;
          }
        }
      }
    }
  
    // 底部
    .bottom {
      margin-top: 55rpx;
      .item {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 22rpx 20rpx;
        .left {
          display: flex;
          flex-direction: row;
          line-height: 45rpx;
          .warning {
            width: 45rpx;
            height: 45rpx;
          }
          .text {
            padding: 0 15rpx;
            font-size: 16px;
            font-weight: 500;
          }
        }
      }
    }
  }
</style>
