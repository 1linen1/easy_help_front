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
export function addPostViews(data) {
  return request("/post/addViews", 'POST', data)
}

// 增加浏览历史
export function addHistory(data) {
  return request("/history/addHistory", "POST", data)
}

// 分页查询浏览历史
export function qryHistoryPage(data) {
  return request("/history/qryHistoryPage", "POST", data)
}

// 查询用户积分
export function getUserInfo(userId) {
  return request("/user/getUserInfo/" + userId, "GET")
}

// 查询是否收藏
export function qryIsCollect(data) {
  return request("/collect/qryIsCollect", "POST", data)
}

// 添加/取消收藏
export function addCollect(data) {
  return request("/collect/addCollect", "POST", data)
}

// 查询收藏的帖子
export function qryCollectPostPage(data) {
  return request("/collect/qryCollectPostPage", "POST", data)
}

// 查询帖子的可分配积分
export function qryValidScores(postId) {
  return request("/post/qryValidScores/" + postId, "GET")
}

// 查询帖子
export function getPostById(postId) {
  return request("/post/getPostById/" + postId, "GET")
}

// 更新帖子状态为已更新
export function resolvePost(postId) {
  return request("/post/resolvePost/" + postId, "GET")
}

// 查询帮助帖子
export function qryHelpPostPage(data) {
  return request("/post/qryHelpPostPage", "POST", data)
}

// 搜索帖子
export function qryPostPageByContent(data) {
  return request("/post/qryPostPageByContent", "POST", data)
}

// 查询动态帖
export function qryDynamicPage(data) {
  return request("/post/qryDynamicPage", "POST", data)
}

// 猜你喜欢
export function qryRecommendPost(data) {
  return request("/post/qryRecommendPost", "POST", data)
}