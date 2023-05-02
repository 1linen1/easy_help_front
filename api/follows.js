// 与评论有关的请求
import {request} from "./request.js" 

// 查询是否已关注
export function isFollow(userId) {
  return request("/follows/isFollow/" + userId, "GET")
}

// 新增关注
export function addFollow(data) {
  return request("/follows/addFollow", "POST", data)
}

// 减关注
export function removeFollow(data) {
  return request("/follows/removeFollow", "POST", data)
}
