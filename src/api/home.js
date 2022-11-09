// 请求库
import request from '@/utils/request'

// 获取轮播图数据
export function getBnanerData () {
  return request('/home/banner', 'get')
}
