// 请求库
import request from '@/utils/request'

// 获取筛选商品数据
export function finSubgoodsData (params) {
  return request('/category/goods/temporary', 'post', params)
}

// 获取商品详情页数据
export function getGoodsDetail (id) {
  return request('/goods', 'get', { id })
}

// 获取推荐商品数据 商品详情页
export function getRecommendList (id, limit) {
  return request('/goods/relevant', 'get', { id, limit })
}
