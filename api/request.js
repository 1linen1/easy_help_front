const baseUrl = "http://127.0.0.1:8888/api"

let showLoading = true

export const request = (path, method = 'GET', data = {}) => {
  uni.showLoading({
    title: "请稍等",
    mask: true
  })
  
  let authorization = ''
  if (path !== '/user/login') {
    authorization = 'eyJhbGciOiJIUzUxMiIsInppcCI6IkdaSVAifQ.H4sIAAAAAAAAAKtWKi5NUrJScgwN8dANDXYNUtJRSq0oULIyNLMwMjMwNzcy1VEqLU4t8kwBikGYeYm5qUAtiSm5mXlKtQB5-kDBQgAAAA.aTykz9IU_sYUncUxg6TkV7B6II_hXiov7zVf2NBKS-g9_NEahc-T_i_HfXrZcgR7VSuf-UTdMrgPLfWOJ5YYrw'//uni.getStorageSync("Authorization")
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
        uni.hideLoading()
      }
    })
  })
}