// 与关注有关的请求
import {request} from "./request.js" 

// 查询历史消息记录
export function qryMessagePage(data) {
  return request("/message/qryMessagePage", "POST", data)
}