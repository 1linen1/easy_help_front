<template>
  <view class="container">
    <uni-forms ref="form" :modelValue="formData" validate-trigger="blur" :rules="rules">
      <uni-forms-item label="邮箱:" name="username">
        <uni-easyinput trim="all" type="text" v-model="formData.username" placeholder="请输入邮箱" />
      </uni-forms-item>   
        <uni-forms-item label="验证码:" name="code">
          <view class="codeConatiner">  
            <view class="content">
              <uni-easyinput trim="all" type="text" v-model="formData.code" placeholder="请输入验证码" />
            </view>
            <view class="send">
              <view class="sendBtn" :style="sendBtnStyle" @click="sendCode">{{msg}}</view>
            </view>
          </view>
        </uni-forms-item>
      <uni-forms-item label="密码:" name="password">
        <uni-easyinput trim="all" type="password" v-model="formData.password" placeholder="请输入5~16位密码"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item label="密码:" name="password2">
        <uni-easyinput trim="all" type="password" v-model="formData.password2" placeholder="确认密码"></uni-easyinput>
      </uni-forms-item>
    </uni-forms>
    <button class="enter" :style="btnStyleObj" @click="submitForm">注册</button>
  </view>
</template>

<script>
  import {register, getVerificationCode} from "../../api/user.js"
  export default {
    data() {
      return  {
        rules: {
          username: {
            rules: [
              {
                required: true,
                errorMessage: "邮箱不能为空!"
              },
              {
                pattern: "^[a-z0-9A-Z]+[- | a-z0-9A-Z . _]+@([a-z0-9A-Z]+(-[a-z0-9A-Z]+)?\\.)+[a-z]{2,}$",
                errorMessage: "请输入正确的邮箱格式!"
              }
            ]
          },
          code: {
            rules: [
              {
                required: true,
                errorMessage: "验证码不能为空!"
              },
              {
                minLength: 6,
                maxLength: 6,
                errorMessage: '验证码长度错误!'
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
                maxLength: 15,
                errorMessage: '密码长度要在~15位'
              }
            ]
          },
          password2: {
            rules: [
              {
                required: true,
                errorMessage: "密码不能为空!"
              },
              {
                validateFunction: function(rule,value,data,callback) {
                  console.log(value)
                  console.log(data)
                  if (value != data.password) {
                    callback('密码与原密码不一致')
                  }
                  return true
                }
              }
            ]
          }
        },
        formData: {
          username: '',
          password: '',
          password2: '',
          code: ''
        },
        msg: '点击获取',
        time: 30,
        sendBtnStyle: {
          color: "#000000"
        },
        btnStyleObj: {
          color: "#56c1c5",
          fontWeight: 700,
          backgroundColor: "#d2feff"
        }
      }
    },
    onReady() {
      // 需要在onReady中设置规则
      this.$refs.form.setRules(this.rules)
    },
    methods: {
      submitForm() {
        this.$refs.form.validate().then((res)=>{
          console.log("成功")
          register({...this.formData, email: this.formData['username']}).then(res => {
            if (res.code === 200) {
              uni.showToast({
                title: "注册成功!",
                icon: "success"
              })
              uni.navigateTo({
                url: "/pages/login/login"
              })
            }
          })
        }).catch((err)=>{
          console.log("失败")
        })
      },
      sendCode() {
        this.$refs.form.validateField(['username']).then((res)=>{
          if (this.time == 30) {
            getVerificationCode({email: this.formData.username}).then(res => {
              console.log(res)
              if (res.code === 200) {
                uni.showToast({
                  title: res.msg
                })
              }
            }).catch(err => {
              console.log(err)
            })
            let timer = setInterval(() => {
              if (this.time >= 0) {
                this.sendBtnStyle = {
                  color: "#999999",
                  fontSize: "10px"
                }
                this.msg = this.time-- + "s后重新获取"
              } else {
                clearInterval(timer)
                this.time = 30
                this.msg = "点击获取"
                this.sendBtnStyle = {
                  color: "#000000",
                  fontSize: "12px"
                }
              }
            }, 1000)
          }
        }).catch((err)=>{
        })
      }
    }
  }
</script>

<style lang="less">
  .container {
    padding: 100rpx 40rpx;
    
    .codeConatiner {
      display: flex;
      flex-direction: coloum;
      .content {
        flex: 2;
      }
      .send {
        display: inline-block;
        flex: 1;
        text-align: center;
        height: 70rpx;
        line-height: 70rpx;
        box-sizing: border-box;
        border: 1px solid #e5e5e5;
        .sendBtn {
          font-size: 12px;
        }
      }
    }
    
    .enter {
      width: 600rpx;
    }
  }
</style>
