// 请求库
import request from '@/utils/request'

// 获取导航链接数据
export function getNavListData () {
  return request('/home/category/head', 'get')
}

// 获取-二级分类列表
export function getCategoryData (id) {
  return request('/category', 'get', { id })
}

// 获取分类筛选条件
export function getFilterproductData (id) {
  return request('category/sub/filter', 'get', { id })
}
