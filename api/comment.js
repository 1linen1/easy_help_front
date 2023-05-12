// 与评论有关的请求
import {request} from "./request.js"

// 获取帖子评论
export function qryPostCommentPage(data) {
  return request("/comment/qryPostCommentPage", 'POST', data)
}

// 新增评论
export function addComment(data) {
  return request("/comment/addComment", 'POST', data)
}

// 删除评论
export function deleteComment(data) {
  return request("/comment/deleteComment", 'POST', data)
}
