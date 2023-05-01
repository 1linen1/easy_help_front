import { request } from "./request.js"

export function login(data) {
  return request("/user/login", "POST", data)
}

export function logout() {
  return request("/user/logout", "GET")
}

export function register(data) {
  return request("/user/register", "POST", data)
}

export function getVerificationCode(data) {
  return request("/user/getVerificationCode", "POST", data)
}

export function updateNickname(data) {
  return request("/user/updateNickname", "POST", data)
}

