<template>
  <view>
    <uni-file-picker 
    	v-model="imageValue"  
      :imageStyles="imageStyles"
    	file-mediatype="image"
    	mode="grid"
    	file-extname="png,jpg"
      :auto-upload="false"
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
  
  // 声明它要触发的事件
  const emit = defineEmits(['saveFileInfo'])
  
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
    // 注意在defineEmits()时接收参数
    emit('saveFileInfo', e)
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