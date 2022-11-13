// 请求库
import request from '@/utils/request'

// 获取轮播图数据
export function getBnanerData () {
  return request('/home/banner', 'get')
}

// 获取新鲜好物数据
export function getNewProductData () {
  return request('/home/new', 'get')
}

// 获取热门品牌数据
export function getHotBrandData (limit) {
  return request('/home/brand', 'get', { limit })
}

// 获取首页产品区块数据
export function getIndexGoods () {
  return request('/home/goods', 'get')
}

// 获取最新专题数据
export function getNewSpecData () {
  return request('/home/special', 'get')
}
