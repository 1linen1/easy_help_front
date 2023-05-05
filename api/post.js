// 与帖子有关的请求
import {request} from "./request.js"

// 发布帖子
export function releasePost(data) {
  return request('/post/addPost', 'POST', data)
}

// 分页查询帖子
export function qryPostPage(data) {
  return request("/post/qryPostPage", 'POST', data)
}

// 增加浏览量
export function addPostViews(postId) {
  return request("/post/addViews/" + postId, 'GET')
}

