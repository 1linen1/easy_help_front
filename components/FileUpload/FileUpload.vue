<template>
  <view>
    <uni-file-picker 
    	v-model="imageValue"  
      :imageStyles="imageStyles"
    	file-mediatype="image"
    	mode="grid"
    	file-extname="png,jpg"
    	:limit="6"
    	@progress="progress" 
    	@success="success" 
    	@fail="fail" 
    	@select="select"
    />
  </view>
</template>

<script setup>
  import { ref } from "vue";
  let imageStyles = ref({
    border: {
      color: "#eaa",
      width: 2,
      style: "dashed",
      radius: "2rpx"
    }
  })
  let imageValue = ref([])
  function select(e) {
    console.log("选择文件:", e);
  }
  function progress(e) {
    console.log("上传进度:", e);
  }
  function success(e) {
    console.log("成功上传回调:", e);
  }
  function fail(e) {
    console.log("失败回调:", e);
  }
</script>

<style>

</style>