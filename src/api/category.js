// 请求库
import request from '@/utils/request'

// 获取导航链接数据
export function getNavListData () {
  return request('/home/category/head', 'get')
}