<template>
  <view class="container">
    <view class="img">
      <image mode="aspectFit" class="logo" src="../../static/logo.png"></image>
    </view>
    <uni-forms ref="form" :modelValue="formData" validate-trigger="blur" :rules="rules">
      <uni-forms-item label="邮箱:" name="username">
        <uni-easyinput trim="all" type="text" v-model="formData.username" placeholder="请输入邮箱" />
      </uni-forms-item>
      <uni-forms-item label="密码:" name="password">
        <uni-easyinput trim="all" type="password" v-model="formData.password" placeholder="请输入密码"></uni-easyinput>
      </uni-forms-item>
    </uni-forms>
    <button class="enter" :style="btnStyleObj" :disabled="clickDisable" @click="submitForm">登录</button>
    <view class="register" @click="toRegister">注册 > </view>
  </view>
</template>

<script>
  import {login} from "../../api/user.js"
  export default {
    data() {
      return {
        email: '',
        clickDisable: true,
        pattern: "^[a-z0-9A-Z]+[- | a-z0-9A-Z . _]+@([a-z0-9A-Z]+(-[a-z0-9A-Z]+)?\\.)+[a-z]{2,}$",
        formData: {
          username: '2696839754@qq.com',
          password: 'admin',
        },
        btnStyleObj: {
          color: "#acacac",
          backgroundColor: "#f7f7f7",
          fontWeight: 400
        },
        rules: {
          username: {
            rules: [
              {
                pattern: "^[a-z0-9A-Z]+[- | a-z0-9A-Z . _]+@([a-z0-9A-Z]+(-[a-z0-9A-Z]+)?\\.)+[a-z]{2,}$",
                errorMessage: "请输入正确的邮箱格式!"
              }
            ]
          },
          password: {
            rules: [
              {
                required: true,
                errorMessage: "密码不能为空!"
              },
              {
                minLength: 5,
                maxLength: 16,
                errorMessage: '密码长度要在6~16位'
              }
            ]
          }
        }
      }
    },
    watch: {
      formData: {
        handler({username, password}, oldValue) {
          if (!username || !password) {
            this.clickDisable = true
            this.btnStyleObj = {
              color: "#acacac",
              fontWeight: 400,
              backgroundColor: "#f7f7f7"
            }
          } else if(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(username)) {
            this.clickDisable = false
            this.btnStyleObj = {
              color: "#56c1c5",
              fontWeight: 700,
              backgroundColor: "#d2feff"
            }
          }
        },
        deep: true,
        immediate: true
      },
    },
    methods: {
      submitForm() {
        this.$refs.form.validate().then((res)=>{
          login(this.formData).then(res => {
            console.log(res)
            if (res.code === 200) {
              uni.setStorageSync("Authorization", res.data.token)
              uni.setStorageSync("user", JSON.stringify(res.data.user))
              uni.switchTab({
                url: "/pages/tabbar/home/home"
              })
            }
          }).catch(err => {
            console.log(err)
          })
        }).catch((err)=>{
          console.log("失败")
        })
      },
      toRegister() {
        uni.navigateTo({
          url: "/pages/register/register"
        })
      },
    }
  }
</script>

<style lang="less">
  .container {
    position: relative;
    padding: 100rpx 40rpx;
    
    .img {
      text-align: center;
      margin-bottom: 20rpx;
      .logo {
        width: 200rpx;
        height: 200rpx;
      }
    }
    .enter {
      width: 600rpx;
    }
    .register {
      position: absolute;
      right: 28rpx;
      width: 100rpx;
      padding: 10rpx;
      font-size: 14px;
      color: #95d8db;
      text-align: right;
    }
  }
</style>
