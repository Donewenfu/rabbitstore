import request from '@/utils/request'

// 用户登录接口
export function userlogin (params) {
  return request('/login', 'POST', params)
}
