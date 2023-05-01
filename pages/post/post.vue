<template>
  <view class="container">
    <!-- <uni-notice-bar scrollable single text="猜猜我是谁?"></uni-notice-bar> -->
    <view class="contentContainer">
      <textarea v-model="content" placeholder="分享我的动态"></textarea>
    </view>
    <view class="imageUpload">
        <view>
          <uni-file-picker 
          	v-model="fileList"  
            :imageStyles="imageStyles"
          	file-mediatype="image"
          	mode="grid"
          	file-extname="png,jpg"
            :auto-upload="false"
          	:limit="6"
          	@select="select"
            @delete="deleteImg"
          />
        </view>
    </view>
    <view class="tags">
      <view class="left">
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
      </view>
    </view>
  </view>
</template>

<script>
  import { fileUpload } from "../../api/file.js"
  import { releasePost } from "../../api/post.js"
  
  export default {
    data() {
      return {
        fileList: [],
        extList: [],
        selectedTag: 0,
        content: '',
        tag: '0',
        range: [],
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
        type: '0',
        tag: this.tag
      }).then(res => {
        uni.switchTab({
          url: "/pages/tabbar/home/home"
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
    }
  }
</script>

<style lang="less">
  .container {
    padding: 10rpx;
    .contentContainer {
      margin-bottom: 10rpx;
      border: 1rpx solid #eea;
    }
    .tags {
      display: flex;
      justify-content: space-between;
      align-items: center;
      vertical-align: middle;
      border: 1rpx solid #eee;
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
  }
</style>
