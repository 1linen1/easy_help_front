<script setup>
  uni.onTabBarMidButtonTap(() => {
    uni.navigateTo({
      url: "/pages/post/post",
      animationType: 'pop-in',
      animationDuration: 3000
    })
  })
</script>

<style>
	/*每个页面公共css */
    @import url("./static/iconfont/iconfont.css");
</style>
