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

// 获取商品24小时热门商品数据 goods/hot?id=1085019&limit=3&type=1
export function getHourListData (params) {
  return request('/goods/hot', 'get', params)
}

// 获取评价信息
export function getEvaluate (id) {
  return request(`https://mock.boxuegu.com/mock/1175/goods/${id}/evaluate`, 'get')
}

// 获取评价列表
export function getCommentListdata (id, params) {
  return request(`https://mock.boxuegu.com/mock/1175/goods/${id}/evaluate/page`, 'get', params)
}
