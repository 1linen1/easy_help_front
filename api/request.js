// const baseUrl = "http://127.0.0.1:8888/api"
const baseUrl = "http://192.168.43.228:8888/api"

let showLoading = true

export const request = (path, method = 'GET', data = {}, isShowLoading = true) => {
  if (isShowLoading) {
    uni.showLoading({
      title: "请稍等",
      mask: true
    })
  }
  
  let authorization = ''
  if (path !== '/user/login') {
    authorization = uni.getStorageSync("Authorization")
  }
  
  return new Promise((resolve, reject) => {
    uni.request({
      url: baseUrl + path,
      method,
      data,
      header: {
        'Authorization': authorization
      },
      success: (res) => {
        console.log("返回值:", res)
        if (res.data.code === 401 && res.data.msg === "Full authentication is required to access this resource") {
          uni.showToast({
            title: "请先登录!",
            icon: "error"
          })
          uni.reLaunch({
            url: "/pages/login/login"
          })
          return;
        }
        if (res.data.code === 200) {
          console.log("请求成功res:", res)
          resolve(res.data)
        } else {
          uni.showToast({
            title: res.data.msg,
            icon: "error"
          })
          reject(res.data)
        }
      },
      fail: (err) => {
        console.log("请求失败err:", err)
        uni.showToast({
          title: !err.msg ? "请求失败!请稍后再试" : err.msg,
          icon: "error"
        })
        reject(err)
      },
      
      complete() {
        if (isShowLoading) {
          uni.hideLoading()
        }
      }
    })
  })
}