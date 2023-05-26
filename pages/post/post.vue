<template>
  <view class="container">
    <!-- <uni-notice-bar scrollable single text="猜猜我是谁?"></uni-notice-bar> -->
    <view class="contentContainer">
      <textarea class="inputArea" v-model="content" placeholder="分享我的动态"></textarea>
    </view>
    <view class="imageUpload">
        <view>
          <uni-file-picker 
          	v-model="fileList"  
            :imageStyles="imageStyles"
          	file-mediatype="image"
          	mode="grid"
          	file-extname="png,jpg,jpeg"
            :auto-upload="false"
          	:limit="6"
          	@select="select"
            @delete="deleteImg"
          />
        </view>
    </view>
    <view class="tags" v-if="this.type === '0'">
      <!-- <view class="left">
        <uni-icons type="list" size="30"></uni-icons>
        <text class="type">分类</text>
      </view>
      <view class="right">
        <uni-data-select
          v-model="selectedTag"
          :localdata="range"
          :clear="false"
          @change="change"
        ></uni-data-select>
      </view> -->
    </view>
    <view class="bottom" v-if="this.type === '0'">
      <view class="iconBox">
        <view class="scoreIcon iconfont icon-jifen"></view>
        <view class="title">附加积分</view>
      </view>
      <uni-number-box v-model="this.defaultNum" :min="0" :max="this.max" @change="changeScore"></uni-number-box>
    </view>
    <view class="tip" @click="" v-if="this.type === '0'">温馨提示：您当前拥有{{this.max}}积分</view>
  </view>
</template>

<script>
  import { fileUpload } from "../../api/file.js"
  import { releasePost, getUserInfo, qryIsCollect } from "../../api/post.js"
  
  export default {
    data() {
      return {
        defaultNum: 0,
        fileList: [],
        extList: [],
        selectedTag: 0,
        content: '',
        tag: '0',
        range: [],
        max: 0,
        scores: 0,
        type: '0', // 0求助帖，1动态帖
        imageStyles: {
          border: {
            color: "#eaa",
            width: 2,
            style: "dashed",
            radius: "2rpx"
          }
        }
      }
    },
    methods: {
      changeScore(value) {
        console.log(value)
        this.scores = value
      },
      select: function(e) {
        console.log("选择文件:", e);
        fileUpload(e, this.fileList).then(res => {
          this.fileList = res
          this.extList = res
        })
        console.log(this.fileList)
      },
      change(e) {
        console.log("change:", e);
        console.log(this.range[e])
        if (!e) {
          this.tag = this.range[e]['text']
        }
      },
      deleteImg(e) {
        this.fileList = this.extList = this.extList.filter(item => item.uuid != e.tempFile.uuid)
      }
    },
    onNavigationBarButtonTap: function(e) {
      if (!this.content) {
        uni.showToast({
          title: "发帖内容不能为空!",
          icon:"error"
        })
        return;
      }
      releasePost({
        content: this.content,
        images: JSON.stringify(this.extList),
        type: this.type, // 求助帖0，1动态帖
        tag: this.tag,
        scores: !this.scores ? 0 : this.scores
      }).then(res => {
        let user = JSON.parse(uni.getStorageSync("user"))
        if (!this.scores) {
          this.scores = 0
        }
        user.scoresCurrent = this.max - this.scores
        uni.setStorageSync("user", JSON.stringify(user))
        
        uni.navigateBack({
          delta: 1
        })
      })
    },
    onReady() {
      this.range = [
        {value: 0, text: "其他"},
        {value: 1, text: "高数"},
        {value: 2, text: "英语"},
        {value: 3, text: "大物"}
      ]
    },
    onLoad(option) {
      if (option.type === 'dynamic') {
        this.type = '1'
      }
      let user = JSON.parse(uni.getStorageSync("user"))
      getUserInfo(user.userId).then(res => {
        this.max = res.data.scoresCurrent
      })
    
    }
  }
</script>

<style lang="less">
  .container {
    padding: 10rpx;
    .contentContainer {
      margin-bottom: 10rpx;
      border: 1rpx solid #eea;
      .inputArea {
        width: 100%;
      }
    }
    .tags {
      display: flex;
      justify-content: space-between;
      align-items: center;
      vertical-align: middle;
      // border: 1rpx solid #eee;
      margin-top: 20rpx;
      .left {
        display: flex;
        align-items: center;
        vertical-align: middle;
        .type {
          margin-left: 7rpx;
        }
      }
      .right {
        width: 180rpx;
      }
    }
    .bottom {
      display: flex;
      justify-content: space-between;
      margin-top: 20rpx;
      .iconBox {
        display: flex;
        .scoreIcon {
          color: #333333;
          font-weight: 700;
          font-size: 45rpx;
          margin-left: 7rpx;
          margin-right: 15rpx;
        }
      }
    }
    .tip {
      color: #a8a8a8;
      font-size: 12rpx;
      text-align: end;
    }
  }
</style>
