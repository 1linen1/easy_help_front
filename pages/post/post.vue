<template>
  <view>
    <view class="contentContainer">
      <textarea v-model="content"></textarea>
    </view>
    <view class="imageUpload">
        <FileUpload @saveFileInfo="saveFileInfo"></FileUpload>
    </view>
  </view>
</template>

<script setup>
  import {
    onNavigationBarButtonTap
  } from '@dcloudio/uni-app';
  import { ref } from "vue";
  
  // 监听导航栏自定义按钮点击事件
  onNavigationBarButtonTap( (e) => {
    console.log(e);
  })
  
  let content = ref('')
  function saveFileInfo(info) {
    console.log(info);
  }
  
</script>

<style lang="less">

</style>
