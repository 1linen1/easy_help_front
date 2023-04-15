// 与帖子有关的请求
import {request} from "./request.js"

// 发布帖子
export function releasePost(data) {
  return request('/post/addPost', 'POST', data)
}