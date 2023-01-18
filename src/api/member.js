// 请求库
import request from '@/utils/request'

// 获取热销商品数据
export function getHotProduct (params) {
  return request('/goods/hot', 'GET', params)
}

// 获取获取我的足迹
export function getBrowseHistory (params) {
  return request('/member/browseHistory', 'GET', params)
}
