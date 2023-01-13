// 加入购物车接口
import request from '@/utils/request'

export function addCartData (params) {
  return request('/member/cart', 'POSt', params)
}
// 获取购物车列表
export function getCartList () {
  return request('/member/cart', 'GET')
}
