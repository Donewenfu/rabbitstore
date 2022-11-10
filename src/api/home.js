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
export function getHotBrandData () {
  return request('/home/brand', 'get')
}
