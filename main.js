import App from './App'

// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
import ws from "./api/websocket.js"
import * as Pinia from 'pinia'

export function createApp() {
  const app = createSSRApp(App)
  app.use(Pinia.createPinia())
  app.config.globalProperties.$websocket = '' // 定义全局的websocket
  app.config.globalProperties.$setWebsocket = function (userId) {
    console.log("设置设置")
    app.config.globalProperties.$websocket = new ws("ws://127.0.0.1:8888/websocket/" + userId, 5000)
  }
  return {
    app,
    Pinia
  }
}
// #endif