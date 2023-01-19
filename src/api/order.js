// 请求库
import request from '@/utils/request'

// 获取确认订单的数据
export function getCheckorderDat () {
  return request('/member/order/pre', 'GET')
}

// 添加收获地址
export function addAddressData (params) {
  return request('/member/address', 'POST', params)
}

// 提交订单
export function createOrderinfo (params) {
  return request('/member/order', 'POST', params)
}

// 获取订单详情
export function getOrderDetailinfoData (id) {
  return request(`/member/order/${id}`, 'GET')
}

// 获取我的订单
export function getOrderInfo (id) {
  return request(`/member/order/${id}`, 'GET')
}

// 获取订单列表
export function getOrderList (params) {
  return request('/member/order', 'GET', params)
}
