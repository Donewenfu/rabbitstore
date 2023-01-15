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