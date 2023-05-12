import { request } from "./request.js"

// 登录
export function login(data) {
  return request("/user/login", "POST", data)
}

// 退出登录
export function logout() {
  return request("/user/logout", "GET")
}

// 注册
export function register(data) {
  return request("/user/register", "POST", data)
}

// 获取邮箱验证码
export function getVerificationCode(data) {
  return request("/user/getVerificationCode", "POST", data)
}

// 更新别名
export function updateNickname(data) {
  return request("/user/updateNickname", "POST", data)
}

// 获取聊天列表
export function qryChatList(userId) {
  return request("/user/qryChatList/" + userId, "GET")
}

// 获取帮助用户列表
export function qryHelpUserList(data) {
  return request("/user/qryHelpUserList", "POST", data)
}

// 更新用户积分
export function updateUserScores(data) {
  return request("/user/updateUserScores", "POST", data)
}
