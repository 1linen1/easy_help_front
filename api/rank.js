import {request} from "./request.js"

export function getRankPage(data) {
  return request('/user/getRankPage', 'POST', data)
}

export function getMyRank(data) {
  return request('/user/getMyRank', 'POST', data)
}