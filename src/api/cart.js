// 加入购物车接口
import request from '@/utils/request'

export function addCartData (params) {
  return request('/member/cart', 'POSt', params)
}
// 获取购物车列表
export function getCartList () {
  return request('/member/cart', 'GET')
}

// 修改-购物车全选/取消
export function carSelect (params) {
  return request('/member/cart/selected', 'PUT', params)
}

// 修改购物车单选
export function singSelect (skuId, params) {
  return request(`/member/cart/${skuId}`, 'PUT', params)
}

// 删除购物车数据
export function delCartData (params) {
  return request('/member/cart', 'DELETE', params)
}

// 更新购物车商品数据
export function updateProductNum (skuid, count) {
  return request(`/member/cart/${skuid}`, 'PUT', { count })
}

