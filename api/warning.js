// 与举报有关的请求
import {request} from "./request.js"

// 举报
export function addWarning(data) {
  return request("/warning/addWarning", "POST", data)
}

// 查询我的举报信息
export function qryMyWarning(data) {
  return request('/warning/qryMyWarning', 'POST', data)
}